export const portfolioData = {
  //person information
  personal: {
    name: "Umarbek Rakhmatov",
    title: "Full Stack Developer",
    subtitle: "Building modern web applications with passion and precision",
    description:
      "I'm a dedicated full stack developer with a passion for creating dynamic and responsive web applications.",
    email: "umarbek1306@gmail.com",
    location: "New York, USA",
  },

  //social links
  social: {
    linkedin: "https://www.linkedin.com/in/umarbek-rakhmatov/",
    github: "https://github.com/umarbek98",
  },
  skills: {
    frontend: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "GraphQL",
    ],
    tools: [
      "Git",
      "Docker",
      "AWS",
      "Firebase",
      "VS Code",
      "Figma",
      "Postman",
      "Webpack",
    ],
    other: [
      "Responsive Design",
      "SEO",
      "Performance Optimization",
      "Agile/Scrum",
      "UI/UX Design",
    ],
  },
  //portfolio projects
  projects: [
    {
      id: 1,
      title: "Brooklyn Barber Shop",
      description:
        "A web application for a barbershop booking system with classic design and accessibility features.",
      longDescription:
        "Brooklyn Barber Co is a booking platform for barbershops, featuring a homepage with service highlights, a booking modal with calendar integration, and appointment management tools. Users can browse services, choose barbers, book appointments, and manage their bookings. The app is built with React and custom hooks for state management, ensuring full WCAG 2.1 AA accessibility and ARIA support. It uses date-fns for date handling, Lucide React for icons, and includes PWA capabilities with custom CSS for responsive design.",
      technologies: ["React", "JavaScript", "WCAG 2.1 AA"],
      image: "/src/assets/images/brooklynbarber.png",
      liveDemo: "https://startling-gumption-c28d78.netlify.app/",
      sourceCode: "https://github.com/umarbek98/brooklyn-barber",
      featured: true,
    },
    {
      id: 2,
      title: "Shopster",
      description:
        "An e-commerce web application with a modern design, built using React and Tailwind CSS.",
      longDescription:
        "Shopster is an online store web app with a modern interface. It features a homepage with product listings, product details, cart, login, and user profile pages. Users can browse products, add items to their cart, and view order history. The app uses React for UI, Redux for state management, and Axios for API requests. Additional libraries include React Router, Toastify, and Tailwind CSS for enhanced styling and functionality.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      image: "/src/assets/images/shopster.png",
      liveDemo:
        "https://66a90966c6eb853eca24f16e--profound-figolla-8bab65.netlify.app/",
      sourceCode: "https://github.com/umarbek98/ShopSter",
      featured: false,
    },
    //petcenter project
    {
      id: 3,
      title: "PetCenter",
      description:
        "A pet adoption web application with a user-friendly interface, built with React.",
      longDescription:
        "This project is a web application that allows users to search for pets available for adoption in their area. The application is built using React and uses the Petfinder API to fetch data on available pets. The main components of the application include SearchParams, which allows users to input their search criteria, and Results, which displays a list of pets that match the search criteria. The application also includes a Carousel component that displays images of the selected pet, and a Details component that provides more information on the selected pet. The application uses ErrorBoundary components to handle errors and provide a user-friendly experience. Additionally, the useBreedList hook is used to fetch a list of available breeds for the selected animal. Overall, this project demonstrates proficiency in React and API integration.",
      technologies: ["React", "JavaScript", "Petfinder API"],
      image: "/src/assets/images/petcenter.png",
      liveDemo: "https://fabulous-medovik-bf375f.netlify.app/",
      sourceCode: "https://github.com/umarbek98/petcenter",
      featured: false,
    },
    {
      id: 4,
      title: "Personality Quiz App",
      description:
        "An interactive personality quiz web application with dynamic scoring and personalized results.",
      longDescription:
        "The Personality Quiz App is an engaging web application that assesses users' personality traits through a series of carefully crafted questions. Built with vanilla JavaScript, HTML5, and CSS3, the app features a clean, intuitive interface with smooth transitions and animations. Users progress through multiple-choice questions, with each answer contributing to their final personality profile. The application includes dynamic scoring algorithms, personalized result pages with detailed descriptions, and responsive design for optimal experience across all devices. The quiz incorporates modern UX principles with progress indicators, animated transitions, and mobile-first responsive design, making it both educational and entertaining.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      image: "/src/assets/images/personality.png",
      liveDemo: "https://silly-medovik-0354ef.netlify.app/",
      sourceCode: "https://github.com/umarbek98/personality-quiz-app",
      featured: true,
    },
  ],
};
