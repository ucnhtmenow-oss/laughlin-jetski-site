import WalkthroughSection from "../components/WalkthroughSection";

const walkthroughPhotos = [
  {
    src: "/jetski/walkthrough-01.jpg",
    alt: "Parking area near the dock",
    title: "Start here",
    description:
      "Guests can use this first view to recognize the parking area and where to begin walking toward the dock.",
    label: "Parking",
  },
  {
    src: "/jetski/walkthrough-02.jpg",
    alt: "Path from parking to the dock",
    title: "Walk toward the dock",
    description:
      "Use this frame to show the exact direction guests should head after parking so nobody is wandering around confused.",
    label: "Path",
  },
  {
    src: "/jetski/walkthrough-03.jpg",
    alt: "Dock entrance and staging area",
    title: "Dock entrance",
    description:
      "Highlight the dock entry, waiting area, or check-in point so customers know where the handoff happens.",
    label: "Dock",
  },
  {
    src: "/jetski/walkthrough-04.jpg",
    alt: "Jet skis at the boarding area",
    title: "Boarding spot",
    description:
      "Show the final boarding location so guests can immediately recognize where the skis are staged.",
    label: "Boarding",
  },
];

const walkthroughSteps = [
  {
    title: "Park and unload",
    text: "Park in the designated area, grab your gear, and head toward the dock entrance shown in the walkthrough.",
  },
  {
    title: "Follow the marked path",
    text: "Use the video and photo tour to follow the same path from the lot to the water without second-guessing where to go.",
  },
  {
    title: "Meet at the boarding area",
    text: "Once you reach the dock, head to the boarding area shown in the last photo and wait there for check-in and launch instructions.",
  },
];

