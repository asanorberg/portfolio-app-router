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
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import TechIcon from "./TechIcon";

export default function TechStack() {
  return (
    <div className="flex items-start justify-center">
      <div className="flex flex-wrap gap-2">
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
          <TbBrandReactNative />
          <span>React Native</span>
        </TechIcon>
      </div>
    </div>
  );
}
