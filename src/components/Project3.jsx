import {
  apple,
  bill,
  google,
  project1,
  github,
  website,
  project2,
  discos,
} from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div
      className={`flex-1 flex justify-items-start md:mr-10 mr-0 md:mt-0 mt-10 relative`}
    >
      <img src={discos} className="w-[80%]  relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading1}>
        Discos
        <br className="sm:block hidden" />
      </h2>
      <p
        className={`font-poppins font-normal text-right text-[18px] leading-[30.8px] max-w-[470px] mt-3`}
      >
        Ofrecemos discos de pesas de gimnasio con diferentes diámetros y
        espesores para que puedas personalizar tu entrenamiento. Explora nuestra
        selección de discos de pesas de gimnasio y comienza a transformar tu
        entrenamiento físico hoy mismo. Haz tu pedido ahora y disfruta de envío
        rápido y seguro a cualquier parte del país!
      </p>
    </div>
  </section>
);

export default Billing;
