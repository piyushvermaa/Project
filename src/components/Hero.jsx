import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../style";
import { robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  
  // Define animation direction state
  const [animationDirection, setAnimationDirection] = useState("up");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=50",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      [titleRef.current, subtitleRef.current],
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.2 }
    ).fromTo(
      imageRef.current,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 0.5 },
      "-=0.3"
    );

    // Animation for moving the image up and down
    const interval = setInterval(() => {
      setAnimationDirection(prevDirection =>
        prevDirection === "up" ? "down" : "up"
      );
    }, 1000);
    
    // Cleanup function
    return () => {
      clearInterval(interval);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            ref={titleRef}
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[55px] opacity-0"
          >
            Unlocking the Secrets of <br className="sm:block hidden" />{" "}
            <span className="text-[#0AFC22]">Cybersecurity</span>{" "}
          </h1>
        </div>

        <h3
          ref={subtitleRef}
          className="font-poppins ss:text-[30px] text-[20px] text-white ss:leading-[100.8px]  w-full opacity-0"
        >
          EXPLORE THE WORLD OF HACKERS
        </h3>
        {/* 
        button for mail to be added
        */}
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        style={{
          transition: "transform 1s ease-in-out",
          opacity: 0,
          transform: `translateY(${animationDirection === "up" ? "-10px" : "10px"})`,
        }}
        ref={imageRef}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] scale-90"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div
          className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"
        />
        <div
          className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"
        />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
