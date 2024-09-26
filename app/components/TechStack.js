import {
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiVite,
  SiNextdotjs,
  SiFigma,
  SiReact,
  SiMagento,
  SiStoryblok,
  SiDynamics365,
  SiTrello,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import TechIcon from "./TechIcon";

export default function TechStack() {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      <div className="grid md:grid-cols-4 grid-cols-3 gap-4 ">
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiJavascript />
          <span>Javascript</span>
        </TechIcon>

        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiHtml5 />
          <span>HTML5</span>
        </TechIcon>

        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiCss3 />
          <span>CSS</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiTailwindcss />
          <span>Tailwind</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiNextdotjs />
          <span>Next.js</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiVite />
          <span>Vite</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiExpress />
          <span>Express</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiReact />
          <span>React</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiRedux />
          <span>Redux</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <TbBrandReactNative />
          <span>React Native</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiFigma />
          <span>Figma</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiMagento />
          <span>Magento</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiStoryblok />
          <span>Storyblok</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiDynamics365 />
          <span>Navision</span>
        </TechIcon>
        <TechIcon iconSize="text-lg" textSize="text-sm">
          <SiTrello />
          <span>Trello</span>
        </TechIcon>
      </div>
    </div>
  );
}
