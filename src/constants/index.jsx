import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#skills" },
  { label: "Contact", href: "#contact" },
];



export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    link: "https://bhupeshkumar07.netlify.app",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    image: projectImage2,
    link: "https://amazon-cl12.netlify.app/",
  },
  {
    id: 3,
    name: "Task Management App",
    description:
      "A minimalist task manager built with React and Tailwind CSS, allowing users to add, update, delete, and complete tasks. Designed with a clean and responsive interface for easy daily task management.",
    image: projectImage3,
    link: "https://todo-app75.netlify.app/",
  },
  {
    id: 4,
    name: "Music Player",
    description:
     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    image: projectImage4,
    link: "https://music-pplayer7.netlify.app/",
  },
];





export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/bhupesh.thakur.9421",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/thakurbhupesh785",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/thakurbhupesh785",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/bhupeshkumar7",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
