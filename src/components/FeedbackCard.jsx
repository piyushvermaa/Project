import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FeedbackCard = ({ id, content, name, title, img }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top center+=100',
        end: 'bottom center',
        scrub: 1
      }
    });

    tl.fromTo(
      cardRef.current,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 0.5 }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={cardRef} className="flex justify-between flex-col px-10 py-12 rounded-[20px] border bg-[#7f7f7f70] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-[#dcdbdb65] hover:scale-110 duration-150 glowing-animation">
      <h3 className="font-poppins font-semibold text-[24px] leading-[32px] text-white mb-6">{id}</h3>
      
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white opacity-50 my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
      <style>
        {`
          .glowing-animation {
            animation: glow 1s infinite alternate; /* Alternate the glowing effect */
          }

          @keyframes glow {
            from {
              box-shadow: 0 0 10px #6ab1f3; /* Initial glow color */
            }
            to {
              box-shadow: 0 0 20px #6ab1f3; /* Final glow color */
            }
          }
        `}
      </style>
    </div>
  );
};

export default FeedbackCard;
