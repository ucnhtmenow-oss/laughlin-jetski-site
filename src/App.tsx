// src/App.tsx
import "./App.css";
import WalkthroughSection from "./components/WalkthroughSection";
import VisitorCount from "./components/VisitorCount";

const phoneNumber = "17026247149";
const displayPhone = "(702) 624-7149";
const address = "1950 Casino Dr, Laughlin, NV 89029";
const mapsUrl = "https://maps.google.com/?q=1950+Casino+Dr+Laughlin+NV+89029";

const walkthroughPhotos = [
    {
        src: "/jetski/walkthrough-main.jpg",
        alt: "Main walkthrough overview for Laughlin Jet Ski Rentals",
        title: "Main Entrance",
        description:
            "Entrance is just south of the Chevron gas station in the conjoining lots. Look for the Regency Casino sign.",
        label: "Entrance",
    },
    {
        src: "/jetski/walkthrough-start.jpg",
        alt: "Walkthrough starting point near the casino entrance",
        title: "Walkthrough start",
        description:
            "Regency Casino entrance. Enter here to get to the rental booth.",
        label: "Start",
    },
    {
        src: "/jetski/main-building.jpg",
        alt: "Main building entrance for Laughlin Jet Ski Rentals walkthrough",
        title: "Main building",
        description: "Entrance location.",
        label: "Step 1",
    },
    {
        src: "/jetski/through-casino.jpg",
        alt: "Path through the casino area toward the river",
        title: "Go through the casino",
        description: "Proceed straight to the rear of the casino.",
        label: "Step 2",
    },
    {
        src: "/jetski/hang-left.jpg",
        alt: "Turn left on the path toward the dock",
        title: "Hang a left",
        description: "Follow the path and hang a slight left to the EXIT door.",
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
        description: "Enjoy the artwork as you proceed down the flight of stairs.",
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
        alt: "Right turn once on the dock toward Laughlin Jet Ski Rentals",
        title: "Right once on the dock",
        description:
            "Hang a right once you exit the door at the bottom of the stairs.",
        label: "Step 7",
    },
    {
        src: "/jetski/head-towards-booth.jpg",
        alt: "Walk toward the rental booth at the dock",
        title: "Head toward the booth",
        description: "Almost there. Now head straight toward the rental booth.",
        label: "Step 8",
    },
    {
        src: "/jetski/towards-rental-booth.jpg",
        alt: "Approaching the Laughlin Jet Ski Rentals booth",
        title: "Towards the rental booth",
        description: "You've made it. Now let's ride.",
        label: "Step 9",
    },
    {
        src: "/jetski/end-rental-booth.jpg",
        alt: "Final rental booth destination for Laughlin Jet Ski Rentals",
        title: "Rental booth",
        description: "This is the final check-in spot before you ride.",
        label: "END",
    },
];

const walkthroughSteps = [
    {
        title: "Arrive at the property",
        text: "Pull in, park, and get ready for the water.",
        imageSrc: "/jetski/arrive-at-property.jpg",
        imageAlt: "Arrival area for Laughlin Jet Ski Rentals",
        badge: "1",
    },
    {
        title: "Follow the route step by step",
        text: "Use the walkthrough photos to get from the entrance to the dock without guessing.",
        imageSrc: "/jetski/follow-route.jpg",
        imageAlt: "Step by step route to the Laughlin Jet Ski Rentals dock",
        badge: "2",
    },
    {
        title: "Finish at the booth",
        text: "Check in at the rental booth and get ready to ride.",
        imageSrc: "/jetski/booth-ending.jpg",
        imageAlt: "Rental booth near the dock in Laughlin Nevada",
        badge: "3",
    },
];