export default function JetSkiRentalPage() {
  return (
    <>
      <style>{`
        .jetski-page {
          min-height: 100vh;
          color: #f4fbff;
          background:
            radial-gradient(circle at top left, rgba(45, 212, 191, 0.14), transparent 24%),
            radial-gradient(circle at top right, rgba(59, 130, 246, 0.12), transparent 24%),
            linear-gradient(180deg, #0b1216 0%, #101a20 55%, #091015 100%);
        }

        .jetski-hero {
          position: relative;
          overflow: hidden;
          padding: 110px 24px 80px;
        }

        .jetski-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(6, 12, 16, 0.32) 0%, rgba(6, 12, 16, 0.72) 100%),
            url("/jetski/hero-ski-beach.jpg") center / cover no-repeat;
          opacity: 0.34;
          pointer-events: none;
        }

        .jetski-hero-inner {
          position: relative;
          z-index: 1;
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 30px;
          align-items: center;
        }

        .jetski-hero-copy {
          max-width: 700px;
        }

        .jetski-kicker {
          display: inline-flex;
          align-items: center;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #93f3ff;
          border: 1px solid rgba(147, 243, 255, 0.2);
          background: rgba(255, 255, 255, 0.06);
          margin-bottom: 18px;
        }

        .jetski-title {
          margin: 0 0 18px;
          font-size: clamp(2.6rem, 6vw, 5.25rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 900;
        }

        .jetski-title span {
          display: block;
          color: #93f3ff;
        }

        .jetski-subtitle {
          margin: 0 0 28px;
          max-width: 660px;
          font-size: 1.06rem;
          line-height: 1.85;
          color: rgba(227, 241, 247, 0.84);
        }

        .jetski-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .jetski-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 172px;
          padding: 14px 20px;
          border-radius: 16px;
          font-size: 0.98rem;
          font-weight: 800;
          text-decoration: none;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }

        .jetski-button:hover {
          transform: translateY(-1px);
        }

        .jetski-button-primary {
          color: #041218;
          background: linear-gradient(180deg, #8df3ff 0%, #53dff0 100%);
          box-shadow: 0 16px 40px rgba(83, 223, 240, 0.18);
        }

        .jetski-button-secondary {
          color: #effaff;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
        }

        .jetski-hero-card {
          position: relative;
          z-index: 1;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.05);
          box-shadow:
            0 28px 90px rgba(0, 0, 0, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(16px);
        }

        .jetski-hero-card img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
          background: #0b1318;
        }

        .jetski-hero-card-overlay {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          padding: 16px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(4, 10, 14, 0.2), rgba(4, 10, 14, 0.8));
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .jetski-hero-card-overlay h2 {
          margin: 0 0 8px;
          font-size: 1.1rem;
          font-weight: 800;
        }

        .jetski-hero-card-overlay p {
          margin: 0;
          font-size: 0.94rem;
          line-height: 1.7;
          color: rgba(229, 241, 245, 0.82);
        }

        .jetski-features {
          padding: 0 24px 38px;
        }

        .jetski-features-inner {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .jetski-feature-card {
          padding: 20px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.035);
        }

        .jetski-feature-card h3 {
          margin: 0 0 10px;
          font-size: 1rem;
          font-weight: 800;
        }

        .jetski-feature-card p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.75;
          color: rgba(221, 237, 244, 0.78);
        }

        .jetski-map {
          padding: 18px 24px 88px;
        }

        .jetski-map-inner {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 0.95fr;
          gap: 22px;
        }

        .jetski-map-card {
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.045);
          box-shadow:
            0 28px 90px rgba(0, 0, 0, 0.26),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .jetski-map-card iframe,
        .jetski-map-card img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 420px;
          border: 0;
          background: #0b1318;
          object-fit: cover;
        }

        .jetski-map-copy {
          padding: 26px;
        }

        .jetski-map-copy .jetski-kicker {
          margin-bottom: 14px;
        }

        .jetski-map-copy h2 {
          margin: 0 0 14px;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .jetski-map-copy p {
          margin: 0 0 16px;
          font-size: 0.98rem;
          line-height: 1.8;
          color: rgba(225, 239, 245, 0.8);
        }

        .jetski-map-list {
          margin: 0;
          padding-left: 20px;
          color: rgba(236, 247, 252, 0.86);
        }

        .jetski-map-list li {
          margin-bottom: 10px;
          line-height: 1.7;
        }

        @media (max-width: 980px) {
          .jetski-hero-inner,
          .jetski-features-inner,
          .jetski-map-inner {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .jetski-hero {
            padding: 88px 16px 64px;
          }

          .jetski-features,
          .jetski-map {
            padding-left: 16px;
            padding-right: 16px;
          }

          .jetski-actions {
            flex-direction: column;
          }

          .jetski-button {
            width: 100%;
          }

          .jetski-hero-card img,
          .jetski-map-card iframe,
          .jetski-map-card img {
            min-height: 300px;
          }

          .jetski-map-copy {
            padding: 20px;
          }
        }
      `}</style>

      <main className="jetski-page">
        <section className="jetski-hero">
          <div className="jetski-hero-inner">
            <div className="jetski-hero-copy">
              <div className="jetski-kicker">Laughlin river rentals</div>
              <h1 className="jetski-title">
                Jet ski rentals
                <span>made easy to find</span>
              </h1>
              <p className="jetski-subtitle">
                Show customers exactly where to go before they ever leave home.
                This layout gives you a strong hero section, a clean walkthrough,
                and clear dock directions so fewer people call asking where the
                hell they’re supposed to be.
              </p>

              <div className="jetski-actions">
                <a className="jetski-button jetski-button-primary" href="#walkthrough">
                  View walkthrough
                </a>
                <a className="jetski-button jetski-button-secondary" href="#location">
                  Find the dock
                </a>
              </div>
            </div>

            <div className="jetski-hero-card">
              <img src="/jetski/hero-ski-beach.jpg" alt="Jet ski rental hero" />
              <div className="jetski-hero-card-overlay">
                <h2>Show the exact experience</h2>
                <p>
                  Swap this hero image for your best dock or river photo so the
                  page instantly feels real, local, and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="jetski-features">
          <div className="jetski-features-inner">
            <article className="jetski-feature-card">
              <h3>Fast visual directions</h3>
              <p>
                Use photos and video to show the real route from parking to the
                dock so guests don’t waste time hunting around.
              </p>
            </article>

            <article className="jetski-feature-card">
              <h3>Less confusion on arrival</h3>
              <p>
                A walkthrough answers the same questions before people ask them,
                which means fewer repeated calls and smoother handoffs.
              </p>
            </article>

            <article className="jetski-feature-card">
              <h3>Feels more legit</h3>
              <p>
                A strong virtual tour makes the business look established instead
                of slapped together by a man fighting with a footer at midnight.
              </p>
            </article>
          </div>
        </section>

        <WalkthroughSection
          videoUrl="/jetski/walkthrough-video.mp4"
          videoPoster="/jetski/walkthrough-poster.jpg"
          photos={walkthroughPhotos}
          steps={walkthroughSteps}
        />

        <section id="location" className="jetski-map">
          <div className="jetski-map-inner">
            <div className="jetski-map-card">
              <iframe
                title="Jet ski dock location map"
                src="https://www.google.com/maps?q=Laughlin%20Nevada&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="jetski-map-card">
              <div className="jetski-map-copy">
                <div className="jetski-kicker">Dock location</div>
                <h2>Replace this with your exact launch spot</h2>
                <p>
                  This map is just a starter so the page renders immediately.
                  Replace the embed URL with your exact dock pin once you have
                  the final location link.
                </p>
                <ul className="jetski-map-list">
                  <li>Paste your exact Google Maps embed link here.</li>
                  <li>Add the dock screenshot or overhead image if you want both.</li>
                  <li>Match the walkthrough photos to the same route customers will take.</li>
                  <li>Use the final photo to show the exact boarding location.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
