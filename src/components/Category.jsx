import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top center+=50",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      cardRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.5 }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] group border bg-[#7f7f7f70] hover:bg-[#cccccc8c]  hover:scale-110 duration-150 ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } hover:bg-[#94949452]`}
      ref={cardRef}
      style={{ opacity: 0 }}
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold  text-white text-[18px] leading-[23.4px] mb-1 group-hover:text-[#95ff89]">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () =>  (
  <section id="training" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
      Learn with us, <br className="sm:block hidden" /> at with lowest cost
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Join us to learn affordably. Access high-quality courses and features at the lowest cost. Invest in your education without financial strain. Start your learning journey now!
      </p>
      <br></br>
      <Button styles={`mt-10, ${styles}`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
