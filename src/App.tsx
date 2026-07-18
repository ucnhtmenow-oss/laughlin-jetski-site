import { useEffect, useState } from "react";
import "./App.css";
import WalkthroughSection from "./components/WalkthroughSection";
import VisitorCount from "./components/VisitorCount";

const phoneNumber = "17026247149";
const displayPhone = "(702) 624-7149";
const address = "1950 Casino Dr, Laughlin, NV 89029";
const mapsUrl = "https://maps.google.com/?q=1950+Casino+Dr+Laughlin+NV+89029";
const fareHarborShortname = "laughlinjetskirental";
const fareHarborBookingUrl = `https://fareharbor.com/embeds/book/${fareHarborShortname}/?full-items=yes`;
const waterPlaybackRate = 0.35;

const pageNavItems = [
    { id: "home", label: "Home" },
    { id: "safety", label: "Safety" },
    { id: "rentals", label: "Rentals" },
    { id: "pricing", label: "Pricing" },
    { id: "reviews", label: "Reviews" },
    { id: "location", label: "Directions" },
] as const;

const gh3dInquiryEmail = "support@gearhead3dfab.com";
const gh3dInquirySubject = encodeURIComponent("GH3D Project Inquiry - Website or Prototype");
const gh3dInquiryBody = encodeURIComponent(`Hi Gearhead 3D Fab,

I am interested in help with a project.

Name:
Business / Project Name:
Phone:
Email:

What do you need?
[ ] Website / landing page
[ ] Online booking or service site
[ ] Product / prototype design
[ ] 3D printable part
[ ] CAD cleanup / file repair
[ ] Other:

Briefly describe what you want built:


Do you already have photos, logos, sketches, CAD files, STL files, or examples?
[ ] Yes
[ ] No

What is the main goal?
[ ] Get more customers
[ ] Take bookings / payments
[ ] Show services or products
[ ] Build a prototype
[ ] Make a part printable
[ ] Fix or improve an existing design
[ ] Not sure yet

Timeline:
[ ] ASAP
[ ] This week
[ ] This month
[ ] Just getting prices

Budget range:
[ ] Under $250
[ ] $250-$500
[ ] $500-$1,000
[ ] $1,000+
[ ] Not sure yet

Best way to contact me:
[ ] Call
[ ] Text
[ ] Email

Anything else I should know?
`);

const gh3dInquiryMailto = `mailto:${gh3dInquiryEmail}?subject=${gh3dInquirySubject}&body=${gh3dInquiryBody}`;

const walkthroughPhotos = [
    { src: "/jetski/walkthrough-main.jpg", alt: "Main walkthrough overview for Laughlin Jet Ski Rentals", title: "Main Entrance", description: "Entrance is just south of the Chevron gas station in the conjoining lots. Look for the Regency Casino sign.", label: "Entrance" },
    { src: "/jetski/walkthrough-start.jpg", alt: "Walkthrough starting point near the casino entrance", title: "Walkthrough start", description: "Regency Casino entrance. Enter here to get to the rental booth.", label: "Start" },
    { src: "/jetski/main-building.jpg", alt: "Main building entrance for Laughlin Jet Ski Rentals walkthrough", title: "Main building", description: "Entrance location.", label: "Step 1" },
    { src: "/jetski/through-casino.jpg", alt: "Path through the casino area toward the river", title: "Go through the casino", description: "Proceed straight to the rear of the casino.", label: "Step 2" },
    { src: "/jetski/hang-left.jpg", alt: "Turn left on the path toward the dock", title: "Hang a left", description: "Follow the path and hang a slight left to the EXIT door.", label: "Step 3" },
    { src: "/jetski/through-door.jpg", alt: "Doorway leading toward the dock path", title: "Door leading to stairway", description: "River-walk EXIT door.", label: "Step 4" },
    { src: "/jetski/down-stairs.jpg", alt: "Stairs leading down toward the dock", title: "Head down the stairs", description: "Enjoy the artwork as you proceed down the flight of stairs.", label: "Step 5" },
    { src: "/jetski/door-after-stairs.jpg", alt: "Door after the stairs on the way to the dock", title: "Door at stair landing", description: "EXIT door to dock/landing area.", label: "Step 6" },
    { src: "/jetski/right-once-on-dock.jpg", alt: "Right turn once on the dock toward Laughlin Jet Ski Rentals", title: "Right once on the dock", description: "Hang a right once you exit the door at the bottom of the stairs.", label: "Step 7" },
    { src: "/jetski/head-towards-booth.jpg", alt: "Walk toward the rental booth at the dock", title: "Head toward the booth", description: "Almost there. Now head straight toward the rental booth.", label: "Step 8" },
    { src: "/jetski/towards-rental-booth.jpg", alt: "Approaching the Laughlin Jet Ski Rentals booth", title: "Towards the rental booth", description: "You've made it. Now let's ride.", label: "Step 9" },
    { src: "/jetski/end-rental-booth.jpg", alt: "Final rental booth destination for Laughlin Jet Ski Rentals", title: "Rental booth", description: "This is the final check-in spot before you ride.", label: "END" },
];

