"use client";
import { motion } from "framer-motion";
import Item from "@/components/item";

export default function About() {
  return (
    <div className=' pt-16 w-full flex flex-col md:flex-row gap-32'>
      <div className='w-full md:w-2/3'>
        <motion.h1 initial={{ opacity: 0, y: "50px" }} animate={{ opacity: 1.5, y: 0 }} transition={{ duration: 1, delay: 0, ease: "circOut" }}>
          Hello!
        </motion.h1>{" "}
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
          className='py-12 text-xl font-light  max-w-[640px] leading-relaxed'>
          I’m a Product Designer with over 8 years of experience, bridging the gap between design and technology to create solutions that resonate with users
          and drive business impact. <br />
          <br />
          My expertise spans UX/UI design, creative technology, and data visualization, making me uniquely positioned to tackle complex challenges with both a
          strategic and hands-on approach. Throughout my career, I’ve had the privilege of working on transformative projects across industries such as Energy,
          FinTech, Retail, and PropTech. <br />
          <br />
          My work often involves high-stakes environments and complex business logic, where I excel in translating intricate requirements into intuitive,
          user-friendly products. By collaborating closely with cross-functional teams, from engineers to stakeholders, I ensure that design is not only
          visually compelling but also aligns with technical and business goals. As a Creative Technologist, I’m passionate about exploring and integrating
          emerging technologies—such as VR, AR, and IoT—to enrich the user experience and push the boundaries of traditional digital products. My deep
          understanding of data visualization enables me to turn raw data into powerful insights, helping users make informed decisions while enhancing product
          engagement. I’m a data geek at heart, with a passion for both reading data and crafting impactful visualizations. In my spare time,
          <br />
          <br /> I love experimenting with home automation, finding ways to make life more connected and efficient. I thrive in fast-paced, high-uncertainty
          projects, bringing a calm, adaptive, and solution-oriented mindset. Whether building from scratch or improving existing solutions, my goal is to
          design products that are both functional and delightful, grounded in a strong empathy for users. Let’s shape the future of digital experiences
          together, combining design, technology, and data-driven insights to create products that don’t just meet needs—they redefine what’s possible.
        </motion.div>{" "}
        <Item />
        <Item />
        <Item />
      </div>
      <div className='w-full md:w-1/3'>
        <motion.div initial={{ opacity: 0, y: "50px" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1, ease: "circOut" }} className=''>
          <h2>Skills</h2>
          <p>hola</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: "50px" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.25, ease: "circOut" }} className=''>
          <h2>Skills</h2>
          <p>hola</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: "50px" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5, ease: "circOut" }} className=''>
          <h2>Skills</h2>
          <p>hola</p>
        </motion.div>
      </div>
    </div>
  );
}
