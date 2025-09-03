import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const About = () => {
  // Gsap Animation...
  const about = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const t1 = gsap.timeline();
  useGSAP(
    () => {
      t1.from(".paragraph", {
        y: 100,
        duration: 4,
        opacity: 0,
        ease:Power4.easeIn,
        stagger: 3,
        scrollTrigger: {
          trigger: "#para",
          start: "top 120%",
          end: "bottom 90%",
          scrub: 3,
        },
      });
    },
    { scope: about }
  );
  return (
    <div
      ref={about}
      id="about"
      className="lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 mb-10 lg:mb-0 px-4 md:min-h-[60vh] font-Gugi, sans-serif relative z-10 flex justify-center items-center"
    >
      <div className="flex flex-col justify-center" id="para">
        <h1 className="paragraph text-3xl self-center lg:text-4xl font-bold leading-9 text-[#f6921e] pb-4" 
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} >
          About SIH Pre-Qualifiers
        </h1>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg">
        The Smart India Hackathon (SIH) Pre-Qualifiers kicks off an exhilarating journey for our university's brightest minds. This initial round acts as the gateway to the prestigious national SIH competition, where students from across the country tackle real-world challenges with innovative solutions. 

        </p>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg mt-5">
        Participants from our university will confront a diverse array of challenges, spanning 17 themes across multiple domains, including 90 software problems and 45 hardware problems.

        </p>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg mt-5">
        This competition not only fosters a culture of product innovation but also nurtures a mindset of problem-solving, empowering students to make a meaningful impact on society.

        </p>
        

      </div>
    </div>
  );
};
export default About;
