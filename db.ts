export interface IProjectData {
  name: string;
  pictures: string[] | [];
  desc: string;
  sourceLink?: string;
  websiteLink?: string;
}

export const HomePageBannerText = `
    <p>I'm <b>David Nikolovski</b>, a  <b>Full-stack Developer</b> with expertise in <b>React</b>, <b>TypeScript</b>, <b>Next.js</b> and <b>ExpressJS</b>.</p>
    <p>I'm passionate about creating seamless user experiences and thrive on challenges, always seeking innovation. 
    With a strong foundation and a collaborative mindset, I'm dedicated to shaping the future of web development. 
    I specialize in writing highly performant components with pixel-perfect precision and reusable code. </p>
    <p> <u>Let's connect and elevate digital experiences together.</u> </p>
    <div>    
    <u><h3>Languages</h3></u>
    <p>HTML, CSS, JavaScript(ES6+), TypeScript, Nodejs, MongoDB</p>
    </div>
    <div>
    <u>Frameworks/Libraries</u>
    <p>React.js, React Native, Next.js, Express, Mongoose, Redux, Zustand, Stripe, styled-components, Tailwind, Firebase, Supabase, Framer-Motion, Shopify Liquid, ElectronJS</p>
    </div> 
    <div>
    <u>UX / UI</u>
    <p>Responsive Web Design, Smooth Animations, SEO principles, Figma, Adobe XD</p>
    </div>
    <div>
    <u>Education</u>
    <p>Frontend Web Development Brainster Academy - 2023</p>
    </div>
  `;

export const ProjectsData: IProjectData[] = [
  {
    name: 'Tapemotion',
    desc: 'Developed a dynamic movie streaming web application using Next.js 15, Framer Motion, and Tailwind CSS. Implemented responsive design and smooth animations to enhance user experience, enabling seamless browsing and streaming of movie content.',
    pictures: [
      '/images/Tapemotion/homepage.png',
      '/images/Tapemotion/moviesPage.png',
      '/images/Tapemotion/moviePage.png',
      '/images/Tapemotion/watchPage.png',
    ],
    websiteLink: 'https://tapemotion.com/en',
  },
  {
    name: 'Caligant',
    desc: 'This project showcases the client’s personal coaching services and allows clients to easily view information and schedule appointments. It highlights his expertise, programs, and success stories while streamlining communication through an integrated booking system.',
    pictures: [
      '/images/Caligant/Caligant1.png',
      '/images/Caligant/Caligant2.png',
      '/images/Caligant/Caligant3.png',
      '/images/Caligant/Caligant4.png',
      '/images/Caligant/Caligant5.png',
    ],
    websiteLink: 'https://caligant.com/',
  },
  {
    name: 'Duga-m',
    desc: 'PROJECT FOR PRACTICE. Created a private invoice and approval management DESKTOP application for a company using Electron.js, with Node.js, Mongoose, and MongoDB for the backend. Implemented CRUD operations for companies, invoices, and approvals, along with features like critical invoice payment reminders, and options to delete, edit, or create company records, streamlining financial workflows.',
    pictures: [
      '/images/dugaM/homepage.png',
      '/images/dugaM/homepage-2.png',
      '/images/dugaM/allCompany.png',
      '/images/dugaM/companyDetails.png',
    ],
    sourceLink: 'https://github.com/DavidNikolovski24/duga-m',
  },
  {
    name: 'TilerPlace',
    desc: 'Built a Tiler marketplace web application using Next.js 14, Tailwind CSS, and Stripe, enabling customers to locate nearby tilers, view their work in a gallery, and contact them, with map integration for easy navigation. Implemented a subscription-based model for tilers to advertise their services, streamlining payments through Stripe',
    pictures: [
      '/images/TilerPlace/homepage.png',
      '/images/TilerPlace/mapView.png',
      '/images/TilerPlace/plansPage.png',
      '/images/TilerPlace/BlogsPage.png',
      '/images/TilerPlace/login.png',
    ],
  },
  {
    name: 'Velnes',
    desc: 'The project goal is to create an app for beauty salons, where clients can make appointments, cancel appointments, see salon reviews from other clients, and see all information available for the chosen salon(something like booking.com but for beauty salons). This project is built in React, with TypeScript. For styled systems, that use styled-components. The client requirement was for this app to be mobile only.',
    pictures: [
      '/images/Velnes/velnesHome.png',
      '/images/Velnes/velnesSalonPage.png',
      '/images/Velnes/velnesAppointmentConfrimed.png',
      '/images/Velnes/velnesProfileMenu.png',
    ],
    sourceLink: 'https://github.com/DavidNikolovski24/velnes.mk',
    websiteLink: 'https://velnes.mk/',
  },
  {
    name: 'Coza Store',
    desc: 'The purpose of this project was to practice and do a small review of my Next 12 with TypeScript. The main idea was to create an online shop where customers can look at available products that the shop offers. This project is built in Next 12 with TypeScript. Bootstrap was used for the styling system. ',
    pictures: [
      '/images/CozaStore/cozaStoreHomepage.png',
      '/images/CozaStore/productPage.png',
      '/images/CozaStore/blogs.png',
      '/images/CozaStore/blogPage.png',
      '/images/CozaStore/aboutPage.png',
    ],
    sourceLink: 'https://github.com/DavidNikolovski24/online-shop',
  },
  {
    name: 'The money solicitor',
    desc: 'This Upwork project involves developing the frontend with TypeScript to create a responsive and visually engaging user interface. I’m using styled components for efficient, maintainable, and consistent styling. My focus is on delivering a smooth, high-quality user experience across all devices. Together, TypeScript and styled components help me build a modern and elegant interface that elevates the project.',
    pictures: [
      '/images/theMoneySolicitor/homepage.png',
      '/images/theMoneySolicitor/duringSelection.png',
      '/images/theMoneySolicitor/form.png',
      '/images/theMoneySolicitor/signaturePage.png',
      '/images/theMoneySolicitor/ThankU.png',
    ],
    sourceLink: 'https://github.com/DavidNikolovski24/themoneysolicitor',
    websiteLink: 'https://themoneysolicitor-ppsn.vercel.app/',
  },
  {
    name: 'Portfolio Website',
    desc: 'This Masterpiece 😍',
    pictures: [],
    sourceLink:
      'https://github.com/DavidNikolovski24/DavidNikolovski24.github.io',
  },
];
