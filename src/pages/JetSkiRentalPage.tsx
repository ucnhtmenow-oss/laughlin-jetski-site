import WalkthroughSection from "../components/WalkthroughSection";

const PHONE = "(702) 624-7149";
const PHONE_LINK = "tel:+17026247149";
const ADDRESS = "1950 S Casino Dr, Laughlin, NV 89029";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=1950+S+Casino+Dr+Laughlin+NV+89029";

const pricingOptions = [
  { title: "1 Hour Rental", price: "$129" },
  { title: "2 Hour Rental", price: "$229" },
  { title: "All Day Rental", price: "$350", note: "Monday–Thursday" },
  { title: "All Day Rental", price: "$500", note: "Saturday–Sunday" },
];

const walkthroughPhotos = [
  { src: "/jetski/walkthrough-01.jpg", alt: "Parking area near the dock", title: "Start here", description: "Park near Casino Drive and follow the walkthrough toward the dock.", label: "Parking" },
  { src: "/jetski/walkthrough-02.jpg", alt: "Path from parking to the dock", title: "Walk toward the dock", description: "Follow the route shown so you know exactly where to go.", label: "Path" },
  { src: "/jetski/walkthrough-03.jpg", alt: "Dock entrance and staging area", title: "Dock entrance", description: "This is where customers should head for check-in.", label: "Dock" },
  { src: "/jetski/walkthrough-04.jpg", alt: "Jet skis at the boarding area", title: "Boarding spot", description: "Meet at the boarding area for launch instructions.", label: "Boarding" },
];

const walkthroughSteps = [
  { title: "Park and unload", text: "Park near the location, grab your gear, and head toward the dock entrance." },
  { title: "Follow the walkthrough", text: "Use the photos and video to follow the route from parking to the water." },
  { title: "Meet at the boarding area", text: "Wait at the boarding area for check-in, safety instructions, and launch." },
];

