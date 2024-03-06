import { useState, useEffect } from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  const [animationDirection, setAnimationDirection] = useState("up");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationDirection((prevDirection) =>
        prevDirection === "up" ? "down" : "up"
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Unlocking the Secrets of <br className="sm:block hidden" />{" "}
            <span className="text-[#0AFC22]">Cybersecurity</span>{" "}
          </h1>
        </div>

        <h3 className="font-poppins ss:text-[30px] text-[20px] text-white ss:leading-[100.8px]  w-full">
        EXPLORE THE WORLD OF HACKERS
        </h3>
        {/* 
        button for mail to be added
        */}
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} style={{ transition: 'transform 1s ease-in-out', transform: `translateY(${animationDirection === "up" ? "-10px" : "10px"})` }}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
