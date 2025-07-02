import { FaGithub, FaLinkedinIn, FaInstagram, FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact } from "react-icons/fa";
import { SiGmail, SiCplusplus, SiPython } from "react-icons/si";
import { TbBrandCSharp, TbSql, TbBrandReactNative } from "react-icons/tb";

export const languages = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JAVASCRIPT", icon: FaJs },
    { name: "JAVA", icon: FaJava },
    { name: "MS SQL", icon: TbSql },
    { name: "C#", icon: TbBrandCSharp },
    { name: "REACT", icon: FaReact },
    { name: "PYTHON", icon: SiPython },

    { name: "C++", icon: SiCplusplus },
    { name: "REACT NATIVE", icon: TbBrandReactNative },
];

export const contacts = [
    { name: "Gmail", icon: SiGmail, value: "farhanzafarr.9@gmail.com", link: "mailto:farhanzafarr.9@gmail.com" },
    { name: "Github", icon: FaGithub, value: "FarhanZafarr-9", link: "https://github.com/FarhanZafarr-9" },
    { name: "Instagram", icon: FaInstagram, value: "percival.404", link: "https://instagram.com/percival.404" },
    { name: "LinkedIn", icon: FaLinkedinIn, value: "Farhan Zafar", link: "https://www.linkedin.com/in/farhan-zafar-8b3282348" }
];

export const info = [
    { name: "Name", value: "Farhan Zafar" },
    { name: "Age", value: "20" },
    { name: "Profession", value: "Student" },
    { name: "Education", value: "Intermediate (Completed)" },
    { name: "Current Study", value: "BS Data Science (2023-2027)" },
    { name: "University", value: "FAST NUCES, Lahore" },
    { name: "Passion", value: "Programming" },
    { name: "Date of Birth", value: "August 21, 2004" },
];

export const projects = [
    {
        name: "Smart University Hub (Web)",
        stack: ["React", "Node.js", "Express", "MSSQL"],
        desc: "A comprehensive web platform designed for university students to manage academics, events, and resources. Built to streamline campus life and enhance student engagement."
    },
    {
        name: "Smart University Hub (Desktop)",
        stack: ["C#", "WinUI"],
        desc: "A desktop application version of the Smart University Hub, offering similar features for students. Developed using C# and WinUI for a seamless Windows experience."
    },
    {
        name: "University Flex Portal",
        stack: ["Java", "JavaScript", "CSS"],
        desc: "A flexible web application for university flex management and information access. Enables students to interact with the university's flex system efficiently with a better and smoother ui/ux experience."
    },
    {
        name: "Timers App",
        stack: ["React Native"],
        desc: "An Android app for creating and managing multiple timers. Designed to help users stay organized and remember important moments easily."
    }
];