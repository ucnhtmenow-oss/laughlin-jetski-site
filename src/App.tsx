import "./App.css";
import WalkthroughSection from "./components/WalkthroughSection";
import VisitorCount from "./components/VisitorCount";

const walkthroughPhotos = [
    {
        src: "/jetski/walkthrough-main.jpg",
        alt: "Main walkthrough overview",
        title: "Main Entrance",
        description:
            "Entrance is just South of the chevron gas station in conjoining lots. Look for the Regency Casino sign.",
        label: "Entrance",
    },
    {
        src: "/jetski/walkthrough-start.jpg",
        alt: "Walkthrough starting point",
        title: "Walkthrough start",
        description:
            "Regency Casino entrance. Enter here to get to the rental booth.",
        label: "Start",
    },
    {
        src: "/jetski/main-building.jpg",
        alt: "Main rental building",
        title: "Main building",
        description:
            "Entrance location.",
        label: "Step 1",
    },
    {
        src: "/jetski/through-casino.jpg",
        alt: "Path through the casino area",
        title: "Go through the casino",
        description:
            "Proceed straight to the rear of the casino.",
        label: "Step 2",
    },
    {
        src: "/jetski/hang-left.jpg",
        alt: "Turn left on the path",
        title: "Hang a left",
        description:
            "Follow the path and hang a slight left to the EXIT door.",
        label: "Step 3",
    },
    {
        src: "/jetski/through-door.jpg",
        alt: "Doorway leading toward the dock path",
        title: "Door leading to stairway",
        description:
            "River-walk EXIT door.",
        label: "Step 4",
    },
    {
        src: "/jetski/down-stairs.jpg",
        alt: "Stairs leading down toward the dock",
        title: "Head down the stairs",
        description:
            "Enjoy the art work as you proceed down the flight of stairs.",
        label: "Step 5",
    },
    {
        src: "/jetski/door-after-stairs.jpg",
        alt: "Door after the stairs on the way to the dock",
        title: "Door at stair landing",
        description:
            "EXIT door to dock/landing area.",
        label: "Step 6",
    },
    {
        src: "/jetski/right-once-on-dock.jpg",
        alt: "Right turn once on the dock",
        title: "Right once on the dock",
        description:
            "Hang a right once you exit the door at the bottom of the stairs.",
        label: "Step 7",
    },
    {
        src: "/jetski/head-towards-booth.jpg",
        alt: "Walk toward the rental booth",
        title: "Head toward the booth",
        description:
            "ALMOST THERE! Now head straight towards the rental booth.",
        label: "Step 8",
    },
    {
        src: "/jetski/towards-rental-booth.jpg",
        alt: "Approaching the rental booth",
        title: "Towards the rental booth",
        description:
            "YOU'VE MADE IT! NOW LETS RIDE!",
        label: "Step 9",
    },
    {
        src: "/jetski/end-rental-booth.jpg",
        alt: "Final rental booth destination",
        title: "Rental booth",
        description:
            "THIS MAN ALWAYS HAS A SMILE ON HIS FACE!",
        label: "END",
    },
];

const walkthroughSteps = [
    {
        title: "Arrive at the property",
        text: "Can't you feel the excitement?",
        imageSrc: "/jetski/arrive-at-property.jpg",
        imageAlt: "Dock view guidance image 1",
        badge: "1",
    },
    {
        title: "Follow the route step by step",
        text: "Step by step instructions to guide you to your destination.",
        imageSrc: "/jetski/follow-route.jpg",
        imageAlt: "Dock view guidance image 2",
        badge: "2",
    },
    {
        title: "Finish at the booth",
        text: "The fun begins!",
        imageSrc: "/jetski/booth-ending.jpg",
        imageAlt: "Landing area near the booth",
        badge: "3",
    },
];