export default function JetSkiRentalPage() {
  return (
    <>
      <style>{`
        .jetski-page { min-height:100vh; color:#f4fbff; background:linear-gradient(180deg,#0b1216,#101a20 55%,#091015); }
        .top-book { position:fixed; top:14px; right:14px; z-index:9999; background:#53dff0; color:#041218; padding:12px 18px; border-radius:999px; font-weight:900; text-decoration:none; box-shadow:0 12px 30px rgba(0,0,0,.35); }
        .floating-actions { position:fixed; right:16px; bottom:16px; z-index:9999; display:grid; gap:10px; }
        .float-btn { padding:13px 18px; border-radius:999px; font-weight:900; text-decoration:none; box-shadow:0 12px 30px rgba(0,0,0,.35); }
        .float-book { background:#53dff0; color:#041218; }
        .float-call { background:#ffffff; color:#041218; }
        .jetski-hero { position:relative; overflow:hidden; padding:110px 24px 80px; }
        .jetski-hero::before { content:""; position:absolute; inset:0; background:linear-gradient(180deg,rgba(6,12,16,.32),rgba(6,12,16,.72)),url("/jetski/hero-ski-beach.jpg") center/cover no-repeat; opacity:.34; }
        .wrap { position:relative; z-index:1; width:min(1180px,100%); margin:0 auto; }
        .hero-grid { display:grid; grid-template-columns:1.08fr .92fr; gap:30px; align-items:center; }
        .kicker { display:inline-flex; padding:10px 16px; border-radius:999px; font-size:.8rem; font-weight:800; letter-spacing:.08em; text-transform:uppercase; color:#93f3ff; border:1px solid rgba(147,243,255,.2); background:rgba(255,255,255,.06); margin-bottom:18px; }
        h1 { margin:0 0 18px; font-size:clamp(2.6rem,6vw,5.25rem); line-height:.95; letter-spacing:-.05em; font-weight:900; }
        h1 span { display:block; color:#93f3ff; }
        .subtitle { margin:0 0 28px; max-width:660px; font-size:1.06rem; line-height:1.85; color:rgba(227,241,247,.84); }
        .actions { display:flex; flex-wrap:wrap; gap:14px; margin-bottom:22px; }
        .btn { display:inline-flex; align-items:center; justify-content:center; min-width:172px; padding:14px 20px; border-radius:16px; font-size:.98rem; font-weight:800; text-decoration:none; }
        .primary { color:#041218; background:linear-gradient(180deg,#8df3ff,#53dff0); }
        .secondary { color:#effaff; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.05); }
        .info { display:grid; gap:8px; color:rgba(236,247,252,.9); line-height:1.6; }
        a { color:#93f3ff; }
        .card { overflow:hidden; border-radius:30px; border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.05); padding:22px; }
        .hero-img img { display:block; width:100%; min-height:420px; object-fit:cover; }
        .section { padding:38px 24px; }
        .grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
        .full { grid-column:1 / -1; }
        .price { font-size:2.1rem; font-weight:900; color:#93f3ff; margin:8px 0; }
        .fareharbor-frame { width:100%; min-height:760px; border:0; border-radius:22px; background:white; }
        .map-grid { display:grid; grid-template-columns:1fr .95fr; gap:22px; }
        iframe.map { width:100%; min-height:420px; border:0; }
        @media(max-width:980px){ .hero-grid,.grid,.map-grid{ grid-template-columns:1fr; } }
        @media(max-width:640px){ .jetski-hero,.section{ padding-left:16px; padding-right:16px; } .actions{ flex-direction:column; } .btn{ width:100%; } .top-book{ left:14px; text-align:center; } }
      `}</style>

      <a className="top-book" href="#book">Book Now</a>

      <div className="floating-actions">
        <a className="float-btn float-book" href="#book">Book Now</a>
        <a className="float-btn float-call" href={PHONE_LINK}>Call Now</a>
      </div>

      <main className="jetski-page">
        <section className="jetski-hero">
          <div className="wrap hero-grid">
            <div>
              <div className="kicker">Laughlin Jet Ski Rentals</div>
              <h1>Jet Ski Rentals<span>in Laughlin, NV</span></h1>
              <p className="subtitle">
                Jet ski rentals starting at $129. First tank of gas and life vest included.
                Book online or call for same-day availability.
              </p>

              <div className="actions">
                <a className="btn primary" href="#book">Book Your Ride</a>
                <a className="btn secondary" href={PHONE_LINK}>Call/Text {PHONE}</a>
                <a className="btn secondary" href={MAP_URL}>Get Directions</a>
              </div>

              <div className="info">
                <div><strong>Location:</strong> {ADDRESS}</div>
                <div><strong>Hours:</strong> Open Daily 9:00 AM – 5:00 PM</div>
                <div><strong>Phone:</strong> <a href={PHONE_LINK}>{PHONE}</a></div>
              </div>
            </div>

            <div className="card hero-img">
              <img src="/jetski/hero-ski-beach.jpg" alt="Jet ski rental on the Colorado River" />
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="wrap grid">
            <article className="card full">
              <div className="kicker">Rental Pricing</div>
              <h2>Simple Jet Ski Rental Prices</h2>
              <p>First tank of gas included. Life vest included with every rental.</p>
            </article>

            {pricingOptions.map((option) => (
              <article className="card" key={`${option.title}-${option.price}`}>
                <h3>{option.title}</h3>
                {option.note && <p>{option.note}</p>}
                <div className="price">{option.price}</div>
              </article>
            ))}
          </div>
        </section>

        <WalkthroughSection
          videoUrl="/jetski/walkthrough.mp4"
          videoPoster="/jetski/walkthrough-poster.jpg"
          photos={walkthroughPhotos}
          steps={walkthroughSteps}
        />

        <section className="section" id="reviews">
          <div className="wrap">
            <article className="card">
              <div className="kicker">Customer Reviews</div>
              <h2>See What Riders Are Saying</h2>
              <p>Real customer reviews from Laughlin Jet Ski Rentals.</p>
              <div className="elfsight-app-YOUR_WIDGET_ID" data-elfsight-app-lazy></div>
            </article>
          </div>
        </section>

        <section className="section" id="book">
          <div className="wrap">
            <article className="card">
              <div className="kicker">Book Online</div>
              <h2>Book Your Ride</h2>
              <p>Reserve your jet ski online without leaving the website.</p>

              <iframe
                className="fareharbor-frame"
                title="Book Laughlin Jet Ski Rental"
                src="https://fareharbor.com/embeds/book/laughlinjetskirental/?full-items=yes&u=0fcc3287-07d5-4538-a5d9-b7be94793c9c&from-ssl=yes&g4=no&cp=no&csp=no&back=https%3A%2F%2Flaughlinjetskirentals.com%2F%23book&language=en-us"
                loading="lazy"
              />
            </article>
          </div>
        </section>

        <section className="section" id="book2">
          <div className="wrap">
            <article className="card">
              <div className="kicker">Questions?</div>
              <h2>Have Questions? Call Us Anytime.</h2>
              <p><a href={PHONE_LINK}>{PHONE}</a></p>
            </article>
          </div>
        </section>

        <section className="section" id="location">
          <div className="wrap map-grid">
            <div className="card">
              <iframe
                className="map"
                title="Laughlin Jet Ski Rentals location map"
                src="https://www.google.com/maps?q=1950%20S%20Casino%20Dr%20Laughlin%20NV%2089029&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="card">
              <div className="kicker">Dock Location</div>
              <h2>Find Us</h2>
              <p><strong>Laughlin Jet Ski Rentals</strong></p>
              <p>{ADDRESS}</p>
              <p>Open Daily: 9:00 AM – 5:00 PM</p>
              <p><a href={PHONE_LINK}>{PHONE}</a></p>

              <div className="actions">
                <a className="btn primary" href="#book">Book Now</a>
                <a className="btn secondary" href={MAP_URL}>Get Directions</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}