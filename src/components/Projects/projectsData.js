import bitsOfCode from "../../Assets/Projects/blog.png";
import my from "../../Assets/Projects/my.png";

export const projects = [
  {
    imgPath: my,
    isBlog: false,
    title: "ReadOft: Where Readers, Writers & Ideas Connect",
    description:
      "A modern, community-driven reading and blogging platform designed to bring readers and writers together in a clean, focused environment. Features include article discovery, author following, topic exploration, and personalized reading dashboards. Built with a strong emphasis on usability, performance, and thoughtful UI/UX.",
    ghLink: "https://github.com/abushaidislam/readoft_9800.git",
    demoLink: "https://readoft-9800.vercel.app/",
    demoLabel: "Live Site",
    category: "Web App",
  },
  {
    imgPath: bitsOfCode,
    isBlog: false,
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website built with Next.js 14, React, and TailwindCSS. Features include animated hero section, blog with MDX support, project showcase, and professional resume page. Optimized for performance and SEO.",
    ghLink: "https://github.com/abushaidislam",
    demoLink: "#",
    demoLabel: "You're Here!",
    category: "Portfolio",
  },
];
