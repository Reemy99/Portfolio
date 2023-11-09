import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";


//import { motion, useInView } from "framer-motion";

// We can do the animation in 2 ways 1) with variants || 2) with inView hook
// the diifrences is that with inView hook we can chose when we need to do the anaimation ex: margin: "-100px"
const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition: {
      duration: 1,
      staggerChlidren: 0.1,
    },
  },
}

const About =() => {
  return (
  //   const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px" });

    <motion.div className="about"
    variants={variants}
    initial="initial"
    whileInView="animate"
    // ref={ref}
    //   animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>Aspiring Software Developer with a Passion
          <br/>for Art and BlockChain
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1><motion.b whileHover={{color:"rgb(183, 14, 192)"}}> What</motion.b> I Was Doing?</h1>
        </div>
        <div className="title">
          <h1><motion.b whileHover={{color:"rgb(183, 14, 192)"}}> And What</motion.b> I'm Currently Doing</h1>
        </div>
      </motion.div>
      <motion.div
          className="box" variants={variants}>
          <p>
            Hello, I'm Reem, based in the UAE. With a strong background in art spanning over four years, I have recently embarked on an exciting journey of transformation.
            I transitioned into the world of software development by joining the 42 network and immersing myself in the languages of C/C++.<br/>
            While my new path as a software developer is a thrilling one, my passion for art has never waned.
            My mission is to create websites that seamlessly blend my artistic experiences with the dynamic world of web development.<br/>
            I'm also deeply intrigued by the potential of blockchain technology. I find the world of 2D/3D NFT design captivating and am keen to explore this technology.
            My journey in this field is just beginning, and I'm excited about the endless possibilities it presents.<br/>            
            <br/><b>It's the fusion of Creativity and Technology that drives me.</b>
          </p>
          <button>Check out my resume</button>
        </motion.div>
    </motion.div>
  )
}

export default About;