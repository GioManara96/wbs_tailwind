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
      </main>
      <Footer />
    </>
  );
}

export default App;
