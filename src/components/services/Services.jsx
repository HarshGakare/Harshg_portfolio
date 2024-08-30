import { useRef } from 'react';
import './services.scss';
import {animate, color, motion , useInView} from "framer-motion";

const variants = {
    initial :{
        x: -500,
        y:100,
        opacity: 0,
    },

    animate: {
        x:0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref , {margin : '-100px'});



    return (
        <motion.div 
        className='services'
        id='Services'
         variants={variants} 
         initial="initial" 
         ref={ref}
         animate={'animate'}
         whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow <br />
                    and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                <motion.h1 
            whileHover={{ color: "orange" }}
            transition={{ duration: 0.3 }} 
        >
            My Areas of Expertise
        </motion.h1>
                </div>

            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" 
                 whileHover={{ background: "lightgray" , color:"black"}}
                 >
                    <div className='textdiv'>
                    <h2>Programming Skills</h2>
                    </div>
                    <div className='listdiv'>
                        <ul>
                            <li>C</li>
                            <li>C++</li>
                            <li>Python</li>
                        </ul>

                    </div>
                
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div className="box"
                 whileHover={{ background: "lightgray" , color:"black"}}
                 >
                    <div className='textdiv'>
                    <h2>Front-End Skills</h2>

                    </div>
                    <div className='listdiv'>

                    <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>Redux(Basic)</li>
                        </ul>
                    </div>
                           {/* <button>Go</button> */}
                 
                </motion.div>
                <motion.div className="box"
                 whileHover={{ background: "lightgray" , color:"black"}}
                 >
                    <div className='textdiv'>

                    <h2>Soft Skills</h2>
                    </div>
                    <div className='listdiv'>

                    <ul>
                        <li>Problem-Solving</li>
                        <li>Teamwork</li>
                        <li>Leadership</li>
                        <li>Creativity</li>
                    </ul>
                    </div>
                   
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div className="box"
                 whileHover={{ background: "lightgray" , color:"black"}}
                 >
                    <div className='textdiv'>

                    <h2>Design/Developing Tools</h2>
                    </div>
                    <div className='listdiv'>

                    <ul>
                            <li>Figma</li>
                            <li>Webflow</li>
                            <li>Framer(Basic)</li>
                    </ul>
                    </div>
                    {/* <button>Go</button> */}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services