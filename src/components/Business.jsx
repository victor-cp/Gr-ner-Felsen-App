import { footerLinks } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, links, index }) => (
  <div
    className={`w-[50%] flex flex-row p-5 rounded-[20px]  feature-card`}
    // className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
  >
    <div
      className={`w-[56px] h-[56px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <div className="mt-3">
        <h4 className="font-poppins font-semibold text-white text-[24px] leading-[23.4px] mb-2">
          {title}
        </h4>
      </div>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[24px]">
        {content}
      </p>
      <ul className="list-none mt-4">
        {links.map((link, index) => (
          <li
            key={link.name}
            className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-2`}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Business = () => (
  <>
    <hr className="mb-6"></hr>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Grüner Felsen Centre (GFC) <br className="sm:block hidden" />
      </h2>

      {/* <Button styles={`mt-10`} /> */}
    </div>
    <section id="nosotros" className={layout.section}>
      <div
        // className={`${layout.sectionImg} flex-col`}
        className={`flex-[2.5] w-full pb-5 justify-start flex-wrap `}
      >
        <p className={`${styles.paragraph2} `}>
          En GFC nos encotramos enfocados a la elaboración de resportes con
          contenido de análisis químico y metalográfico de piezas ferrosas y no
          ferrosas de aceros especiales, piezas de productos de soldaduras y/o
          investigaciones científicas para mejoras del material con el fin de
          ser aplicados a piezas de acuerdo a su uso y mayor tiempo de
          funcionamiento a nivel industrial. Estamos aliados con la fundidora
          con el propósito de constatar las calidades y asegurar que se da un
          buen material.
        </p>
        <p className={`${styles.paragraph2} pt-2`}>Nuestro objetivo:</p>

        <p className={`${styles.paragraph2} pt-2`}>
          <ul class="list-disc pl-8">
            <li>
              Venta y asesoría directa de productos fundidos para la industria.
            </li>
            <li>Realización de reportes químicos y metalográficos.</li>
          </ul>
        </p>
        {/* {footerLinks.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))} */}
      </div>
    </section>
  </>
);

export default Business;
