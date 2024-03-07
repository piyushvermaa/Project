import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top center+=100",
        end: "bottom center",
        scrub: 1
      }
    });

    tl.fromTo(
      testimonialsRef.current,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 0.5 }
    );

    // Iterate through each FeedbackCard and create individual animations
    feedback.forEach((_, index) => {
      gsap.fromTo(
        testimonialsRef.current.children[index],
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, delay: index * 0.5 }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="clients" ref={testimonialsRef} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative bg-[#c7c6c647] p-8 rounded-xl`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Welcome to Our Blog!<br className="sm:block hidden" /> Discover insightful articles, tips, and more.
        </h2>
      </div>

      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  );
};

export default Testimonials;
