import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps) => {
  gsap.fromTo(
    target,
    {
      opacity: 0, 
      y: 50, 
    },
    {
      scrollTrigger: {
        trigger: target,
        toggleActions: "restart reverse restart reverse",
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    }
  );
};
