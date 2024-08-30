import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar"> 
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span
             initial={{opacity:0 , scale:0.5}}
             animate={{opacity: 1, scale: 1}}
             transition={{duration: 1}}

             >HARSH GAKARE</motion.span>
            <motion.div 
             className="social"
             initial={{opacity:0 , scale:0.5}}
             animate={{opacity: 1, scale: 1}}
             transition={{duration: 1}}
             >
                <a href="https://www.linkedin.com/in/harsh-gakare-24052b295/" target="_blank"><img src="/linkedin.png" alt="" /></a>
                <a href="https://www.instagram.com/harshg_creative/" target="_blank"><img src="/instagram.png" alt="" /></a>
                <a href="https://discord.com/channels/@me"><img src="/discord.png" alt="" /></a>
                <a href="https://www.figma.com/design/0nHWChGabSlT7ZrPQHtG7j/My_Portfolio?node-id=4-2&t=8lrjYdPGmYSPNT1G-1"><img src="/figma.png" alt="" /></a>
            </motion.div 
            >
        </div>

        </div>
    )
}

export default Navbar