function App() {
    return (
        <div className="site-shell">
            <style>{`
                .site-nav {
                    position: fixed;
                    top: 14px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1000;
                    width: min(1180px, calc(100% - 28px));
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 18px;
                    padding: 10px 12px 10px 16px;
                    border-radius: 999px;
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    background: rgba(12, 7, 25, 0.78);
                    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.26);
                    backdrop-filter: blur(16px);
                }

                .site-nav-brand {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    min-width: 0;
                    color: #ffffff;
                    font-weight: 900;
                    letter-spacing: -0.02em;
                    white-space: nowrap;
                }

                .site-nav-mark {
                    width: 30px;
                    height: 30px;
                    border-radius: 999px;
                    object-fit: cover;
                    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
                }

                .site-nav-links {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 4px;
                    min-width: 0;
                }

                .site-nav-links a {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 38px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    color: rgba(245, 236, 255, 0.82);
                    font-size: 0.82rem;
                    font-weight: 800;
                    transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease;
                }

                .site-nav-links a:hover {
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.1);
                    transform: translateY(-1px);
                }

                .site-nav-links .site-nav-cta {
                    color: #2a0f3a;
                    background: linear-gradient(135deg, #ffcc2f, #ff4ca0);
                    box-shadow: 0 10px 24px rgba(255, 92, 169, 0.2);
                }

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

                .rental-info-grid,
                .river-day-grid,
                .safety-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 18px;
                }

                .river-day-grid {
                    grid-template-columns: 1.1fr 1fr 1fr;
                }

                .safety-grid {
                    grid-template-columns: 1.2fr 0.8fr;
                }

                .info-card,
                .river-day-card,
                .safety-card {
                    background: rgba(30, 18, 50, 0.9);
                    border: 1px solid rgba(255, 126, 202, 0.16);
                    border-radius: 24px;
                    box-shadow: 0 18px 38px rgba(6, 3, 12, 0.32);
                    padding: 20px;
                }

                .info-card h3,
                .river-day-card h3,
                .safety-card h3 {
                    margin: 0 0 10px;
                    color: #ffd65b;
                    font-size: 1.16rem;
                }

                .info-card p,
                .river-day-card p,
                .safety-card p {
                    margin: 0;
                    color: rgba(240, 231, 255, 0.84);
                    line-height: 1.72;
                }

                .river-weather-pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin-bottom: 12px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    color: #2b0f40;
                    background: linear-gradient(135deg, #ffd65b, #ff5db1);
                    font-size: 0.8rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }

                .safety-card-large {
                    min-height: 240px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    background:
                        linear-gradient(135deg, rgba(255, 204, 47, 0.12), rgba(255, 76, 160, 0.1)),
                        rgba(30, 18, 50, 0.92);
                }

                .safety-video-box {
                    min-height: 240px;
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    justify-content: center;
                    gap: 14px;
                    padding: 16px;
                    background:
                        linear-gradient(135deg, rgba(13, 8, 31, 0.65), rgba(45, 22, 77, 0.88)),
                        url("/jetski/walkthrough-poster.jpg") center/cover no-repeat;
                    overflow: hidden;
                }

                .safety-video-wrap {
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    border-radius: 18px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.26);
                    background: rgba(9, 5, 24, 0.75);
                }

                .safety-video-wrap iframe {
                    width: 100%;
                    height: 100%;
                    border: 0;
                    display: block;
                }

                .safety-video-actions {
                    display: flex;
                    justify-content: center;
                }

                .safety-play {
                    width: 74px;
                    height: 74px;
                    display: grid;
                    place-items: center;
                    border-radius: 999px;
                    background: linear-gradient(135deg, #ffcc2f, #ff4ca0);
                    color: #2a0f3a;
                    font-size: 1.8rem;
                    font-weight: 900;
                    box-shadow: 0 18px 38px rgba(255, 76, 160, 0.26);
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
                    .site-nav {
                        position: sticky;
                        top: 10px;
                        transform: none;
                        left: auto;
                        width: calc(100% - 20px);
                        margin: 10px auto -4px;
                        border-radius: 22px;
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .site-nav-links {
                        width: 100%;
                        justify-content: flex-start;
                        overflow-x: auto;
                        padding-bottom: 2px;
                    }

                    .gallery-item,
                    .gallery-item.gallery-wide,
                    .gallery-item.gallery-tall {
                        height: 300px;
                        min-height: 300px;
                    }

                    .rental-info-grid,
                    .river-day-grid,
                    .safety-grid {
                        grid-template-columns: 1fr;
                    }

                    .website-maker-card {
                        grid-template-columns: 1fr;
                    }

                    .website-maker-actions {
                        justify-content: flex-start;
                    }
                }

                @media (max-width: 640px) {
                    .site-nav-brand {
                        font-size: 0.92rem;
                    }

                    .site-nav-links a {
                        min-height: 36px;
                        padding: 8px 10px;
                        font-size: 0.78rem;
                    }

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

            <nav className="site-nav" aria-label="Main navigation">
                <a href="#home" className="site-nav-brand">
                    <img
                        src="/laughlin-logo.png"
                        alt="Laughlin Jet Ski Rentals logo"
                        className="site-nav-mark"
                    />
                    <span>Laughlin Jet Ski Rentals</span>
                </a>

                <div className="site-nav-links">
                    <a href="#home">Home</a>
                    <a href="#rentals">Rentals</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#location">Directions</a>
                    <a href="#safety">Safety</a>
                    <a href="#book" className="site-nav-cta">
                        Book Now
                    </a>
                </div>
            </nav>

            <a href={`tel:${phoneNumber}`} className="floating-call-btn">
                Call Now
            </a>

            <section className="hero" id="home">
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
                            <span className="eyebrow">
                                Laughlin River • Open Daily • 9AM–5PM
                            </span>

                            <h1>Laughlin Jet Ski Rentals</h1>

                            <p className="hero-copy">
                                Looking for jet ski rentals in Laughlin NV on the Colorado River?
                                Laughlin Jet Ski Rentals keeps it simple with real skis, easy
                                directions, and a direct booking line so you can get on the water
                                without the usual confusion.
                            </p>

                            <div className="hero-actions">
                                <a href={`tel:${phoneNumber}`} className="primary-btn">
                                    Book Now
                                </a>

                                <a href={`tel:${phoneNumber}`} className="secondary-btn">
                                    Call {displayPhone}
                                </a>

                                <a
                                    href={mapsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="secondary-btn"
                                >
                                    Get Directions
                                </a>
                            </div>

                            <div className="hero-stats">
                                <div className="stat-card">
                                    <span className="stat-number">{displayPhone}</span>
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
                <section className="section" id="rentals">
                    <div className="section-heading">
                        <span className="section-kicker">Why people ride with us</span>
                        <h2>Fast booking. Real location. Straight to the water.</h2>
                        <p>
                            Laughlin Jet Ski Rentals gives riders a simple way to call, get
                            directions, find the dock, and start their Colorado River day without
                            chasing confusing instructions.
                        </p>
                    </div>

                    <div className="feature-grid">
                        <div className="feature-card">
                            <h3>Easy to find</h3>
                            <p>
                                Located at {address} with direct river access and a photo walkthrough
                                that shows you where to go.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Open daily</h3>
                            <p>
                                Monday through Sunday from 9AM to 5PM, because a river day should
                                not start with guessing if anyone is open.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Call and ride</h3>
                            <p>
                                Tap the direct booking line, ask your questions, and reserve your
                                jet ski rental fast.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section" id="pricing">
                    <div className="section-heading">
                        <span className="section-kicker">Pricing</span>
                        <h2>Rentals priced for river time (gas included).</h2>
                        <p>
                            Call to book your rental. Walk-ins welcome when availability allows, but
                            calling ahead is the fastest way to lock in jet ski rentals in Laughlin NV.
                        </p>
                    </div>

                    <div className="pricing-grid">
                        <article className="pricing-card">
                            <span className="pricing-badge">1 Hour</span>
                            <h3>1 Hour Rental</h3>
                            <div className="price">$129</div>
                            <p>Gas included. Perfect for a quick Colorado River ride.</p>
                            <a href={`tel:${phoneNumber}`} className="card-btn">
                                Call to Book
                            </a>
                        </article>

                        <article className="pricing-card">
                            <span className="pricing-badge">2 Hours</span>
                            <h3>2 Hour Rental</h3>
                            <div className="price">$229</div>
                            <p>Gas included. Best value for more river time.</p>
                            <a href={`tel:${phoneNumber}`} className="card-btn">
                                Call to Book
                            </a>
                        </article>
                    </div>
                </section>

                <section className="section">
                    <div className="section-heading">
                        <span className="section-kicker">Rental info</span>
                        <h2>Everything riders look for first.</h2>
                        <p>
                            Clear hours, direct contact, and location info up front. No treasure map,
                            no mystery marina quest.
                        </p>
                    </div>

                    <div className="rental-info-grid">
                        <article className="info-card">
                            <h3>Call to book</h3>
                            <p>
                                Call {displayPhone} to check availability, ask about current rental
                                options, and plan your ride.
                            </p>
                        </article>

                        <article className="info-card">
                            <h3>Walk-ins welcome</h3>
                            <p>
                                Visiting Laughlin for the day? Call or stop by during open hours and
                                we will help you get pointed toward the water.
                            </p>
                        </article>

                        <article className="info-card">
                            <h3>Colorado River riding</h3>
                            <p>
                                Ride near Laughlin, Nevada with river views, easy access, and a rental
                                location built around getting you moving quickly.
                            </p>
                        </article>
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

                <section className="section" id="gallery">
                    <div className="section-heading">
                        <span className="section-kicker">Gallery</span>
                        <h2>Customer Photos</h2>
                        <p>
                            Real skis, real riders, real river views from Laughlin Jet Ski Rentals.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        <div className="gallery-item gallery-tall">
                            <img
                                src="/jetski/river-view.jpg"
                                alt="Colorado River view near Laughlin Jet Ski Rentals"
                            />
                        </div>

                        <div className="gallery-item">
                            <img
                                src="/jetski/river-view1.jpg"
                                alt="Jet ski lineup at Laughlin Jet Ski Rentals"
                            />
                        </div>

                        <div className="gallery-item">
                            <img
                                src="/jetski/jetski-lineup2.png"
                                alt="Close-up of jet skis ready to rent in Laughlin Nevada"
                            />
                        </div>

                        <div className="gallery-item gallery-wide">
                            <img
                                src="/jetski/landing-area1.jpg"
                                alt="Dock and river view near Laughlin Jet Ski Rentals"
                            />
                        </div>

                        <div className="gallery-item">
                            <img
                                src="/jetski/happy-customer.jpg"
                                alt="Aquarius dock area near Laughlin jet ski rentals"
                            />
                        </div>

                        <div className="gallery-item">
                            <img
                                src="/jetski/customers.jpg"
                                alt="Happy customer on a jet ski in Laughlin NV"
                            />
                        </div>

                        <div className="gallery-item">
                            <img
                                src="/jetski/couple-ride.jpg"
                                alt="Couple riding a jet ski on the Colorado River"
                            />
                        </div>

                        <div className="gallery-item gallery-wide">
                            <img
                                src="/jetski/laughlinjetski2.png"
                                alt="Laughlin Jet Ski Rentals river image"
                            />
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="section-heading">
                        <span className="section-kicker">River day info</span>
                        <h2>Check your ride day before you pull up.</h2>
                        <p>
                            Laughlin is built for sun, water, and fast plans. Before you head out,
                            check the day, bring what you need, and call ahead if you want the smoothest
                            launch.
                        </p>
                    </div>

                    <div className="river-day-grid">
                        <article className="river-day-card">
                            <span className="river-weather-pill">Laughlin weather</span>
                            <h3>Sunny days move fast</h3>
                            <p>
                                Weather can change the feel of a river day, so check current Laughlin
                                conditions before arriving and plan for sun, water, and wind.
                            </p>
                        </article>

                        <article className="river-day-card">
                            <h3>What to bring</h3>
                            <p>
                                Bring sunscreen, towels, ID, water-friendly clothing, and anything
                                you need for a hot day near the Colorado River.
                            </p>
                        </article>

                        <article className="river-day-card">
                            <h3>Best first move</h3>
                            <p>
                                Call {displayPhone} before heading over so you can confirm details and
                                avoid guessing when you arrive.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="section" id="safety">
                    <div className="section-heading">
                        <span className="section-kicker">Safety</span>
                        <h2>Watch the Safety Video Before You Ride</h2>
                        <p>
                            Review the basic rules before getting on the Colorado River. Watch the
                            safety video, follow the instructions, and ask questions before your rental.
                        </p>
                    </div>

                    <div className="safety-grid">
                        <article className="safety-card safety-card-large">
                            <div>
                                <h3>Know before you go</h3>
                                <p>
                                    Before getting on the water, review the safety basics, follow rental
                                    instructions, and ask questions if anything is unclear.
                                </p>
                            </div>

                            <div className="hero-actions">
                                <a href={`tel:${phoneNumber}`} className="secondary-btn">
                                    Ask a Question
                                </a>
                            </div>
                        </article>

                        <article className="safety-card safety-video-box">
                            <div className="safety-video-wrap">
                                <iframe
                                    src="https://www.youtube.com/embed/P8P-LZKPIVM?start=1"
                                    title="Laughlin Jet Ski Rentals safety video"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>

                            <div className="safety-video-actions">
                                <a href={`tel:${phoneNumber}`} className="primary-btn">
                                    Call Now
                                </a>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="section" id="book">
                    <div className="section-heading">
                        <span className="section-kicker">Book</span>
                        <h2>Request a date and time, then call to confirm.</h2>
                        <p>
                            Choose your preferred date and time, then call to confirm availability.
                            Online checkout is coming soon.
                        </p>
                    </div>

                    <div className="booking-grid">
                        <article className="booking-card">
                            <h3>Booking request</h3>
                            <p>
                                This request form helps you pick a target time. To confirm and reserve
                                your spot on the Colorado River, call {displayPhone}.
                            </p>
                        </article>

                        <article className="booking-card">
                            <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
                                <div className="booking-field">
                                    <label htmlFor="booking-date">Date</label>
                                    <input id="booking-date" name="date" type="date" />
                                </div>

                                <div className="booking-field">
                                    <label htmlFor="booking-time">Time</label>
                                    <input id="booking-time" name="time" type="time" />
                                </div>

                                <div className="booking-field booking-span-2">
                                    <label htmlFor="booking-length">Rental length</label>
                                    <select id="booking-length" name="length" defaultValue="1-hour">
                                        <option value="1-hour">1 Hour - $129</option>
                                        <option value="2-hour">2 Hours - $229</option>
                                    </select>
                                </div>

                                <div className="booking-field">
                                    <label htmlFor="booking-name">Name</label>
                                    <input
                                        id="booking-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="booking-field">
                                    <label htmlFor="booking-phone">Phone</label>
                                    <input
                                        id="booking-phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        placeholder="(702) 000-0000"
                                    />
                                </div>

                                <div className="booking-actions booking-span-2">
                                    <a href={`tel:${phoneNumber}`} className="primary-btn booking-call-btn">
                                        Call to Confirm Booking
                                    </a>
                                </div>
                            </form>
                        </article>
                    </div>
                </section>

                <section className="section" id="location">
                    <div className="section-heading">
                        <span className="section-kicker">Location</span>
                        <h2>Find us fast</h2>
                        <p>
                            Get to the river without the usual phone call that starts with,
                            “umm, where are you guys at?”
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
                                    href={mapsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="primary-btn"
                                >
                                    Open in Maps
                                </a>

                                <a href={`tel:${phoneNumber}`} className="secondary-btn">
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
                                <strong>{displayPhone}</strong>
                                <br />
                                {address}
                            </p>
                        </div>

                        <div className="contact-actions">
                            <a href={`tel:${phoneNumber}`} className="primary-btn">
                                Call {displayPhone}
                            </a>

                            <a
                                href={mapsUrl}
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
                            <h3 className="website-maker-title">
                                Need a clean site for your own business?
                            </h3>
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
                    © Laughlin Jet Ski Rentals • {address}
                </div>
                <div className="site-footer-line">
                    <VisitorCount />
                </div>
            </footer>
        </div>
    );
}

export default App;
