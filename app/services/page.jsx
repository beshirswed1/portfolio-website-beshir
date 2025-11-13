"use client"
import Link from "next/link"

const services = [
  {
    num: '01',
    title: 'Front-End Development',
    description: 'I create stunning, responsive, and high-performance web interfaces using React.js, Next.js, and Tailwind CSS. My focus is on delivering smooth user experiences, modern designs, and pixel-perfect layouts that make websites shine.',
  },
  {
    num: '02',
    title: 'Clean and Organized Coding',
    description: 'I write clean, maintainable, and highly readable code that follows industry best practices. Every line is carefully structured to ensure your project is scalable, efficient, and easy for teams to understand and extend.',
  },
  {
    num: '03',
    title: 'Systematic and Methodical Work',
    description: 'I approach each project with a structured and methodical mindset, prioritizing tasks effectively and maintaining consistent quality. This ensures smooth workflows, timely delivery, and professional outcomes that exceed expectations.',
  },
  {
    num: '04',
    title: 'Technical SEO Improvements',
    description: 'I optimize your website from a technical standpoint to improve visibility and performance. From enhancing site speed and structure to accessibility improvements, I ensure your website ranks better and delivers an outstanding user experience.',
  }
];

import {motion} from 'framer-motion';

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-12 xl:px-0 ">
      <div className="container mx-auto px-5">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {delay: 2.4, duration:0.4 , ease: 'easeIn'},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service , index) =>{
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className=" w-full">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-300">{service.num}</div>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
