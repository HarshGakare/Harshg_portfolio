import { useParams } from "react-router-dom";
import "./projectdetail.scss";


import main1 from '../../assets/images/pr1_main.png';
import pr1_img1 from '../../assets/images/pr1_img1.png';
import pr1_img2 from '../../assets/images/pr1_img2.png';
import pr1_img3 from '../../assets/images/pr1_img3.png';
import pr1_img4 from '../../assets/images/pr1_img4.png';

import main2 from '../../assets/images/pr2_main.png';
import pr2_img1 from '../../assets/images/pr2_img1.png';
import pr2_img2 from '../../assets/images/pr2_img2.png';
import pr2_img3 from '../../assets/images/pr2_img3.png';
import pr2_img4 from '../../assets/images/pr2_img4.png';

import main3 from '../../assets/images/pr3_main.png';
import pr3_img1 from '../../assets/images/pr3_img1.png';
import pr3_img2 from '../../assets/images/pr3_img2.png';
import pr3_img3 from '../../assets/images/pr3_img3.png';
import pr3_img4 from '../../assets/images/pr3_img4.png';

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: main1,
        desc: "I developed an animated website using ReactJS and Framer Motion. My role involved creating interactive components and implementing scroll-triggered animations. The project resulted in a visually engaging website that showcased dynamic user interactions and smooth animations.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        additionalImgs: [pr1_img1, pr1_img2, pr1_img3, pr1_img4]
    },
    {
        id: 2,
        title: "Simple Portfolio",
        img: main2,
        desc: "I created a personal portfolio website using ReactJS and Framer Motion. My role involved designing and developing interactive components, such as animated transitions and scroll-triggered effects. The project resulted in a dynamic and visually appealing portfolio, effectively showcasing my projects and skills with engaging animations.",
        tech: ["React", "Tailwind CSS", "Framer Motion","Figma"],
        additionalImgs: [pr2_img1, pr2_img2, pr2_img3, pr2_img4]
    },
    {
        id: 3,
        title: "Office Rent Website",
        img: main2,
        desc: "I developed an office rent website using HTML, CSSand Js. My role was to design the layout and style the pages to create a user-friendly experience. The project resulted in a clean, responsive website that made it easy for users to search for and connect with landlords for office rentals.",
        tech: ["Figma, Html, css, Js "],
        additionalImgs: [pr3_img1, pr3_img2, pr3_img3, pr3_img4]
    },
    // Add other items here...
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = items.find((item) => item.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-details">
            <h1 className="project-title">{project.title}</h1>
            <div className="project-main-img">
                <img src={project.img} alt={project.title} />
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tech">
                <h3>Technologies Used:</h3>
                <ul>
                    {project.tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
            <div className="project-additional-photos">
                <h3>Additional Photos:</h3>
                {project.additionalImgs.map((img, index) => (
                    <img key={index} src={img} alt={`Additional ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default ProjectDetails;
