import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,

  
  Kasa,
  Nina,
  Ohmyfood,
  Printit,
  Argentbank,
 
  
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Infographiste',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },


  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },

];


const projects = [
  {
    id: 'project-1',
    name: 'Kasa',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: Kasa,
    repo: 'https://github.com/Miramiat/kasa-oc.git',
    demo: 'https://miramiat.github.io/kasa-oc/',
  },
  {
    id: 'project-2',
    name: 'Nina',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: Nina,
    repo: 'https://github.com/Miramiat/ninacarducci.git',
    demo: 'https://miramiat.github.io/ninacarducci/',
  },
  {
    id: 'project-3',
    name: 'Ohmyfood',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: Ohmyfood,
    repo: 'https://github.com/Miramiat/OpenclassroomsProject.git',
    demo: 'https://miramiat.github.io/OpenclassroomsProject/',
  },
  {
    id: 'project-4',
    name: 'Printit',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: Printit,
    repo: 'https://github.com/Miramiat/Print-it.git',
    demo: 'https://miramiat.github.io/Print-it/',
  },
  {
    id: 'project-5',
    name: 'Argentbank',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image:Argentbank,
    repo: 'https://github.com/Miramiat/argentbank-app.git',
    demo: 'https://github.com/Miramiat/argentbank-app.git',
  },
];

export { services, technologies, projects };
