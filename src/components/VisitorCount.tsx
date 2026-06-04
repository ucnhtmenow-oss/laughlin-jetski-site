import { useEffect, useState } from "react";

type VisitorCountState =
  | { status: "loading"; label: string }
  | { status: "ready"; label: string; count: number; title?: string }
  | { status: "error"; label: string; title?: string };

const LOCAL_STORAGE_KEY = "ljr:localRiverChecks:v1";
const PUBLIC_BASELINE_COUNT = 6300;

function safeParseInt(value: string | null): number | null {
  if (value == null) return null;

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function incrementLocalVisits(): number {
  const current = safeParseInt(window.localStorage.getItem(LOCAL_STORAGE_KEY)) ?? 0;
  const next = Math.max(0, current) + 1;

  window.localStorage.setItem(LOCAL_STORAGE_KEY, String(next));

  return next;
}

function buildCountApiUrl(hostname: string): string {
  const namespace = encodeURIComponent(hostname || "laughlinjetskirentals.com");
  const key = encodeURIComponent("river-checks");

  return `https://api.countapi.xyz/hit/${namespace}/${key}`;
}

declare global {
  interface Window {
    __ljrVisitorCounterInit?: boolean;
  }
}

export default function VisitorCount() {
  const [state, setState] = useState<VisitorCountState>({
    status: "loading",
    label: "River Checks",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__ljrVisitorCounterInit) return;

    window.__ljrVisitorCounterInit = true;

    let isActive = true;
    let localVisits = 0;

    try {
      localVisits = incrementLocalVisits();
    } catch {
      // Ignore storage failures such as private browsing or blocked storage.
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);

    const hostname = window.location.hostname;
    const url = buildCountApiUrl(hostname);

    fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Request failed (${response.status})`);
        }

        const data = (await response.json()) as { value?: unknown };
        const value = typeof data.value === "number" ? data.value : null;

        if (value == null) {
          throw new Error("Invalid response");
        }

        if (!isActive) return;

        setState({
          status: "ready",
          label: "River Checks",
          count: PUBLIC_BASELINE_COUNT + value,
          title: "Public river check counter.",
        });
      })
      .catch(() => {
        if (!isActive) return;

        if (localVisits > 0) {
          setState({
            status: "ready",
            label: "River Checks",
            count: PUBLIC_BASELINE_COUNT + localVisits,
            title: "Showing a local fallback count.",
          });

          return;
        }

        setState({
          status: "error",
          label: "River Checks: 6,300+",
          title: "Public counter unavailable.",
        });
      })
      .finally(() => {
        if (!isActive) return;
        window.clearTimeout(timeout);
      });

    return () => {
      isActive = false;
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  if (state.status === "loading") {
    return (
      <span className="visitor-count" aria-label="River checks loading">
        {state.label}: 1,328+
      </span>
    );
  }

  if (state.status === "error") {
    return (
      <span className="visitor-count" title={state.title}>
        {state.label}
      </span>
    );
  }

  return (
    <span className="visitor-count" title={state.title}>
      {state.label}: {state.count.toLocaleString()}+
    </span>
  );
}