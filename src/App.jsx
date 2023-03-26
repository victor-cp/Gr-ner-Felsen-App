import styles from "./style";
import {
  Project0,
  Project1,
  Project2,
  Project3,
  Business,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div> */}

    {/* 
<div className=" h-screen bg-no-repeat bg-center bg-cover  bg-landingBackground">
        <div className="sticky top-0 z-50 bg-white ">
          <NavBarPortada />
        </div>
        <div className=" h-screen flex flex-col justify-center ">
          <h1 className="text-white mx-auto p-5 text-center z-20 text-3xl md:text-4xl lg:text-5xl">
            Trabajadores con experiencia y referencia
          </h1>
          <h2 className="text-white mx-auto p-7 text-center z-20 text-xl md:text-3xl lg:text-4xl">
            Desarrolla tu oficio cerca de ti
          </h2>
          <FormHomePage />
        </div>
      </div>
*/}

    <div className="inset-0 bg-gray-900 absolute bg-opacity-40 z-10"></div>
    <div className=" h-screen bg-no-repeat bg-center bg-cover  bg-landingBackground">
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`sticky top-0 z-50 bg-white ${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className=" h-screen flex flex-col justify-center ">
        {/* <h1 className="text-white mx-auto p-5 text-center z-20 text-3xl md:text-4xl lg:text-5xl">
          Trabajadores con experiencia y referencia
        </h1>
        <h2 className="text-white mx-auto p-7 text-center z-20 text-xl md:text-3xl lg:text-4xl">
          Desarrolla tu oficio cerca de ti
        </h2> */}
        <Hero />
      </div>
    </div>
    {/* <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div> */}

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        {/* <Business /> */}
        <Project1 />
        <Project0 />
        <Project3 />
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        {/* <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
