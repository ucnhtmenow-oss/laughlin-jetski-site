import { useState } from "react";
import "./App.css";
import WalkthroughSection from "./components/WalkthroughSection";

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
        description: "Entrance location.",
        label: "Step 1",
    },
    {
        src: "/jetski/through-casino.jpg",
        alt: "Path through the casino area",
        title: "Go through the casino",
        description: "Proceed straight to the rear of the casino.",
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
        description: "River-walk EXIT door.",
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
        description: "EXIT door to dock/landing area.",
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
        description: "YOU'VE MADE IT! NOW LETS RIDE!",
        label: "Step 9",
    },
    {
        src: "/jetski/end-rental-booth.jpg",
        alt: "Final rental booth destination",
        title: "Rental booth",
        description: "THIS MAN ALWAYS HAS A SMILE ON HIS FACE!",
        label: "END",
    },
];

const walkthroughSteps = [
    {
        title: "Arrive at the property",
        text: "Start with the overview and entry photos so customers know exactly where the walkthrough begins.",
        imageSrc: "/jetski/arrive-at-property.jpg",
        imageAlt: "Arrival guidance image",
        badge: "1",
    },
    {
        title: "Follow the route step by step",
        text: "Use the building, hallway, doorway, stairs, and dock-turn photos to guide people through the route without confusion.",
        imageSrc: "/jetski/follow-route.jpg",
        imageAlt: "Route guidance image",
        badge: "2",
    },
    {
        title: "Finish at the booth",
        text: "The last photos should make it painfully obvious where customers are supposed to stop and check in.",
        imageSrc: "/jetski/booth-ending.jpg",
        imageAlt: "Booth ending guidance image",
        badge: "3",
    },
];

