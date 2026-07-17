const phoneNumber = "17026247149";
const displayPhone = "(702) 624-7149";
const address = "1950 Casino Dr, Laughlin, NV 89029";

function MaintenancePage() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-glow maintenance-glow-left" aria-hidden="true" />
      <div className="maintenance-glow maintenance-glow-right" aria-hidden="true" />

      <section className="maintenance-card" aria-labelledby="maintenance-title">
        <img
          className="maintenance-logo"
          src="/jetski/laughlin-logo.png"
          alt="Laughlin Jet Ski Rentals"
        />

        <span className="maintenance-kicker">Temporary Site Maintenance</span>

        <h1 id="maintenance-title">
          We’ll be back on the river soon.
        </h1>

        <p className="maintenance-copy">
          Our online site is temporarily unavailable while we finish an update.
          Laughlin Jet Ski Rentals is still open daily from 9AM to 5PM.
        </p>

        <div className="maintenance-actions">
          <a className="maintenance-primary" href={`tel:${phoneNumber}`}>
            Call {displayPhone}
          </a>

          <a
            className="maintenance-secondary"
            href="https://maps.google.com/?q=1950+Casino+Dr+Laughlin+NV+89029"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>

        <div className="maintenance-details">
          <div>
            <span>Hours</span>
            <strong>Open daily • 9AM–5PM</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{address}</strong>
          </div>
        </div>

        <p className="maintenance-note">
          For reservations or questions, please call us directly.
        </p>
      </section>
    </main>
  );
}

export default MaintenancePage;
