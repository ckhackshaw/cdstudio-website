import Image from "next/image";

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
            <p className="text-xl">Digital. Branding. Agency.</p>
          </div>
          <div className="">
            <a href="#" className="text-xl">
              Contact
            </a>
          </div>
        </div>
      </header>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
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
