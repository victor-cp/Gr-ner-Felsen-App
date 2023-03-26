import styles from "../style";
import { discount, profile } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[50px] text-black ss:leading-[70.8px] leading-[75px]">
            Somos
            {/* <br className="sm:block hidden" />{" "} */}
            <span className="text-gradient"> Grüner Felsen Centre</span>
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1> */}
        <p
          className={`${styles.paragraph} ss:text-[25px] max-w-[500px] mt-10 leading-[36px] `}
        >
          Una empresa de fundición que aplica la{" "}
          <span className="text-gradient">ingeniería metalúrgica</span> para
          fabricar productis de acero nodular el cual es mayormente utilizado en
          piezas de equipos industriales que están expuestos al desgaste por
          impacto.
        </p>
      </div>

      {/* <div className={` flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={profile} alt="billing" className="w-[90%] h-[100%]" />
      </div> */}

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
