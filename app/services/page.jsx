"use client"
import Link from "next/link"
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

import { services } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// Component for individual card to manage mouse tracking spotlight effect
const ServiceCard = ({ service }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div variants={itemVariants} className="relative h-full">
      <div 
        onMouseMove={handleMouseMove}
        className="group flex flex-col justify-between h-full relative p-8 xl:p-10 rounded-[30px] bg-[#0A0A0A]/40 backdrop-blur-2xl border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      >
        {/* Spotlight Hover Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[30px] opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(56, 189, 248, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        {/* Inner glow border on hover */}
        <div className="absolute inset-0 rounded-[30px] border-[2px] border-sky-400/0 group-hover:border-sky-400/20 transition-colors duration-700 pointer-events-none"></div>

        {/* Massive Background Watermark Number */}
        <div className="absolute -right-6 -bottom-10 text-[150px] font-black text-white/5 group-hover:text-sky-400/10 group-hover:scale-110 group-hover:-translate-x-4 transition-all duration-700 pointer-events-none select-none z-0">
          {service.num}
        </div>

        <div className="relative z-10">
          <div className="w-full flex justify-between items-center mb-8">
            <div className="text-5xl font-extrabold text-transparent bg-clip-text text-outline group-hover:text-outline-hover transition-all duration-500">
              {service.num}
            </div>
            
            <Link href={service.href} className="w-[60px] h-[60px] rounded-full bg-white/[0.05] border border-white/10 group-hover:bg-sky-500 group-hover:border-sky-400 transition-all duration-500 flex justify-center items-center hover:scale-110 shadow-lg group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              <span className="text-white text-2xl group-hover:text-[#0A0A0A] group-hover:rotate-45 transition-all duration-500">↗</span>
            </Link>
          </div>
          
          <h2 className="text-[32px] font-bold leading-tight text-white mb-4 group-hover:text-sky-400 transition-colors duration-500">
            {service.title}
          </h2>
          
          <p className="text-white/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Animated Bottom Line */}
        <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-sky-400 to-blue-600 group-hover:w-full transition-all duration-700 ease-out z-10"></div>
      </div>
    </motion.div>
  );
}

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-20 px-5 xl:px-0 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        {/* Title Header (Optional, adds to premium feel) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 xl:mb-20 text-center xl:text-left"
        >
          <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Services</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto xl:mx-0">Transforming ideas into visually stunning and technically robust digital experiences.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px] xl:gap-[40px]"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>

        {/* Catalog CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Link href="https://catalog-beshir.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="relative group px-10 py-5 rounded-full bg-white/[0.05] backdrop-blur-xl border border-sky-400/30 text-white font-bold text-xl uppercase tracking-wider overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]">
              <span className="relative z-10 flex items-center gap-3">
                اذهب الى الكتالوج
                <span className="group-hover:rotate-45 transition-transform duration-300">↗</span>
              </span>
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-sky-400 to-blue-600 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services;
