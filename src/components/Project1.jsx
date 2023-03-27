import {
  apple,
  bill,
  google,
  project0,
  github,
  website,
  pesas_rusas,
} from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <>
    <hr className="mb-6"></hr>
    <h1 id="nuestros_productos" className={styles.heading2}>
      Nuestros Productos
    </h1>
    <section className={layout.sectionReverse}>
      <div
        className={`flex-1 flex justify-items-start md:mr-10 mr-0 md:mt-0 mt-10 relative`}
      >
        <img src={pesas_rusas} className="w-[70%] h-[auto] relative z-[5]" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading1}>
          Pesas Rusas <br className="sm:block hidden" />
        </h2>
        <p
          className={`font-poppins font-normal text-right text-[18px] leading-[30.8px] max-w-[470px] mt-3`}
        >
          Aquí encontrarás una gran variedad de pesas rusas de alta calidad,
          disponibles en diferentes tamaños y pesos para adaptarse a tus
          necesidades y objetivos de entrenamiento.
        </p>
        <p
          className={`font-poppins font-normal text-right text-[18px] leading-[30.8px] max-w-[470px] mt-3`}
        >
          Tenemos de diferentes tamaños y pesos, desde los 4kg hasta los 50kg.
          Nuestro equipo de expertos en fitness ha seleccionado cuidadosamente
          cada una de las pesas rusas que ofrecemos, asegurándonos de que
          cumplan con los más altos estándares de calidad y durabilidad.
        </p>
      </div>
    </section>
  </>
);

export default Billing;
