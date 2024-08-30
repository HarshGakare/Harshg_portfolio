// Portfolio.js
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";


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
        tech: ["React", "Tailwind CSS", "Framer Motion", "Figma"],
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
        img: main3,
        desc: "I developed an office rent website using HTML, CSSand Js. My role was to design the layout and style the pages to create a user-friendly experience. The project resulted in a clean, responsive website that made it easy for users to search for and connect with landlords for office rentals.",
        tech: ["Figma, Html, css, Js "],
        additionalImgs: [pr3_img1, pr3_img2, pr3_img3, pr3_img4]
    },
    // Other items...
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-400, 100]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <motion.img  whileHover={{scale: 1.1}} src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <Link to={`/project/${item.id}`} rel="noopener noreferrer">
    <button>See Demo</button>
</Link>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    const portfolioRef = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });

useEffect(() => {
    if (isInView) {
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
}, [isInView]);

    return (
        <div className="portfolio" id="portfolio" ref={ref}>
            <div className="progress">
                <motion.h1 whileHover={{ color: "orange" }}
            transition={{ duration: 0.3 }}>Featured Works</motion.h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
