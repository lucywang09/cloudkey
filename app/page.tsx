import Image from "next/image";

const features = [
  ["01", "Cloud-ready workflow", "Designed for long terminal sessions, dashboards and infrastructure work."],
  ["02", "Hot-swappable", "Swap switches without soldering and tune your typing experience."],
  ["03", "USB-C", "A simple wired connection built for a reliable desk setup."]
];

const colours = ["Cloud White", "Midnight", "Terminal Green"];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">CLOUD<span>KEY</span></div>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#details">Details</a>
          <a href="#shop">Shop</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">MECHANICAL KEYBOARD / CK-01</p>
          <h1>Designed for Cloud Engineers</h1>
          <p className="description">
            A focused mechanical keyboard for people who spend their days in terminals,
            consoles and code.
          </p>
          <p className="launchMessage">Launching October 20</p>
          <a className="button" href="#shop">Join the Waitlist</a>
        </div>

        <div className="heroImage">
          <Image
            src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85"
            alt="Mechanical keyboard"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionHeading">
          <p className="eyebrow">BUILT FOR THE WORK</p>
          <h2>Everything you need. Nothing you don&apos;t.</h2>
        </div>

        <div className="featureGrid">
          {features.map(([number, title, copy]) => (
            <article className="feature" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="productSection">
        <div className="productImage">
          <Image
            src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=85"
            alt="Keyboard close-up"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <div id="details" className="productCopy">
          <p className="eyebrow">THE CK-01</p>
          <h2>Made for building things.</h2>
          <p>
            From writing Terraform to monitoring a production deployment, the CK-01
            keeps the desk setup simple and focused.
          </p>

          <div className="specs">
            <div><strong>75%</strong><span>Compact layout</span></div>
            <div><strong>USB-C</strong><span>Wired connection</span></div>
            <div><strong>RGB</strong><span>Adjustable lighting</span></div>
          </div>
        </div>
      </section>

      <section className="colourSection">
        <div>
          <p className="eyebrow">CHOOSE YOUR SETUP</p>
          <h2>Pick your colour.</h2>
        </div>
        <div className="colours">
          {colours.map((colour, index) => (
            <button className={`colourCard colour${index}`} key={colour}>
              <span></span>
              {colour}
            </button>
          ))}
        </div>
      </section>

      <section id="shop" className="ctaSection">
        <p className="eyebrow">CK-01 / PRODUCT DROP</p>
        <h2>Ready for your next build?</h2>
        <p>Join the waitlist and be first to know when the CK-01 launches.</p>
        <a className="button light" href="mailto:hello@example.com?subject=CK-01%20Waitlist">Join the Waitlist</a>
      </section>

      <footer>
        <div className="logo">CLOUD<span>KEY</span></div>
        <p>Built for cloud engineers.</p>
      </footer>
    </main>
  );
}