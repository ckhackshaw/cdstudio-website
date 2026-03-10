import ServicesCarousel from "../components/ServicesCarousel";
import AnimateOnScroll from "../components/AnimateOnScroll";
import AnimatedHero from "../components/AnimatedHero";
import AnimatedHeader from "../components/AnimatedHeader";
import AnimatedFooter from "../components/AnimatedFooter";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <header>
        <AnimatedHeader />
      </header>

      {/* MAIN CONTENT */}
      <main>
        <div className="">
          {/* HERO */}
          <AnimatedHero
            heading={
              <h1 className="mb-10 text-xl md:text-4xl font-inter">
                We are branding & digital design agency that
                <br className="hidden md:inline" /> helps build brands that
                people feel & connect to
              </h1>
            }
            video={
              <iframe
                className="max-w-215 max-h-115 aspect-video"
                src="https://www.youtube.com/embed/8B-JvfzU7ug?si=vF1vxoUFXpOtcbbn&amp;controls=1&amp;autoplay=1&amp;mute=1"
                title="CDStudio Promo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            }
            tagline={
              <h1 className="my-10 text-xl md:text-7xl font-adieu">
                New website coming soon
              </h1>
            }
          />

          {/* CAROUSEL */}
          <AnimateOnScroll direction="left" duration={0.6}>
            <ServicesCarousel />
          </AnimateOnScroll>
        </div>
      </main>

      {/* FOOTER */}
      <footer id="contact">
        <AnimatedFooter />
      </footer>
    </div>
  );
}
