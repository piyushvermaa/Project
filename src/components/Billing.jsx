import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => {
  const [animationDirection, setAnimationDirection] = useState("up");
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        end: "bottom center",
        scrub: 1
      }
    });

    tl.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 0.5 }
    )
    .fromTo(
      titleRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.5 },
      "+=0.5" // Delay the animation by 0.5 seconds
    )
    .fromTo(
      paragraphRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.5 },
      "+=0.5" // Delay the animation by 0.5 seconds after the title animation
    )
    .fromTo(
      buttonRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.5 },
      "+=0.5" // Delay the animation by 0.5 seconds after the paragraph animation
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationDirection(prevDirection =>
        prevDirection === "up" ? "down" : "up"
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className={layout.sectionReverse}
      ref={sectionRef}
      style={{
        transition: 'transform 1s ease-in-out',
        transform: `translateY(${animationDirection === "up" ? "-10px" : "10px"})`
      }}
    >
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="inset-3 scale-75 w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 ref={titleRef} className={styles.heading2}>
          Learn the basics<br className="sm:block hidden" />
        </h2>
        <p ref={paragraphRef} className={`${styles.paragraph} max-w-[470px] mt-5`}>
          It’s essential to have a solid understanding of computer networks and operating systems. Learn about TCP/IP, DNS, HTTP and other fundamental protocols.
        </p>

        <div ref={buttonRef} className="flex flex-row flex-wrap sm:mt-10 mt-6">
          {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
        </div>
      </div>
    </section>
  );
};

export default Billing;