function App() {
    return (
        <div className="site-shell">
            <style>{`
                .gallery-grid {
                    align-items: stretch;
                }

                .gallery-item {
                    position: relative;
                    overflow: hidden;
                    min-height: 280px;
                    height: 280px;
                    border-radius: 28px;
                    background: linear-gradient(180deg, rgba(19, 9, 42, 0.94), rgba(10, 5, 24, 0.98));
                    border: 1px solid rgba(108, 77, 183, 0.26);
                    box-shadow:
                        0 18px 44px rgba(0, 0, 0, 0.28),
                        inset 0 1px 0 rgba(255, 255, 255, 0.04);
                }

                .gallery-item.gallery-tall {
                    min-height: 520px;
                    height: 520px;
                }

                .gallery-item.gallery-wide {
                    min-height: 280px;
                    height: 280px;
                }

                .gallery-item img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .website-maker-section {
                    padding-top: 0;
                }

                .website-maker-card {
                    width: min(1180px, 100%);
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1.15fr auto;
                    gap: 18px;
                    align-items: center;
                    padding: 18px 22px;
                    border-radius: 22px;
                    border: 1px solid rgba(108, 77, 183, 0.18);
                    background: linear-gradient(180deg, rgba(16, 9, 36, 0.88), rgba(10, 5, 24, 0.96));
                    box-shadow:
                        0 14px 34px rgba(0, 0, 0, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.03);
                }

                .website-maker-copy {
                    min-width: 0;
                }

                .website-maker-tag {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 6px 10px;
                    margin-bottom: 10px;
                    border-radius: 999px;
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: rgba(231, 222, 255, 0.9);
                    background: rgba(72, 45, 143, 0.34);
                    border: 1px solid rgba(137, 108, 212, 0.18);
                }

                .website-maker-title {
                    margin: 0 0 6px;
                    color: #ffffff;
                    font-size: 1rem;
                    font-weight: 800;
                    line-height: 1.2;
                }

                .website-maker-text {
                    margin: 0;
                    color: rgba(227, 220, 250, 0.72);
                    font-size: 0.92rem;
                    line-height: 1.7;
                    max-width: 780px;
                }

                .website-maker-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: flex-end;
                }

                .website-maker-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 148px;
                    padding: 11px 14px;
                    border-radius: 14px;
                    border: 1px solid rgba(121, 92, 198, 0.22);
                    background: rgba(57, 32, 117, 0.26);
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 0.88rem;
                    font-weight: 800;
                    transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
                }

                .website-maker-button:hover {
                    transform: translateY(-1px);
                    background: rgba(75, 45, 148, 0.34);
                    border-color: rgba(149, 120, 226, 0.3);
                }

                @media (max-width: 980px) {
                    .gallery-item,
                    .gallery-item.gallery-wide,
                    .gallery-item.gallery-tall {
                        height: 300px;
                        min-height: 300px;
                    }

                    .website-maker-card {
                        grid-template-columns: 1fr;
                    }

                    .website-maker-actions {
                        justify-content: flex-start;
                    }
                }

                @media (max-width: 640px) {
                    .website-maker-card {
                        padding: 16px;
                    }

                    .website-maker-actions {
                        flex-direction: column;
                    }

                    .website-maker-button {
                        width: 100%;
                    }
                }
            `}</style>

            <a href="tel:17026247149" className="floating-call-btn">
                Call Now
            </a>

            <section className="hero">
                <div className="hero-overlay" />
                <div className="hero-content">
                    <div className="hero-brand">
                        <div className="hero-logo-wrap">
                            <img
                                src="/laughlin-logo.png"
                                alt="Laughlin Jet Ski Rentals"
                                className="hero-logo"
                            />
                        </div>

                        <div className="hero-text">
                            <span className="eyebrow">Laughlin River • Open Daily • 9AM–5PM</span>

                            <h1>Laughlin Jet Ski Rentals</h1>

                            <p className="hero-copy">
                                Real jet skis. Real river fun. Pull up, check in, and get on the
                                water without the usual confusion.
                            </p>

                            <div className="hero-actions">
                                <a href="tel:17026247149" className="primary-btn">
                                    Call to Book
                                </a>

                                <a
                                    href="https://maps.google.com/?q=1950+Casino+Dr+Laughlin+NV+89029"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="secondary-btn"
                                >
                                    Get Directions
                                </a>
                            </div>

                            <div className="hero-stats">
                                <div className="stat-card">
                                    <span className="stat-number">(702) 624-7149</span>
                                    <span className="stat-label">Direct booking line</span>
                                </div>

                                <div className="stat-card">
                                    <span className="stat-number">9AM–5PM</span>
                                    <span className="stat-label">Monday through Sunday</span>
                                </div>

                                <div className="stat-card">
                                    <span className="stat-number">1950 Casino Dr</span>
                                    <span className="stat-label">Laughlin, NV 89029</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="main-content">
                <section className="section">
                    <div className="section-heading">
                        <span className="section-kicker">Why people ride with us</span>
                        <h2>Fast booking. Real location. Straight to the water.</h2>
                        <p>
                            Real rental, real photos, and real directions that actually help
                            you get here.
                        </p>
                    </div>

                    <div className="feature-grid">
                        <div className="feature-card">
                            <h3>Easy to find</h3>
                            <p>
                                Located at 1950 Casino Dr in Laughlin with direct river access and
                                a simple arrival path.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Open daily</h3>
                            <p>
                                Monday through Sunday from 9AM to 5PM, because people like fun
                                businesses to actually be open.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Call and ride</h3>
                            <p>
                                Skip the confusion. Call direct, ask questions, and reserve your
                                ride fast.
                            </p>
                        </div>
                    </div>
                </section>

                <WalkthroughSection
                    title="Walk to the dock without getting lost"
                    subtitle="Watch the route, then tap through the full photo path from the main entrance all the way to the rental booth."
                    videoUrl="/jetski/walkthrough-video.mp4"
                    videoPoster="/jetski/walkthrough-poster.jpg"
                    photos={walkthroughPhotos}
                    steps={walkthroughSteps}
                />

                <section className="section">
                    <div className="section-heading">
                        <span className="section-kicker">Gallery</span>
                        <h2>Customer Photos</h2>
                        <p>
                            Real skis, real riders, real river views.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        <div className="gallery-item gallery-tall">
                            <img src="/jetski/river-view.jpg" alt="Jet ski by the beach" />
                        </div>

                        <div className="gallery-item">
                            <img src="/jetski/river-view1.jpg" alt="Jet ski lineup" />
                        </div>

                        <div className="gallery-item">
                            <img src="/jetski/jetski-lineup2.png" alt="Jet ski lineup close-up" />
                        </div>

                        <div className="gallery-item gallery-wide">
                            <img src="/jetski/landing-area1.jpg" alt="Dock and river view" />
                        </div>

                        <div className="gallery-item">
                            <img src="/jetski/happy-customer.jpg" alt="Aquarius dock area" />
                        </div>

                        <div className="gallery-item">
                            <img src="/jetski/customers.jpg" alt="Happy customer on jet ski" />
                        </div>

                        <div className="gallery-item">
                            <img src="/jetski/couple-ride.jpg" alt="Couple riding jet ski" />
                        </div>

                        <div className="gallery-item gallery-wide">
                            <img src="/jetski/laughlinjetski2.png" alt="Laughlin Jet Ski image" />
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="section-heading">
                        <span className="section-kicker">Location</span>
                        <h2>Find us fast</h2>
                        <p>
                            Get to the river without the usual phone call that starts with
                            “Umm, where are you guys at?”
                        </p>
                    </div>

                    <div className="map-grid">
                        <div className="map-embed-card">
                            <iframe
                                className="map-embed"
                                src="https://maps.google.com/maps?q=1950%20Casino%20Dr%20Laughlin%20NV%2089029&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                title="Laughlin Jet Ski Rentals Map"
                            ></iframe>
                        </div>

                        <div className="directions-card">
                            <h3>Quick directions</h3>
                            <p>
                                Pull into 1950 Casino Dr, head toward the river access side, and
                                walk down toward the dock area.
                            </p>

                            <div className="directions-actions">
                                <a
                                    href="https://maps.google.com/?q=1950+Casino+Dr+Laughlin+NV+89029"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="primary-btn"
                                >
                                    Open in Maps
                                </a>

                                <a href="tel:17026247149" className="secondary-btn">
                                    Call for Help
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="contact-card">
                        <div className="contact-copy">
                            <span className="section-kicker">Book now</span>
                            <h2>Ready to ride?</h2>
                            <p>
                                Call now, lock in your ride, and get on the water.
                            </p>
                            <p>
                                <strong>(702) 624-7149</strong>
                                <br />
                                1950 Casino Dr, Laughlin, NV 89029
                            </p>
                        </div>

                        <div className="contact-actions">
                            <a href="tel:17026247149" className="primary-btn">
                                Call (702) 624-7149
                            </a>

                            <a
                                href="https://maps.google.com/?q=1950+Casino+Dr+Laughlin+NV+89029"
                                target="_blank"
                                rel="noreferrer"
                                className="secondary-btn"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </section>

                <section className="section website-maker-section">
                    <div className="website-maker-card">
                        <div className="website-maker-copy">
                            <span className="website-maker-tag">Built by Gearhead 3D Fab</span>
                            <h3 className="website-maker-title">Need a clean site for your own business?</h3>
                            <p className="website-maker-text">
                                We also build low-drama business sites, landing pages, photo galleries,
                                walkthrough pages, and simple promo layouts like this one.
                            </p>
                        </div>

                        <div className="website-maker-actions">
                            <a
                                href="mailto:support@gearhead3dfab.com?subject=Website%20Build%20Inquiry"
                                className="website-maker-button"
                            >
                                Ask About a Site
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="site-footer-line">
                    © Laughlin Jet Ski Rentals • 1950 Casino Dr, Laughlin, NV 89029
                </div>
                <div className="site-footer-line">
                    <VisitorCount />
                </div>
            </footer>
        </div>
    );
}

export default App;
