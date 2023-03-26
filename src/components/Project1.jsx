import { apple, bill, google, project0, github, website } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <>
    <hr className="mb-6"></hr>
    <h1 id="nuestros_productos" className={styles.heading2}>
      Nuestros Productos
    </h1>
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={project0} className="w-[100%] h-[auto] relative z-[5]" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Pesas Rusas <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          Aquí encontrarás una gran variedad de pesas rusas de alta calidad,
          disponibles en diferentes tamaños y pesos para adaptarse a tus
          necesidades y objetivos de entrenamiento.
        </p>

        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
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
