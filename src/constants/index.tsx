import { Github, Linkedin } from "lucide-react";
import { CSS3, HTML5, JS, NextJs, Reactjs, Redux, TS, TailwindCSS } from "../assets";

export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const techs = [
  {
    path: HTML5,
    color: "bg-orange-500 rounded-lg",
  },
  {
    path: CSS3,
    color: "bg-blue-500 rounded-lg",
  },
  {
    path: JS,
    color: "bg-yellow-500 rounded-lg",
  },
  {
    path: TS,
    color: "bg-sky-500 rounded-lg",
  },
  {
    path: Reactjs,
    color: "bg-zinc-700 rounded-lg",
  },
  {
    path: NextJs,
    color: "bg-white rounded-lg",
  },
  {
    path: TailwindCSS,
    color: "bg-white rounded-lg",
  },
  {
    path: Redux,
    color: "bg-white rounded-lg",
  },
];

export const socialMedia = [
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/felipe-enzou/",
    icon: <Linkedin color="#FFF" />,
  },
  {
    title: "github",
    link: "https://github.com/Shintakuenzou",
    icon: <Github color="#FFF" />,
  },
];
