import Hero, { About, Resume, Portfolio, Contact } from "./components/content";
import { Footer } from "./components/footer";

import Navigation from "./components/navigation";

export default function Home() {
  return (
    <main className="bg-[#151517] ">
      <aside
        aria-label="Portfolio moved"
        className="border-b border-[#41A2EB]/40 bg-[#41A2EB]/10 px-6 py-5 text-center text-white"
      >
        <p className="font-semibold">My portfolio has moved!</p>
        <p className="mt-1 text-sm text-gray-300">
          This is an archived version. Visit my new website for the latest work
          and contact information.
        </p>
        <a
          href="https://www.erissrv.online"
          className="mt-3 inline-block rounded-md bg-[#41A2EB] px-5 py-2 text-sm font-semibold text-[#151517] transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Visit www.erissrv.online &rarr;
        </a>
      </aside>
      <div className="max-w-7xl w-full  mx-auto ">
        <Navigation />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
