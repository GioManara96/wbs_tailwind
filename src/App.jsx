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
        <section className="my-10 w-full">
          <div className="mx-auto w-1/2 min-h-[400px] grid grid-cols-4 grid-rows-4 gap-5">
            {/** colonna sinistra in alto */}
            <div className="col-span-2 md:col-span-1 row-span-2 bg-gray-200 order-1">1</div>
            {/** colonna centrale */}
            <div className="col-span-4 md:col-span-2 row-span-4 bg-red-400 order-3 md:order-2">2</div>
            {/** colonna destra in alto */}
            <div className="col-span-2 md:col-span-1 row-span-2 bg-green-300 order-2 md:order-3">3</div>
            {/** colonna sinistra in basso */}
            <div className="col-span-2 md:col-span-1 row-span-2 bg-yellow-300 order-4">4</div>
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
