import WalkthroughSection from "../components/WalkthroughSection";

const PHONE = "(702) 624-7149";
const PHONE_LINK = "tel:+17026247149";
const ADDRESS = "1950 S Casino Dr, Laughlin, NV 89029";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=1950+S+Casino+Dr+Laughlin+NV+89029";
const BOOKING_URL = "https://laughlinjetskirentalsllc.setmore.com/";

const walkthroughPhotos = [
  {
    src: "/jetski/walkthrough-01.jpg",
    alt: "Parking area near the dock",
    title: "Start here",
    description: "Park near Casino Drive and follow the walkthrough toward the dock.",
    label: "Parking",
  },
  {
    src: "/jetski/walkthrough-02.jpg",
    alt: "Path from parking to the dock",
    title: "Walk toward the dock",
    description: "Follow the route shown so you know exactly where to go.",
    label: "Path",
  },
  {
    src: "/jetski/walkthrough-03.jpg",
    alt: "Dock entrance and staging area",
    title: "Dock entrance",
    description: "This is where customers should head for check-in.",
    label: "Dock",
  },
  {
    src: "/jetski/walkthrough-04.jpg",
    alt: "Jet skis at the boarding area",
    title: "Boarding spot",
    description: "Meet at the boarding area for launch instructions.",
    label: "Boarding",
  },
];

const walkthroughSteps = [
  {
    title: "Park and unload",
    text: "Park near the location, grab your gear, and head toward the dock entrance.",
  },
  {
    title: "Follow the walkthrough",
    text: "Use the photos and video to follow the route from parking to the water.",
  },
  {
    title: "Meet at the boarding area",
    text: "Wait at the boarding area for check-in, safety instructions, and launch.",
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
            linear-gradient(180deg, rgba(6, 12, 16, 0.32), rgba(6, 12, 16, 0.72)),
            url("/jetski/hero-ski-beach.jpg") center / cover no-repeat;
          opacity: 0.34;
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

        .jetski-kicker {
          display: inline-flex;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: .8rem;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #93f3ff;
          border: 1px solid rgba(147,243,255,.2);
          background: rgba(255,255,255,.06);
          margin-bottom: 18px;
        }

        .jetski-title {
          margin: 0 0 18px;
          font-size: clamp(2.6rem, 6vw, 5.25rem);
          line-height: .95;
          letter-spacing: -.05em;
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
          color: rgba(227,241,247,.84);
        }

        .jetski-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 22px;
        }

        .jetski-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 172px;
          padding: 14px 20px;
          border-radius: 16px;
          font-size: .98rem;
          font-weight: 800;
          text-decoration: none;
        }

        .jetski-button-primary {
          color: #041218;
          background: linear-gradient(180deg, #8df3ff, #53dff0);
        }

        .jetski-button-secondary {
          color: #effaff;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.05);
        }

        .jetski-info {
          display: grid;
          gap: 8px;
          color: rgba(236,247,252,.9);
          line-height: 1.6;
        }

        .jetski-info a {
          color: #93f3ff;
        }

        .jetski-hero-card, .jetski-card {
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.05);
        }

        .jetski-hero-card img {
          display: block;
          width: 100%;
          min-height: 420px;
          object-fit: cover;
        }

        .jetski-section {
          padding: 38px 24px;
        }

        .jetski-section-inner {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .jetski-card {
          padding: 22px;
        }

        .jetski-card h2, .jetski-card h3 {
          margin: 0 0 10px;
        }

        .jetski-card p, .jetski-card li {
          color: rgba(221,237,244,.8);
          line-height: 1.75;
        }

        .jetski-map {
          padding: 38px 24px 88px;
        }

        .jetski-map-inner {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr .95fr;
          gap: 22px;
        }

        .jetski-map iframe {
          width: 100%;
          min-height: 420px;
          border: 0;
        }

        @media (max-width: 980px) {
          .jetski-hero-inner,
          .jetski-section-inner,
          .jetski-map-inner {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .jetski-hero, .jetski-section, .jetski-map {
            padding-left: 16px;
            padding-right: 16px;
          }

          .jetski-actions {
            flex-direction: column;
          }

          .jetski-button {
            width: 100%;
          }
        }
      `}</style>

      <main className="jetski-page">
        <section className="jetski-hero">
          <div className="jetski-hero-inner">
            <div>
              <div className="jetski-kicker">Laughlin Jet Ski Rentals</div>
              <h1 className="jetski-title">
                Jet Ski Rentals
                <span>in Laughlin, NV</span>
              </h1>

              <p className="jetski-subtitle">
                Ride the Colorado River with Laughlin Jet Ski Rentals. Walk-ins
                welcome, same-day availability when available, and easy online booking.
              </p>

              <div className="jetski-actions">
                <a className="jetski-button jetski-button-primary" href={BOOKING_URL}>
                  Book Now
                </a>
                <a className="jetski-button jetski-button-secondary" href={PHONE_LINK}>
                  Call/Text {PHONE}
                </a>
                <a className="jetski-button jetski-button-secondary" href={MAP_URL}>
                  Get Directions
                </a>
              </div>

              <div className="jetski-info">
                <div><strong>Location:</strong> {ADDRESS}</div>
                <div><strong>Hours:</strong> Open Daily 9:00 AM – 5:00 PM</div>
                <div><strong>Phone:</strong> <a href={PHONE_LINK}>{PHONE}</a></div>
              </div>
            </div>

            <div className="jetski-hero-card">
              <img src="/jetski/hero-ski-beach.jpg" alt="Jet ski rental on the Colorado River" />
            </div>
          </div>
        </section>

        <section className="jetski-section">
          <div className="jetski-section-inner">
            <article className="jetski-card">
              <h2>Rental Pricing</h2>
              <p><strong>2-Hour Jet Ski Rental:</strong> Starting at $175</p>
              <p>Call for same-day availability, group rentals, and current specials.</p>
            </article>

            <article className="jetski-card">
              <h2>Before You Ride</h2>
              <p>Life jackets are provided. Safety instructions are given before launch. Bring a valid photo ID.</p>
            </article>

            <article className="jetski-card">
              <h2>Easy Location</h2>
              <p>Located at {ADDRESS}. Use the walkthrough below so you know exactly where to go.</p>
            </article>
          </div>
        </section>

        <WalkthroughSection
          videoUrl="/jetski/walkthrough.mp4"
          videoPoster="/jetski/walkthrough-poster.jpg"
          photos={walkthroughPhotos}
          steps={walkthroughSteps}
        />

        <section id="location" className="jetski-map">
          <div className="jetski-map-inner">
            <div className="jetski-card">
              <iframe
                title="Laughlin Jet Ski Rentals location map"
                src="https://www.google.com/maps?q=1950%20S%20Casino%20Dr%20Laughlin%20NV%2089029&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="jetski-card">
              <div className="jetski-kicker">Dock location</div>
              <h2>Find Us</h2>
              <p><strong>Laughlin Jet Ski Rentals</strong></p>
              <p>{ADDRESS}</p>
              <p>Open Daily: 9:00 AM – 5:00 PM</p>
              <p><a href={PHONE_LINK}>{PHONE}</a></p>
              <div className="jetski-actions">
                <a className="jetski-button jetski-button-primary" href={BOOKING_URL}>
                  Book Now
                </a>
                <a className="jetski-button jetski-button-secondary" href={MAP_URL}>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}