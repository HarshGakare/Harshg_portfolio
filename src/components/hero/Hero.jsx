import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition : {
            duration: 1,
            staggerChildren: 0.1,
        },
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    },
};

const imgVariants = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
            
        },
    },
};




const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition : {
           repeat: Infinity,
           repeatType: "mirrior",
           duration: 20,
        },
    },

};




const Hero = () => {

    return (
        <div className="hero">
            <div className="wrapper">
            <motion.div 
            className="textContainer"
             variants={textVariants}
             initial="initial"
             animate="animate"
             >
                <motion.h2 variants={textVariants} >I'm <br></br>HARSH GAKARE</motion.h2>
                <motion.h1 variants={textVariants} >Web developer and UI designer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                <a href="#portfolio">
    <motion.button variants={textVariants} whileHover={{ backgroundColor: "white", color: "black" }}>See the Latest Works</motion.button>
</a>

                    <a href="#contact">
    <motion.button variants={textVariants} whileHover={{ backgroundColor: "white", color: "black" }}>Contact Me</motion.button>
</a>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>
            <motion.div className="imageContainer" variants={imgVariants} initial="initial" animate="animate">
                <motion.img src="/hero.png" alt="" />
            </motion.div>
        </div>
    )
}

export default Hero