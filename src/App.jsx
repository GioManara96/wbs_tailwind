import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        {/** hero section */}
        <div className="w-full min-h-[700px] bg-hero-pattern bg-center bg-scroll bg-no-repeat bg-cover flex justify-center items-center relative">
          {/** overlay */}
          <div className="hero-overlay"></div>
          {/** content */}
          <div className="relative">
            <a
              href="#"
              title="cta da qualche parte"
              className="bg-esa-blue text-white px-4 py-2 uppercase font-serif text-2xl border border-esa-blue rounded font-semibold hover:bg-white hover:text-esa-blue mb-5 transition ease-in-out duration-300">
              prova
            </a>
          </div>
        </div>

        {/** sezione a griglia */}
        <section className="mt-20 mb-10 w-full">
          <div className="w-fit mx-auto mb-5 text-center tracking-wide">
            <h2 className="text-4xl font-bold text-esa-blue mb-3">Collections</h2>
            <p className="text-[#8197A6] text-sm">Need space? We have everything ESA and mission-related as well as some stellar collaborations.</p>
          </div>
          <div className="mx-auto w-3/4 min-h-[600px] grid grid-cols-4 grid-rows-4 gap-5">
            {/** colonna sinistra in alto */}
            <div className="col-span-2 md:col-span-1 row-span-2 bg-gray-200 order-1">1</div>
            {/** colonna centrale */}
            <div className="col-span-4 md:col-span-2 row-span-4 bg-red-400 order-3 md:order-2">2</div>
            {/** colonna destra in alto */}
            <div className="col-span-2 md:col-span-1 row-span-2 bg-green-300 order-4 md:order-3">3</div>
            {/** colonna sinistra in basso */}
            <div className="col-span-2 md:col-span-1 row-span-2 bg-yellow-300 order-2 md:order-4">4</div>
            {/** colonna destra in basso */}
            <div className="col-span-2 md:col-span-1 row-span-2 bg-orange-300 order-5">5</div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
