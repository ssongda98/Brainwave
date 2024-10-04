import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { companyLogos } from "../constants";
import { animateWithGsap } from '../constants/animation';

const CompanyLogos = ({ className }) => {
  useGSAP(() => {
    animateWithGsap(".logo");
  }, []);

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="logo flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