function App() {
    const [likes, setLikes] = useState(128);
    const [shares, setShares] = useState(37);

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

                .gallery-composite {
                    display: flex;
                    flex-direction: column;
                    min-height: 520px;
                    height: 520px;
                    border-radius: 28px;
                    background: linear-gradient(180deg, rgba(18, 10, 43, 0.95), rgba(8, 5, 23, 0.98));
                    border: 1px solid rgba(108, 77, 183, 0.24);
                    box-shadow:
                        0 18px 44px rgba(0, 0, 0, 0.28),
                        inset 0 1px 0 rgba(255, 255, 255, 0.04);
                }

                .gallery-main-photo {
                    width: 100%;
                    height: 240px;
                    object-fit: cover;
                    flex-shrink: 0;
                }

                .gallery-customer-fill {
                    display: grid;
                    grid-template-columns: 150px 1fr;
                    gap: 14px;
                    align-items: stretch;
                    padding: 16px;
                    min-height: 0;
                    flex: 1;
                    background: linear-gradient(180deg, rgba(12, 7, 30, 0.85), rgba(7, 5, 18, 0.98));
                }

                .gallery-customer-fill img {
                    width: 100%;
                    height: 100%;
                    min-height: 170px;
                    object-fit: cover;
                    border-radius: 16px;
                }

                .gallery-customer-copy {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 10px;
                }

                .gallery-customer-tag {
                    display: inline-flex;
                    width: fit-content;
                    align-items: center;
                    justify-content: center;
                    padding: 7px 10px;
                    border-radius: 999px;
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: #efe5ff;
                    background: rgba(72, 45, 143, 0.44);
                    border: 1px solid rgba(137, 108, 212, 0.24);
                }

                .gallery-customer-copy h3 {
                    margin: 0;
                    color: #ffffff;
                    font-size: 1rem;
                    line-height: 1.2;
                }

                .gallery-customer-copy p {
                    margin: 0;
                    color: rgba(230, 223, 251, 0.8);
                    font-size: 0.94rem;
                    line-height: 1.7;
                }

                .page-social-grid {
                    display: grid;
                    grid-template-columns: 0.92fr 1.08fr;
                    gap: 22px;
                    align-items: stretch;
                }

                .page-counter-card,
                .page-ad-card {
                    overflow: hidden;
                    border-radius: 28px;
                    border: 1px solid rgba(108, 77, 183, 0.24);
                    background: linear-gradient(180deg, rgba(18, 10, 43, 0.95), rgba(8, 5, 23, 0.98));
                    box-shadow:
                        0 22px 60px rgba(0, 0, 0, 0.24),
                        inset 0 1px 0 rgba(255, 255, 255, 0.04);
                }

                .page-counter-inner,
                .page-ad-inner {
                    padding: 24px;
                }

                .page-bottom-tag {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 7px 10px;
                    margin-bottom: 14px;
                    border-radius: 999px;
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #efe5ff;
                    background: rgba(72, 45, 143, 0.44);
                    border: 1px solid rgba(137, 108, 212, 0.24);
                }

                .page-counter-inner h3,
                .page-ad-inner h3 {
                    margin: 0 0 10px;
                    color: #ffffff;
                    font-size: 1.2rem;
                }

                .page-counter-inner p,
                .page-ad-inner p {
                    margin: 0 0 18px;
                    color: rgba(230, 223, 251, 0.8);
                    font-size: 0.96rem;
                    line-height: 1.75;
                }

                .page-counter-stats {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 12px;
                    margin-bottom: 18px;
                }

                .page-counter-stat {
                    padding: 16px;
                    border-radius: 18px;
                    border: 1px solid rgba(108, 77, 183, 0.2);
                    background: rgba(255, 255, 255, 0.03);
                    text-align: center;
                }

                .page-counter-stat strong {
                    display: block;
                    color: #ffffff;
                    font-size: 1.2rem;
                    margin-bottom: 6px;
                }

                .page-counter-stat span {
                    color: rgba(230, 223, 251, 0.74);
                    font-size: 0.85rem;
                }

                .page-counter-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                }

                .page-counter-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 140px;
                    padding: 12px 16px;
                    border-radius: 14px;
                    border: 1px solid rgba(121, 92, 198, 0.28);
                    background: rgba(57, 32, 117, 0.3);
                    color: #ffffff;
                    font-size: 0.92rem;
                    font-weight: 800;
                    cursor: pointer;
                }

                .page-ad-visual {
                    min-height: 190px;
                    display: grid;
                    place-items: center;
                    text-align: center;
                    padding: 18px;
                    border-radius: 20px;
                    background:
                        radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 35%),
                        linear-gradient(135deg, rgba(95, 64, 173, 0.9), rgba(31, 18, 73, 1));
                    border: 1px solid rgba(167, 141, 235, 0.18);
                    color: #ffffff;
                    font-weight: 800;
                    font-size: clamp(1.35rem, 2vw, 1.95rem);
                    line-height: 1.15;
                }

                .page-ad-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-top: 16px;
                }

                .page-ad-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 150px;
                    padding: 12px 16px;
                    border-radius: 14px;
                    border: 1px solid rgba(121, 92, 198, 0.28);
                    background: rgba(57, 32, 117, 0.3);
                    color: #ffffff;
                    font-size: 0.92rem;
                    font-weight: 800;
                    text-decoration: none;
                }

                @media (max-width: 980px) {
                    .gallery-item,
                    .gallery-item.gallery-wide,
                    .gallery-item.gallery-tall {
                        height: 300px;
                        min-height: 300px;
                    }

                    .gallery-composite {
                        min-height: unset;
                        height: auto;
                    }

                    .gallery-customer-fill {
                        grid-template-columns: 1fr;
                    }

                    .page-social-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 640px) {
                    .gallery-main-photo {
                        height: 220px;
                    }

                    .gallery-customer-fill img {
                        min-height: 200px;
                    }

                    .page-counter-stats {
                        grid-template-columns: 1fr;
                    }

                    .page-counter-actions,
                    .page-ad-actions {
                        flex-direction: column;
                    }

                    .page-counter-button,
                    .page-ad-button {
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
                            Real skis, real riders, real river views. No fake stock-photo garbage.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        <div className="gallery-item gallery-tall">
                            <img src="/jetski/hero-ski-beach.jpg" alt="Jet ski by the beach" />
                        </div>

                        <div className="gallery-item gallery-composite">
                            <img
                                className="gallery-main-photo"
                                src="/jetski/jetski-lineup2.jpg"
                                alt="Jet ski lineup"
                            />
                            <div className="gallery-customer-fill">
                                <img
                                    src="/jetski/happy-customer.jpg"
                                    alt="Happy customer enjoying the rental"
                                />
                                <div className="gallery-customer-copy">
                                    <span className="gallery-customer-tag">Customer photo</span>
                                    <h3>Real riders. Real water time.</h3>
                                    <p>
                                        This fills the dead space under the ski shot with an actual
                                        customer moment instead of leaving a giant empty block.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-item gallery-composite">
                            <img
                                className="gallery-main-photo"
                                src="/jetski/jetski-lineup2.png"
                                alt="Jet ski lineup close-up"
                            />
                            <div className="gallery-customer-fill">
                                <img
                                    src="/jetski/couple-ride.jpg"
                                    alt="Couple riding a jet ski"
                                />
                                <div className="gallery-customer-copy">
                                    <span className="gallery-customer-tag">Customer photo</span>
                                    <h3>Show the fun, not just the lineup.</h3>
                                    <p>
                                        Same deal here. Now the second tall card actually sells the
                                        experience instead of looking half-finished.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-item gallery-wide">
                            <img src="/jetski/dock-view.jpg" alt="Dock and river view" />
                        </div>

                        <div className="gallery-item">
                            <img src="/jetski/dock-aquarius.jpg" alt="Aquarius dock area" />
                        </div>

                        <div className="gallery-item">
                            <img src="/jetski/arrive-at-property.jpg" alt="Arrival photo at the property" />
                        </div>

                        <div className="gallery-item">
                            <img src="/jetski/booth-ending.jpg" alt="Rental booth ending photo" />
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
                            “uhh where are you guys at?”
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

                <section className="section" id="contact">
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

                <section className="section">
                    <div className="page-social-grid">
                        <article className="page-counter-card">
                            <div className="page-counter-inner">
                                <span className="page-bottom-tag">Like + Share</span>
                                <h3>Let people boost the page</h3>
                                <p>
                                    Gives the bottom of the page something useful to do besides just
                                    stopping like it ran out of ideas.
                                </p>

                                <div className="page-counter-stats">
                                    <div className="page-counter-stat">
                                        <strong>1.9K</strong>
                                        <span>Views</span>
                                    </div>
                                    <div className="page-counter-stat">
                                        <strong>{likes}</strong>
                                        <span>Likes</span>
                                    </div>
                                    <div className="page-counter-stat">
                                        <strong>{shares}</strong>
                                        <span>Shares</span>
                                    </div>
                                </div>

                                <div className="page-counter-actions">
                                    <button
                                        type="button"
                                        className="page-counter-button"
                                        onClick={() => setLikes((value) => value + 1)}
                                    >
                                        Like this page
                                    </button>
                                    <button
                                        type="button"
                                        className="page-counter-button"
                                        onClick={() => setShares((value) => value + 1)}
                                    >
                                        Share this page
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="page-ad-card">
                            <div className="page-ad-inner">
                                <span className="page-bottom-tag">Advertisement</span>
                                <div className="page-ad-visual">
                                    Bottom Page Ad Space
                                </div>
                                <h3>Give sponsors a premium footer placement</h3>
                                <p>
                                    This is your bottom ad slot for a hotel, event, river business,
                                    promo, or whatever local sponsor wants a clean spot on the page.
                                </p>

                                <div className="page-ad-actions">
                                    <a href="#contact" className="page-ad-button">
                                        Book This Ad Slot
                                    </a>
                                    <a href="#walkthrough" className="page-ad-button">
                                        Back to Walkthrough
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                © Laughlin Jet Ski Rentals • 1950 Casino Dr, Laughlin, NV 89029
            </footer>
        </div>
    );
}

export default App;