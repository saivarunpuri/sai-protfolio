import project2 from "../assets/projects/project-2.jpg";
import jobportal from "../assets/projects/Insider-Jobs.png";
import password from "../assets/projects/password.png";
import cowin from "../assets/projects/WhatsApp Image 2024-12-22 at 17.41.16_1da59433.jpg";
import carRental from "../assets/CAR-rental.png";
import ecommerce from "../assets/projects/ECOMMERCEAPI.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React , as well as back-end technologies like Node.js, MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have Done My Projects with a variety of technologies including React,  Node.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "CarRental Pro",
    image: carRental,
    description:
      "A revolutionary car rental platform with cutting-edge technology. Features include smart search, flexible booking, secure payments, real-time updates, location-based search, and comprehensive fleet management for car owners with analytics dashboard.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
  {
    title: "E-commerce API",
    image: ecommerce,
    description:
      "A complete e-commerce API built with Node.js, Express, and MongoDB featuring authentication, product management, cart operations, order processing, pagination, search, and comprehensive error handling.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Job Portal",
    image: jobportal,
    description:
      "A fully functional Job Portal with features like product Apllying Jobs, Recruiter Page, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Todo Management App",
    image: project2,
    description:
      "An application for managing todos, with features such as todo Creation and Deletion.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Password Manager",
    image: password,
    description:
      "A Password Manager app where users can add, search, and delete password entries, with a feature to toggle password visibility between stars and plain text. The app updates the passwords count dynamically.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Cowin Dashboard",
    image: cowin,
    description:
      "A COVID-19 Vaccination Dashboard that fetches and visualizes data with dynamic charts using Recharts. Features include bar charts for last 7 days' vaccination data and pie charts for vaccination by gender and age.",
    technologies: ["HTML", "CSS", "React"],
  },
];

export const CONTACT = {
  address: "Hyderabad Telengana ",
  phoneNo: "+91 9542082018 ",
  email: "saivarun.puri@gmail.com",
};
