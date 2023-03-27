import { project1, github, website, mancuernas } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Project0 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Mancuernas</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Aquí encontrarás una amplia variedad de mancuernas de hierro fundido
        nodular de alta calidad, disponibles en diferentes pesos y diseños para
        adaptarse a tus necesidades y objetivos de entrenamiento.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ya seas un atleta experimentado o un principiante en el mundo del
        fitness, las mancuernas son una excelente herramienta para mejorar tu
        fuerza, resistencia y flexibilidad. Con nuestra amplia variedad de
        opciones, estamos seguros de que encontrarás la mancuerna perfecta para
        tu programa de entrenamiento.
      </p>
    </div>
    <div
      className={`flex-1 grid justify-items-end md:mr-10 mr-0 md:mt-0 mt-10 relative`}
    >
      <img
        src={mancuernas}
        alt="billing"
        className="w-[80%] h-[auto] relative z-[5]"
      />
    </div>
  </section>
);

export default Project0;
