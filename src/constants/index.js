import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  item1,
  programmingLanguages,
  librariesFrameworks,
  toolsPlatforms,
  design,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  // {
  //   id: "skills",
  //   title: "Skills",
  // },
  {
    id: "nuestros_productos",
    title: "Nuestos productos",
  },
  // {
  //   id: "more",
  //   title: "More",
  // },
];

export const features = [
  {
    id: "feature-1",
    icon: programmingLanguages,
    title: "Programming languages",
    content: "Javascript - Python - C/C++.",
  },
  {
    id: "feature-2",
    icon: librariesFrameworks,
    title: "Libraries & Frameworks",
    content: "React - Node.js - Express - Vue.",
  },
  {
    id: "feature-3",
    icon: toolsPlatforms,
    title: "Tools & Platforms",
    content: "Git - Github - Railway - Vercel - Firebase.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "This was implemented in the frontend with react, router, bootstrap and the backend with python.",
    name: "CRUD with MongoDB",
    title: "CRUD with MongoDB",
    img: people01,
    link: "https://github.com/victor-cp/mongodb-crud",
  },
  {
    id: "feedback-2",
    content:
      "A single page Todo App. This was implemented with react, redux, router techs and bootstrap's library.",
    name: "A simple Todo App",
    title: "Founder & Leader",
    img: people02,
    link: "https://github.com/victor-cp/a-simple-todo-app",
  },
  {
    id: "feedback-3",
    content:
      "A single page Todo App. This was implemented with react, redux, router techs and bootstrap's library.",
    name: "CRUD Firebase",
    title: "Founder & Leader",
    img: people02,
    link: "https://github.com/victor-cp/firebase-schedule",
  },
];

export const stats = [
  // {
  //   id: "stats-1",
  //   title: "User Active",
  //   value: "3800+",
  // },
  // {
  //   id: "stats-2",
  //   title: "Trusted by Company",
  //   value: "230+",
  // },
  // {
  //   id: "stats-3",
  //   title: "Transaction",
  //   value: "$230M+",
  // },
];

export const footerLinks = [
  {
    id: "feature-1",
    title: "Programming Languages",
    icon: programmingLanguages,
    links: [
      {
        name: "Javascript",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Python",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "C/C++",
        link: "https://www.hoobank.com/create/",
      },
    ],
  },
  {
    id: "feature-2",
    title: "Libraries & Frameworks",
    icon: librariesFrameworks,
    links: [
      {
        name: "React",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Node.js",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Express",
        link: "https://www.hoobank.com/suggestions/",
      },
    ],
  },
  {
    id: "feature-3",
    title: "Tools & Platforms",
    icon: toolsPlatforms,
    links: [
      {
        name: "Git",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Github",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Railway",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Vercel",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Firebase",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
  {
    id: "feature-4",
    title: "Design",
    icon: design,
    links: [
      {
        name: "Sketch",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Canva",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  // {
  //   id: "social-media-1",
  //   icon: instagram,
  //   link: "https://www.instagram.com/victor.colquichagua/",
  // },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/victor.colquichaguapalacin/",
  },
  // {
  //   id: "social-media-3",
  //   icon: twitter,
  //   link: "https://www.twitter.com/",
  // },
  // {
  //   id: "social-media-4",
  //   icon: linkedin,
  //   link: "https://www.linkedin.com/in/victor-colquichagua-palacin-80723b194/",
  // },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
