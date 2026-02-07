import Image from "next/image";
import ServicesCarousel from "../components/ServicesCarousel";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <header>
        <div className="flex flex-col items-baseline max-w-400 justify-between mx-auto px-8 py-8 sm:flex-row">
          <div className="flex flex-col sm:flex-row items-baseline">
            <Image
              src={"/logo.svg"}
              alt="CD Studio Logo"
              width={170}
              height={50}
              className="mr-20 mb-2 sm:mb-0"
              priority
            />
            <p className="text-xl font-inter">Digital. Branding. Agency.</p>
          </div>
          <div className="">
            <a href="#" className="text-xl font-inter">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        <div className="">
          {/* HERO */}
          <section className="max-w-400 mx-auto px-8">
            <h1 className="mb-10 text-xl md:text-4xl">
              We are branding & digital design agency that
              <br className="hidden md:inline" /> helps build brands that people
              feel & connect to
            </h1>
            <div className="flex flex-col items-center">
              <Image
                src="/placeholder.svg"
                alt="CD Studio Logo"
                width={860}
                height={460}
                priority
                unoptimized
              />
              <h1 className={`my-10 text-xl md:text-7xl`}>
                New website coming soon
              </h1>
            </div>
          </section>

          {/* CAROUSEL */}
          <ServicesCarousel />
        </div>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="flex items-baseline max-w-400 mx-auto px-8 py-16 flex-col md:flex-row gap-4 md:justify-between">
          {/* LEFT COLUMN */}
          <div>
            <div className="flex items-baseline gap-6 mb-6 flex-col">
              <div className="w-30">
                <Image
                  src={"/logo.svg"}
                  alt="CD Studio Logo"
                  width={120}
                  height={36}
                  priority
                />
              </div>
              <div className="gap-8 flex">
                <a
                  href="#"
                  className={`inline-flex items-center justify-center text-sm border px-3 py-1 rounded-full`}
                >
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className={`inline-flex items-center justify-center text-sm border px-3 py-1 rounded-full`}
                >
                  <span>Instagram</span>
                </a>
              </div>
            </div>
            <div className={`flex items-baseline gap-4 text-1xl flex-col`}>
              <div className="w-30">
                <h3>Email us</h3>
              </div>
              <div>
                <a href="#">hello@cdstudio.co.uk</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="mb-4">
              <h3 className={`text-[20px]`}>Our Services</h3>
            </div>
            <div className="flex gap-4 flex-col md:flex-row md:gap-12">
              <div>
                <h5 className={`mb-2 font-semibold`}>Branding</h5>
                <ul className="[&>li]:before:content-['>'] [&>li]:before:mr-2">
                  <li className={`text-xs mb-2`}>Design</li>
                  <li className={`text-xs mb-2`}>Strategy & Direction</li>
                  <li className={`text-xs mb-2`}>Guidelines</li>
                  <li className={`text-xs mb-2`}>Packaging</li>
                </ul>
              </div>
              <div>
                <h5 className={`mb-2 font-semibold`}>Digital</h5>
                <ul className="[&>li]:before:content-['>'] [&>li]:before:mr-2">
                  <li className={`text-xs mb-2`}>Web Design & Development</li>
                  <li className={`text-xs mb-2`}>App Design & Development</li>
                  <li className={`text-xs mb-2`}>Social Media Management</li>
                  <li className={`text-xs mb-2`}>Website Management</li>
                  <li className={`text-xs mb-2`}>SEO</li>
                </ul>
              </div>
              <div>
                <h5 className={`mb-2 font-semibold`}>Consultancy</h5>
                <ul className="[&>li]:before:content-['>'] [&>li]:before:mr-2">
                  <li className={`text-xs mb-2`}>Advisory Support</li>
                  <li className={`text-xs mb-2`}>Market Strategy</li>
                  <li className={`text-xs mb-2`}>Growth Roadmapping</li>
                  <li className={`text-xs mb-2`}>Social & Cultural Impact</li>
                  <li className={`text-xs mb-2`}>Inclusive Positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
