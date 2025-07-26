import meImage from './assets/images/me.jpg';
import myPortfolio from './assets/images/portfolio.png';
import lms from './assets/images/lms.jpg';
import ethmarket from './assets/images/ethMarket.jpg';
import anomalyDetection from './assets/images/anomalyDetection.jpg';
const logotext = "PORTFOLIO";
const meta = {
    title: "Shammas",
    description: "Mohamed Shammas",
};

const introdata = {
    title: "I’m Mohamed Shammas",
    animated: {
        first: "Computer Engineering Undergraduate",
        second: "Full-Stack Developer",
        third: "AI Enthusiast",
    },
    description: "Building Scalable Full Stack Systems and Highly-Rated Solutions",
    your_img_url: meImage,
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "I’m a Computer Engineering student (3.89 GPA) with a passion for building scalable frontend applications and high-impact AI solutions. My journey spans from developing interactive UIs with React.js to training medical computer vision models (like my YOLO-based tumor segmentation system, which achieved a 30% accuracy boost). I thrive at the intersection of code and problem-solving—whether optimizing ERP workflows to save 10+ hours weekly or designing anomaly detection systems that outperform industry benchmarks (92% accuracy). Beyond technical skills, I love mentoring peers in JavaScript/ML and contributing to open-source projects. Currently, I’m deepening my expertise in full-stack development (Node.js, APIs) and Agile methodologies, aiming to build products that bridge technology and real-world needs—especially in healthtech. Let’s connect to discuss innovation, collaboration, or how we can turn ideas into impact. ",
};
const worktimeline = [{
        jobtitle: "Machine Learning Intern",
        where: "Arch Technologies",
        date: "2025",
    },
    {
        jobtitle: "ERP Systems Intern",
        where: "The University of Lahore",
        date: "2024",
    },
    
];

const skills = [{
        name: "Statistics",
        value: 95,
    },
    {
        name: "Math",
        value: 90,
    },
    {
        name: "Python",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "HTML5, CSS3",
        value: 95,
    },
    {
        name: "Flask",
        value: 75,
    },
    {
        name: "Tensorflow",
        value: 80,
    },
];

const services = [{
        title: "Frontend Development",
        description: "I craft fast, responsive web interfaces using React.js, JavaScript, and modern CSS. Whether you need a dynamic single-page app, a UI overhaul, or performance optimization (like the 40% faster search I built for my Library Management System), I focus on clean code and intuitive design. My frontend work is backed by rigorous testing and a mobile-first approach.",
    },
    {
        title: "Full-Stack & Process Automation",
        description: "I bridge frontend and backend to deliver scalable web applications. Using Python (Flask) and SQL, I’ve built systems handling 1,000+ records (like my Library Management project) and automated workflows (saving 10+ hours weekly at my ERP internship). If you’re drowning in repetitive tasks, I’ll design scripts or tools to streamline operations—just as I reduced data validation errors by 15%.",
    },
    {
        title: "Technical Mentorship & Code Reviews",
        description: "Want to level up your team’s skills? I offer 1:1 coaching in JavaScript, React, or Python/ML, drawing from my experience mentoring peers and contributing to open-source projects. I also provide detailed code reviews—like the optimizations I applied to cut false positives in an ML model by 15%—to help you write more efficient, maintainable code.",
    },
];

const dataportfolio = [{
        img: myPortfolio,
        description: "My Personal Portfolio",
        link: "https://github.com/ShammazFarees/PortfolioReact",
    },
    {
        img: lms,
        description: "Library Management System",
        link: "https://github.com/ShammazFarees/LibraryManagement",
    },
    {
        img: anomalyDetection,
        description: "Network Anomaly Detection System",
        link: "https://github.com/ShammazFarees/AnomalyDetection",
    },
    {
        img: ethmarket,
        description: "Ethereum Price Prediction",
        link: "https://github.com/ShammazFarees/ETHmarket",
    },
];

const contactConfig = {
    YOUR_EMAIL: "shammas.mfm@gmail.com",
    YOUR_FONE: "(+94)77-8851650",
    description: "Feel free to contact me whenever you need my services.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/ShammazFarees",
    instagram: "https://www.instagram.com/_shxmmxs__fxris_?igsh=OW5lNXhrNG1oZWw3",
    linkedin: "https://linkedin.com/in/shammas-faris",
    twitter: "https://x.com/ShammazFaris?t=NGWkqydOi6bniZzNgA7ypw&s=08",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