const walkthroughSteps = [
    { title: "Arrive at the property", text: "Pull in, park, and get ready for the water.", imageSrc: "/jetski/arrive-at-property.jpg", imageAlt: "Arrival area for Laughlin Jet Ski Rentals", badge: "1" },
    { title: "Follow the route step by step", text: "Use the walkthrough photos to get from the entrance to the dock without guessing.", imageSrc: "/jetski/follow-route.jpg", imageAlt: "Step by step route to the Laughlin Jet Ski Rentals dock", badge: "2" },
    { title: "Finish at the booth", text: "Check in at the rental booth and get ready to ride.", imageSrc: "/jetski/booth-ending.jpg", imageAlt: "Rental booth near the dock in Laughlin Nevada", badge: "3" },
];

function App() {
    const [logoFailed, setLogoFailed] = useState(false);
    const [jetSkiFailed, setJetSkiFailed] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        if (!document.getElementById("fareharbor-lightframe-script")) {
            const fareharborScript = document.createElement("script");
            fareharborScript.id = "fareharbor-lightframe-script";
            fareharborScript.src = "https://fareharbor.com/embeds/api/v1/?autolightframe=yes";
            fareharborScript.async = true;
            document.body.appendChild(fareharborScript);
        }

        if (!document.getElementById("elfsight-platform-script")) {
            const elfsightScript = document.createElement("script");
            elfsightScript.id = "elfsight-platform-script";
            elfsightScript.src = "https://elfsightcdn.com/platform.js";
            elfsightScript.async = true;
            document.body.appendChild(elfsightScript);
        }
    }, []);

    useEffect(() => {
        const updateActiveSection = () => {
            const activationLine = 150;
            let currentSection = "home";

            for (const item of pageNavItems) {
                const section = document.getElementById(item.id);

                if (section && section.getBoundingClientRect().top <= activationLine) {
                    currentSection = item.id;
                }
            }

            setActiveSection(currentSection);
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    return (
        <div className="site-shell">
            <video
                className="site-water-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                onLoadedMetadata={(event) => {
                    event.currentTarget.defaultPlaybackRate = waterPlaybackRate;
                    event.currentTarget.playbackRate = waterPlaybackRate;
                }}
            >
                <source src="/jetski/water-loop.mp4" type="video/mp4" />
            </video>
            <div className="site-water-shade" aria-hidden="true" />

            <nav className="site-nav" aria-label="Main navigation">
                <a href="#home" className="site-nav-brand">
                    {!logoFailed && (
                        <img
                            src="/jetski/laughlin-logo.png"
                            alt=""
                            className="site-nav-mark"
                            onError={() => setLogoFailed(true)}
                        />
                    )}
                    <span>Laughlin Jet Ski Rentals</span>
                </a>

                <div className="site-nav-links">
                    {pageNavItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={activeSection === item.id ? "is-active" : undefined}
                            aria-current={activeSection === item.id ? "page" : undefined}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a href="#gh3d-inquiry" className="site-nav-need">Need A Site?</a>
                    <a href="#book" className="site-nav-cta">Book Now</a>
                </div>
            </nav>

            <a href="#book" className="floating-book-btn">Book Now</a>

            <section className="hero" id="home">
                <div className="hero-media-stage">
                    <img
                        className="hero-scene-base"
                        src="/jetski/laughlin-landing-photo.png"
                        alt="Laughlin riverfront at sunset"
                    />

                    <video
                        className="hero-water-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                        onLoadedMetadata={(event) => {
                            event.currentTarget.defaultPlaybackRate = waterPlaybackRate;
                            event.currentTarget.playbackRate = waterPlaybackRate;
                        }}
                    >
                        <source src="/jetski/water-loop.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="hero-content">
                    <div className="hero-layout">
                        <div className="hero-text">
                            <span className="eyebrow">River Hours • Open Daily • 9AM–5PM</span>

                            <h1>
                                <span className="hero-title-main">Laughlin Jet Ski</span>
                                <span className="hero-title-accent">Rentals</span>
                            </h1>

                            <div className="hero-accent-line" />

                            <p className="hero-copy">
                                Looking for jet ski rentals in Laughlin NV on the Colorado River?
                                Laughlin Jet Ski Rentals keeps it simple with real skis, easy
                                directions, and online booking.
                            </p>

                            <div className="hero-actions">
                                <a href="#book" className="primary-btn">Book Online</a>
                                <a href={`tel:${phoneNumber}`} className="secondary-btn">Call {displayPhone}</a>
                                <a href={mapsUrl} target="_blank" rel="noreferrer" className="secondary-btn">Get Directions</a>
                            </div>
                        </div>

                        <div className="hero-art">
                            {!logoFailed ? (
                                <img
                                    src="/jetski/laughlin-logo.png"
                                    alt="Laughlin Jet Ski Rentals"
                                    className="hero-main-logo"
                                    onError={() => setLogoFailed(true)}
                                />
                            ) : (
                                <div className="hero-logo-fallback">
                                    <strong>Laughlin</strong>
                                    <span>Jet Ski Rentals</span>
                                </div>
                            )}

                            {!jetSkiFailed && (
                                <img
                                    src="/jetski/laughlin-hero-jetski.png"
                                    alt="Jet ski"
                                    className="hero-jetski"
                                    onError={() => setJetSkiFailed(true)}
                                />
                            )}
                        </div>
                    </div>

                    <div className="hero-stats">
                        <a href={`tel:${phoneNumber}`} className="stat-card">
                            <span className="stat-icon">☎</span>
                            <span className="stat-number">{displayPhone}</span>
                            <span className="stat-label">Direct booking line</span>
                        </a>

                        <div className="stat-card">
                            <span className="stat-icon">◷</span>
                            <span className="stat-number">9AM–5PM</span>
                            <span className="stat-label">Monday through Sunday</span>
                        </div>

                        <a href={mapsUrl} target="_blank" rel="noreferrer" className="stat-card">
                            <span className="stat-icon">⌖</span>
                            <span className="stat-number">1950 Casino Dr</span>
                            <span className="stat-label">Laughlin, NV 89029</span>
                        </a>
                    </div>
                </div>

            </section>

            <main className="main-content">
                <div className="main-content-inner">
                    <section className="section safety-section" id="safety">
                        <div className="safety-card">
                            <div className="safety-copy">
                                <span className="section-kicker">Safety Video</span>
                                <h2>Watch before you ride</h2>
                                <p>
                                    Please watch the safety video before your rental so check-in is smoother,
                                    faster, and nobody has to learn river safety the hard way like humanity
                                    keeps trying to do.
                                </p>

                                <div className="safety-actions">
                                    <a href="#book" className="primary-btn">Book Your Ride</a>
                                    <a href={`tel:${phoneNumber}`} className="secondary-btn">Call {displayPhone}</a>
                                </div>
                            </div>

                            <div className="safety-video-wrap">
                                <iframe
                                    src="https://www.youtube.com/embed/Y3d0KVs3i_U?si=q4MWxCU7FT781Dpv"
                                    title="Laughlin Jet Ski Rentals Safety Video"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </section>

                    <section className="section" id="rentals">
                        <div className="section-heading">
                            <span className="section-kicker">Why people ride with us</span>
                            <h2>Fast booking. Real location. Straight to the water.</h2>
                            <p>
                                Laughlin Jet Ski Rentals gives riders a simple way to book, call,
                                get directions, find the dock, and start their Colorado River day.
                            </p>
                        </div>

                        <div className="feature-grid">
                            <div className="feature-card">
                                <h3>Easy to find</h3>
                                <p>Located at {address} with direct river access and a photo walkthrough.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Open daily</h3>
                                <p>Monday through Sunday from 9AM to 5PM.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Book online</h3>
                                <p>Reserve your jet ski rental online or call with questions.</p>
                            </div>
                        </div>
                    </section>

                    <section className="section" id="pricing">
                        <div className="section-heading">
                            <span className="section-kicker">Pricing</span>
                            <h2>Rentals priced for river time.</h2>
                            <p>First tank of gas included. Life vest included.</p>
                        </div>

                        <div className="pricing-grid">
                            <article className="pricing-card">
                                <span className="pricing-badge">1 Hour</span>
                                <h3>1 Hour Rental</h3>
                                <div className="price">$129</div>
                                <p>Gas included. Perfect for a quick Colorado River ride.</p>
                                <a href="#book" className="card-btn">Reserve This Rental</a>
                            </article>

                            <article className="pricing-card">
                                <span className="pricing-badge">2 Hours</span>
                                <h3>2 Hour Rental</h3>
                                <div className="price">$229</div>
                                <p>Gas included. Best value for more river time.</p>
                                <a href="#book" className="card-btn">Reserve This Rental</a>
                            </article>

                            <article className="pricing-card">
                                <span className="pricing-badge">Mon–Thu</span>
                                <h3>All Day Rental</h3>
                                <div className="price">$350</div>
                                <p>First tank of gas and life vest included.</p>
                                <a href="#book" className="card-btn">Reserve This Rental</a>
                            </article>

                            <article className="pricing-card">
                                <span className="pricing-badge">Sat–Sun</span>
                                <h3>All Day Rental</h3>
                                <div className="price">$500</div>
                                <p>First tank of gas and life vest included.</p>
                                <a href="#book" className="card-btn">Reserve This Rental</a>
                            </article>
                        </div>
                    </section>

                    <section className="section reviews-section-wrap" id="reviews">
                        <div className="reviews-card">
                            <span className="section-kicker">Customer Reviews</span>
                            <h2>See What Riders Are Saying</h2>
                            <p>Real reviews from Google, Yelp, and other review platforms.</p>

                            <div className="reviews-widget-wrap">
                                <div
                                    className="elfsight-app-61dbbd95-df4c-4212-8c9b-4e709f75a45d"
                                    data-elfsight-app-lazy
                                ></div>
                            </div>
                        </div>
                    </section>

                    <section className="section fareharbor-section-wrap" id="book">
                        <div className="fareharbor-ready-card">
                            <div className="fareharbor-book-copy">
                                <img src="/jetski/jetski-harbor.jpg" alt="Jet skis lined up at the water" className="fareharbor-jetski-image" />

                                <span className="section-kicker">Powered by FareHarbor</span>
                                <h3>Book Your Ride</h3>
                                <div className="fareharbor-accent-line" />

                                <p>
                                    Reserve your jet ski online through our secure booking system.
                                    Select your date, choose your ride, and we’ll see you on the river.
                                </p>

                                <div className="fareharbor-actions">
                                    <a href="#book" className="primary-btn">Book Now</a>
                                    <a href={`tel:${phoneNumber}`} className="secondary-btn">Call {displayPhone}</a>
                                </div>

                                <div className="fareharbor-call-note">
                                    Have questions? Call us anytime.
                                    <strong>{displayPhone}</strong>
                                </div>
                            </div>

                            <div className="fareharbor-frame-wrap">
                                <iframe
                                    title="Laughlin Jet Ski Rentals FareHarbor Booking"
                                    src={fareHarborBookingUrl}
                                    loading="lazy"
                                    className="fareharbor-frame"
                                />
                            </div>
                        </div>
                    </section>

                    <WalkthroughSection
                        title="Walk to the dock without getting lost"
                        subtitle="Watch the route, then tap through the full photo path from the main entrance all the way to the rental booth."
                        videoUrl="/jetski/walkthrough.mp4"
                        videoPoster="/jetski/walkthrough-poster.jpg"
                        photos={walkthroughPhotos}
                        steps={walkthroughSteps}
                    />

                    <section className="section gh3d-inquiry-section" id="gh3d-inquiry">
                        <div className="gh3d-inquiry-card">
                            <div>
                                <span className="section-kicker">Built by Gearhead 3D Fab</span>
                                <h2>Need a website, prototype, or printable part?</h2>
                                <p>
                                    This site was built by GH3D Site Maker. If you need a clean business site,
                                    booking page, prototype, CAD cleanup, or a 3D printable part, send the
                                    quick project questionnaire and I’ll know what you’re trying to build
                                    before we start playing twenty questions like it’s a government form.
                                </p>
                            </div>

                            <div className="gh3d-inquiry-actions">
                                <a href={gh3dInquiryMailto} className="primary-btn">Start A Project</a>
                                <a href="https://gearhead3dfab.com" target="_blank" rel="noreferrer" className="secondary-btn">Visit GH3D</a>
                            </div>
                        </div>
                    </section>

                    <section className="section" id="location">
                        <div className="section-heading">
                            <span className="section-kicker">Location</span>
                            <h2>Find us fast</h2>
                            <p>{address}</p>
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
                                    <a href={mapsUrl} target="_blank" rel="noreferrer" className="primary-btn">Open in Maps</a>
                                    <a href={`tel:${phoneNumber}`} className="secondary-btn">Call for Help</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="site-footer">
                <div className="site-footer-line">
                    © 2026 Laughlin Jet Ski Rentals. All rights reserved.
                </div>

                <details className="site-legal">
                    <summary>Copyright &amp; Image Use</summary>
                    <p>
                        Except where otherwise stated, Laughlin Jet Ski Rentals claims rights in the
                        human-authored website design, written content, logo presentation, selection
                        and arrangement, composite artwork, color treatment, masking, animation, and
                        other original elements of this website.
                    </p>
                    <p>
                        Website content may not be copied, reproduced, modified, republished,
                        distributed, displayed, sold, licensed, used in advertising, or used to create
                        derivative works without prior written permission, except where permitted by law.
                    </p>
                    <p>
                        The Laughlin Jet Ski Rentals name and logo may not be used in a way that suggests
                        sponsorship, endorsement, affiliation, or source without written authorization.
                    </p>
                </details>

                <div className="site-footer-line"><VisitorCount /></div>

                <div className="site-footer-line">
                    <a href={gh3dInquiryMailto} className="gh3d-maker-btn">Built with GH3D Site Maker</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
