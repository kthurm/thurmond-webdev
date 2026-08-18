export interface Project {
  id: number;
  imgSrc: string;
  imgAlt: string;
  link: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    imgSrc: "/projects/amelinckx.png",
    imgAlt: "Andrew Amelinckx Website",
    link: "https://andrewamelinckx.com",
    title: "Andrew Amelinckx Website",
    description: "Astro, Tailwindcss",
  },
  {
    id: 2,
    imgSrc: "/projects/dekkerbabian.png",
    imgAlt: "Dekker Babian Website",
    link: "https://dekkerbabian.com/",
    title: "Dekker Babian Website",
    description: "React, Tailwindcss",
  },
  {
    id: 3,
    imgSrc: "/projects/alloravineyards.png",
    imgAlt: "Allora Vineyards Website",
    link: "https://www.alloravineyards.com/",
    title: "Allora Vineyards Website",
    description: "Laravel, Bootstrap",
  },
  {
    id: 4,
    imgSrc: "/projects/hinkeinrealty.png",
    imgAlt: "Hinkein Realty Website",
    link: "https://hinkeinrealty.com/",
    title: "Hinkein Realty",
    description: "WordPress",
  },
  {
    id: 5,
    imgSrc: "/projects/leadmarvels-advert.png",
    imgAlt: "Lead Marvels Website",
    link: "https://leadmarvels.com",
    title: "Lead Marvels Website",
    description: "Laravel, Alpine.js, Tailwindcss",
  },
  {
    id: 6,
    imgSrc: "/projects/leadmarvels-newsletter.png",
    imgAlt: "Leadmarvels Newsletter Component",
    link: "https://leadmarvels.com/newsletter-signup",
    title: "Leadmarvels Newsletter Component",
    description: "Laravel, Alpine.js, Tailwindcss",
  },
  {
    id: 7,
    imgSrc: "/projects/mecpahub.png",
    imgAlt: "MECPA Knowledge Hub",
    link: "https://mecpahub.org/",
    title: "MECPA Knowledge Hub",
    description: "Laravel, Alpine.js, Tailwindcss",
  },
  {
    id: 8,
    imgSrc: "/projects/eathquakes.png",
    imgAlt: "Earthquake Dashboard",
    link: "https://earthquakedashboard.thurmond-webdev.com/",
    title: "Earthquake Dashboard",
    description: "React, Tailwindcss",
  },
];
