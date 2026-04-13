import { useMemo, useState } from "react";

type WalkthroughPhoto = {
  src: string;
  alt: string;
  title: string;
  description: string;
  label?: string;
};

type WalkthroughStep = {
  title: string;
  text: string;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
};

type WalkthroughSectionProps = {
  title?: string;
  subtitle?: string;
  videoUrl: string;
  videoPoster?: string;
  photos: WalkthroughPhoto[];
  steps?: WalkthroughStep[];
};

export default function WalkthroughSection({
  title = "Virtual Walkthrough",
  subtitle = "Watch the dock approach, then click through the photo tour so guests know exactly where to park, walk, and board.",
  videoUrl,
  videoPoster,
  photos,
  steps = [],
}: WalkthroughSectionProps) {
  const safePhotos = useMemo<WalkthroughPhoto[]>(
    () =>
      photos.length > 0
        ? photos
        : [
          {
            src: "",
            alt: "Add your first walkthrough photo",
            title: "Add your dock photos",
            description:
              "Replace the placeholder photo paths in App.tsx with your real images.",
            label: "Placeholder",
          },
        ],
    [photos]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const activePhoto = safePhotos[activeIndex];

  const goPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? safePhotos.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === safePhotos.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="walkthrough" className="walkthrough-section-premium">
      <style>{`
                .walkthrough-section-premium {
                    position: relative;
                    padding: 82px 24px 90px;
                    color: #f6f2ff;
                    background:
                        radial-gradient(circle at top left, rgba(93, 61, 162, 0.18), transparent 26%),
                        radial-gradient(circle at bottom right, rgba(40, 24, 84, 0.18), transparent 28%),
                        linear-gradient(180deg, rgba(10, 7, 25, 0.94) 0%, rgba(13, 8, 31, 0.98) 52%, rgba(7, 5, 18, 1) 100%);
                }

                .walkthrough-shell {
                    width: min(1180px, 100%);
                    margin: 0 auto;
                }

                .walkthrough-header {
                    max-width: 820px;
                    margin: 0 auto 32px;
                    text-align: center;
                }

                .walkthrough-kicker {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 16px;
                    border-radius: 999px;
                    border: 1px solid rgba(130, 98, 214, 0.32);
                    background: rgba(40, 20, 85, 0.38);
                    color: #d7cbff;
                    font-size: 0.82rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    margin-bottom: 18px;
                }

                .walkthrough-title {
                    margin: 0 0 14px;
                    font-size: clamp(2rem, 5vw, 3.35rem);
                    line-height: 1.05;
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    color: #ffffff;
                }

                .walkthrough-subtitle {
                    margin: 0 auto;
                    max-width: 760px;
                    font-size: 1.02rem;
                    line-height: 1.75;
                    color: rgba(233, 226, 255, 0.82);
                }

                .walkthrough-steps-top {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 18px;
                    margin: 0 0 32px;
                }

                .walkthrough-step-card {
                    overflow: hidden;
                    border-radius: 24px;
                    border: 1px solid rgba(108, 77, 183, 0.28);
                    background: linear-gradient(180deg, rgba(19, 10, 43, 0.92), rgba(9, 5, 24, 0.98));
                    box-shadow:
                        0 22px 60px rgba(0, 0, 0, 0.24),
                        inset 0 1px 0 rgba(255, 255, 255, 0.04);
                    backdrop-filter: blur(14px);
                }

                .walkthrough-step-image {
                    display: block;
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    background: #10081f;
                    border-bottom: 1px solid rgba(108, 77, 183, 0.22);
                }

                .walkthrough-step-body {
                    padding: 18px;
                }

                .walkthrough-step-index {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    margin-bottom: 12px;
                    border-radius: 999px;
                    background: rgba(76, 156, 255, 0.12);
                    color: #dff1ff;
                    border: 1px solid rgba(107, 163, 255, 0.26);
                    font-weight: 900;
                    font-size: 0.9rem;
                }

                .walkthrough-step-title {
                    margin: 0 0 8px;
                    font-size: 1.08rem;
                    font-weight: 800;
                    color: #ffffff;
                    line-height: 1.2;
                }

                .walkthrough-step-text {
                    margin: 0;
                    font-size: 0.95rem;
                    line-height: 1.75;
                    color: rgba(229, 221, 252, 0.78);
                }

                .walkthrough-main-grid {
                    display: grid;
                    grid-template-columns: 1.05fr 0.95fr;
                    gap: 26px;
                    align-items: start;
                }

                .walkthrough-left-stack {
                    display: grid;
                    gap: 18px;
                }

                .walkthrough-card-premium {
                    position: relative;
                    overflow: hidden;
                    border-radius: 28px;
                    border: 1px solid rgba(108, 77, 183, 0.28);
                    background: linear-gradient(180deg, rgba(19, 10, 43, 0.92), rgba(9, 5, 24, 0.98));
                    box-shadow:
                        0 28px 90px rgba(0, 0, 0, 0.34),
                        inset 0 1px 0 rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(16px);
                }

                .walkthrough-card-inner {
                    padding: 20px;
                }

                .walkthrough-card-header {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    gap: 12px;
                    align-items: center;
                    margin-bottom: 14px;
                }

                .walkthrough-card-title {
                    margin: 0;
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: #ffffff;
                }

                .walkthrough-chip {
                    display: inline-flex;
                    align-items: center;
                    border-radius: 999px;
                    padding: 8px 12px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #e7ddff;
                    background: rgba(57, 32, 117, 0.42);
                    border: 1px solid rgba(121, 92, 198, 0.28);
                }

                .walkthrough-video-wrap {
                    overflow: hidden;
                    border-radius: 20px;
                    background: #080512;
                    border: 1px solid rgba(108, 77, 183, 0.22);
                }

                .walkthrough-video {
                    display: block;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    object-fit: cover;
                    background: #080512;
                }

                .walkthrough-card-note {
                    margin: 14px 0 0;
                    font-size: 0.94rem;
                    line-height: 1.7;
                    color: rgba(228, 220, 250, 0.76);
                }

                .walkthrough-ad-card {
                    overflow: hidden;
                    border-radius: 24px;
                    border: 1px solid rgba(108, 77, 183, 0.28);
                    background: linear-gradient(180deg, rgba(21, 12, 47, 0.96), rgba(10, 6, 25, 0.98));
                    box-shadow:
                        0 22px 70px rgba(0, 0, 0, 0.24),
                        inset 0 1px 0 rgba(255, 255, 255, 0.04);
                }

                .walkthrough-ad-inner {
                    padding: 20px;
                }

                .walkthrough-ad-tag {
                    display: inline-flex;
                    align-items: center;
                    padding: 7px 10px;
                    border-radius: 999px;
                    margin-bottom: 12px;
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #efe5ff;
                    background: rgba(72, 45, 143, 0.44);
                    border: 1px solid rgba(137, 108, 212, 0.24);
                }

                .walkthrough-ad-visual {
                    min-height: 156px;
                    border-radius: 18px;
                    display: grid;
                    place-items: center;
                    text-align: center;
                    padding: 18px;
                    background:
                        radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 35%),
                        linear-gradient(135deg, rgba(95, 64, 173, 0.9), rgba(31, 18, 73, 1));
                    border: 1px solid rgba(167, 141, 235, 0.18);
                    color: #ffffff;
                    font-weight: 800;
                    font-size: clamp(1.15rem, 2vw, 1.6rem);
                    line-height: 1.2;
                }

                .walkthrough-ad-copy {
                    margin-top: 14px;
                }

                .walkthrough-ad-copy h4 {
                    margin: 0 0 8px;
                    font-size: 1rem;
                    color: #ffffff;
                }

                .walkthrough-ad-copy p {
                    margin: 0 0 14px;
                    font-size: 0.94rem;
                    line-height: 1.7;
                    color: rgba(231, 223, 253, 0.78);
                }

                .walkthrough-ad-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .walkthrough-ad-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 140px;
                    padding: 11px 14px;
                    border-radius: 14px;
                    font-size: 0.9rem;
                    font-weight: 800;
                    color: #ffffff;
                    text-decoration: none;
                    border: 1px solid rgba(121, 92, 198, 0.28);
                    background: rgba(57, 32, 117, 0.3);
                }

                .tour-card {
                    position: relative;
                    overflow: hidden;
                    border-radius: 28px;
                    border: 1px solid rgba(108, 77, 183, 0.28);
                    background: linear-gradient(180deg, rgba(19, 10, 43, 0.92), rgba(9, 5, 24, 0.98));
                    box-shadow:
                        0 28px 90px rgba(0, 0, 0, 0.34),
                        inset 0 1px 0 rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(16px);
                }

                .tour-card-inner {
                    padding: 20px;
                }

                .tour-main {
                    position: relative;
                    overflow: hidden;
                    border-radius: 22px;
                    border: 1px solid rgba(108, 77, 183, 0.22);
                    background: linear-gradient(180deg, rgba(21, 11, 46, 0.94), rgba(10, 6, 24, 0.98));
                    min-height: 420px;
                }

                .tour-main img {
                    display: block;
                    width: 100%;
                    height: 420px;
                    object-fit: cover;
                    background: #10081f;
                }

                .tour-empty {
                    min-height: 420px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 24px;
                    color: rgba(233, 226, 255, 0.72);
                    background: linear-gradient(180deg, rgba(21, 11, 46, 0.94), rgba(10, 6, 24, 0.98));
                }

                .tour-overlay {
                    position: absolute;
                    inset: auto 16px 16px 16px;
                    display: grid;
                    gap: 12px;
                    padding: 16px;
                    border-radius: 18px;
                    background: linear-gradient(
                        180deg,
                        rgba(10, 6, 20, 0.16) 0%,
                        rgba(10, 6, 20, 0.82) 100%
                    );
                    border: 1px solid rgba(154, 129, 224, 0.16);
                }

                .tour-label {
                    display: inline-flex;
                    width: fit-content;
                    align-items: center;
                    padding: 7px 10px;
                    border-radius: 999px;
                    font-size: 0.76rem;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: #efe5ff;
                    background: rgba(72, 45, 143, 0.44);
                    border: 1px solid rgba(137, 108, 212, 0.24);
                }

                .tour-title {
                    margin: 0;
                    font-size: 1.22rem;
                    font-weight: 800;
                    color: #ffffff;
                }

                .tour-description {
                    margin: 0;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    color: rgba(234, 227, 255, 0.82);
                }

                .tour-controls {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 14px;
                    margin-top: 14px;
                }

                .tour-buttons {
                    display: flex;
                    gap: 10px;
                }

                .tour-button {
                    border: 1px solid rgba(121, 92, 198, 0.28);
                    background: rgba(57, 32, 117, 0.3);
                    color: #ffffff;
                    width: 48px;
                    height: 48px;
                    border-radius: 14px;
                    font-size: 1.25rem;
                    font-weight: 800;
                    cursor: pointer;
                    transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
                }

                .tour-button:hover {
                    transform: translateY(-1px);
                    background: rgba(83, 53, 162, 0.42);
                    border-color: rgba(149, 120, 226, 0.38);
                }

                .tour-counter {
                    color: rgba(236, 229, 255, 0.82);
                    font-size: 0.9rem;
                    font-weight: 700;
                }

                .tour-thumbs {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 10px;
                    margin-top: 14px;
                }

                .tour-thumb {
                    position: relative;
                    overflow: hidden;
                    border-radius: 14px;
                    border: 1px solid rgba(108, 77, 183, 0.22);
                    background: rgba(24, 13, 52, 0.84);
                    cursor: pointer;
                    padding: 0;
                    min-height: 76px;
                    transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
                }

                .tour-thumb:hover {
                    transform: translateY(-1px);
                    border-color: rgba(149, 120, 226, 0.38);
                }

                .tour-thumb.active {
                    border-color: rgba(188, 168, 255, 0.62);
                    box-shadow: 0 0 0 1px rgba(188, 168, 255, 0.18);
                }

                .tour-thumb img {
                    width: 100%;
                    height: 76px;
                    object-fit: cover;
                    display: block;
                    background: #10081f;
                }

                .tour-thumb-fallback {
                    min-height: 76px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    color: rgba(233, 226, 255, 0.72);
                    padding: 8px;
                    text-align: center;
                }

                .tour-thumb-title {
                    position: absolute;
                    left: 8px;
                    right: 8px;
                    bottom: 8px;
                    padding: 5px 7px;
                    border-radius: 10px;
                    font-size: 0.68rem;
                    font-weight: 800;
                    color: #ffffff;
                    background: rgba(10, 6, 20, 0.68);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                @media (max-width: 980px) {
                    .walkthrough-steps-top,
                    .walkthrough-main-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 640px) {
                    .walkthrough-section-premium {
                        padding: 72px 16px 80px;
                    }

                    .walkthrough-card-inner,
                    .tour-card-inner,
                    .walkthrough-ad-inner {
                        padding: 16px;
                    }

                    .walkthrough-step-image {
                        height: 190px;
                    }

                    .tour-main img,
                    .tour-empty {
                        min-height: 300px;
                        height: 300px;
                    }

                    .tour-thumbs {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .tour-controls {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .tour-buttons {
                        justify-content: space-between;
                    }

                    .tour-button {
                        flex: 1;
                    }
                }
            `}</style>

      <div className="walkthrough-shell">
        <div className="walkthrough-header">
          <div className="walkthrough-kicker">Dock directions + tour</div>
          <h2 className="walkthrough-title">{title}</h2>
          <p className="walkthrough-subtitle">{subtitle}</p>
        </div>

        {steps.length > 0 ? (
          <div className="walkthrough-steps-top">
            {steps.map((step, index) => (
              <article key={`${step.title}-${index}`} className="walkthrough-step-card">
                {step.imageSrc ? (
                  <img
                    className="walkthrough-step-image"
                    src={step.imageSrc}
                    alt={step.imageAlt ?? step.title}
                  />
                ) : null}
                <div className="walkthrough-step-body">
                  <div className="walkthrough-step-index">
                    {step.badge ?? index + 1}
                  </div>
                  <h3 className="walkthrough-step-title">{step.title}</h3>
                  <p className="walkthrough-step-text">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        <div className="walkthrough-main-grid">
          <div className="walkthrough-left-stack">
            <article className="walkthrough-card-premium">
              <div className="walkthrough-card-inner">
                <div className="walkthrough-card-header">
                  <h3 className="walkthrough-card-title">Video walkthrough</h3>
                  <span className="walkthrough-chip">Autoplay preview</span>
                </div>

                <div className="walkthrough-video-wrap">
                  <video
                    className="walkthrough-video"
                    src={videoUrl}
                    poster={videoPoster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                </div>

                <p className="walkthrough-card-note">
                  Use this clip to show the real dock approach, where guests should
                  stop, and how they get from parking to the skis.
                </p>
              </div>
            </article>

            <article className="walkthrough-ad-card">
              <div className="walkthrough-ad-inner">
                <span className="walkthrough-ad-tag">Advertisement</span>
                <div className="walkthrough-ad-visual">
                  Sponsor This Spot
                </div>
                <div className="walkthrough-ad-copy">
                  <h4>Put your brand right under the walkthrough</h4>
                  <p>
                    This slot is perfect for a local sponsor, hotel partner, river
                    business, or promo graphic. Swap the placeholder with a real
                    ad image whenever you’re ready.
                  </p>
                  <div className="walkthrough-ad-buttons">
                    <a href="#contact" className="walkthrough-ad-button">
                      Reserve Ad Space
                    </a>
                    <a href="#location" className="walkthrough-ad-button">
                      View Location
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <article className="tour-card">
            <div className="tour-card-inner">
              <div className="walkthrough-card-header">
                <h3 className="walkthrough-card-title">Photo tour</h3>
                <span className="walkthrough-chip">360-style gallery</span>
              </div>

              <div className="tour-main">
                {activePhoto.src ? (
                  <img src={activePhoto.src} alt={activePhoto.alt} />
                ) : (
                  <div className="tour-empty">
                    Add your first walkthrough image in App.tsx.
                  </div>
                )}

                <div className="tour-overlay">
                  {activePhoto.label ? (
                    <span className="tour-label">{activePhoto.label}</span>
                  ) : null}
                  <h4 className="tour-title">{activePhoto.title}</h4>
                  <p className="tour-description">{activePhoto.description}</p>
                </div>
              </div>

              <div className="tour-controls">
                <div className="tour-counter">
                  {activeIndex + 1} / {safePhotos.length}
                </div>

                <div className="tour-buttons">
                  <button
                    type="button"
                    className="tour-button"
                    onClick={goPrev}
                    aria-label="Previous photo"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="tour-button"
                    onClick={goNext}
                    aria-label="Next photo"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="tour-thumbs">
                {safePhotos.map((photo, index) => (
                  <button
                    key={`${photo.title}-${index}`}
                    type="button"
                    className={`tour-thumb ${index === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show photo ${index + 1}`}
                  >
                    {photo.src ? (
                      <img src={photo.src} alt={photo.alt} />
                    ) : (
                      <div className="tour-thumb-fallback">Add image</div>
                    )}
                    <span className="tour-thumb-title">{photo.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}