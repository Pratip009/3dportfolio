import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  me,
  ollp,
  gospeedyy,
  creator,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "UI Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Jr. Front End Developer",
    company_name: "Modern Enterprise Private Limited",
    icon: me,
    iconBg: "#E6DEDD",
    date: "May 2021 - Oct 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Optimasedge LLP",
    icon: ollp,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Dec 2022",
    points: [
      "Designed reusable React components with hooks, reducing code duplication and enhancing maintainability.",
      "Developed efficient GraphQL queries and high-performance UI components using React and Redux.",
      "Implemented TypeScript for type-safe code and decreased runtime errors.",
      "Leveraged MongoDB, Firebase, and Node.js with Express to improve data retrieval and system performance.",
    ],
  },
  {
    title: "Application Developer",
    company_name: "Gospeedy",
    icon: gospeedyy,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Frontend Developer specializing in React and React Native, focused on enhancing user experience and performance.",
      "Created reusable components and optimized bundle sizes using advanced techniques.",
      "Integrated Firebase for secure authentication and Razorpay for efficient payment processing.",
      "Successfully launched and maintained Android apps on the Google Play Store.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Pratip proved me wrong.",
    name: "Rahul Singh",
    designation: "CEO",
    company: "Learning Needs",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Pratip does.",
    name: "Banamali Dhal",
    designation: "CEO",
    company: "Gospeedy",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Swaraj Ghosh",
    designation: "Sr. Software Engineer",
    company: "Optimasedge LLP",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
  },
];

const projects = [
  {
    name: "Learning Needs",
    description:
      "Learning Needs is a training & management consulting company based in Kolkata in the lap of nature beside river Ganges, India. Learning Needs offers a variety of boutique. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Prime India Packers",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sundarban Tourism",
    description:
      "While searching for the best travel website you must know who and which is the best. For being the best one must do something extra for the site as well as for the business. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
