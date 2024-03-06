import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1 // Adjust scrub value for smoother animation
      }
    });

    tl.fromTo(
      cardRef.current,
      { autoAlpha: 0 }, // Start with opacity 0
      { autoAlpha: 1 } // Fade in as the trigger element enters the viewport
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className={`${layout.section} `}>
      <div className={`${layout.sectionInfo} `}>
        <h1 className={`${styles.heading2} text-2xl`}>
          Cybersecurity <br className="sm:block hidden" /> Concepts
        </h1>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          To become a proficient hacker, you need to understand cybersecurity concepts and the tools used for both offensive and defensive purposes.
        </p>

        <Button styles={`mt-10 `} />
      </div>

      <div
        className={`${layout.sectionImg}`}
        ref={cardRef}
        style={{ opacity: 0 }} // Start with opacity 0
      >
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
