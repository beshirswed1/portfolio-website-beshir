"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"
import { projects } from "@/lib/data";

const work = () => {
  const [project, setProject] = useState(projects[0]);
  
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.6, ease: 'easeInOut' } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-5 relative">
        <div className="flex flex-col xl:flex-row xl:gap-[50px] items-center">
          
          {/* Left Text Side (Glassmorphism & AnimatePresence) */}
          <div className="w-full xl:w-[50%] xl:h-[520px] flex flex-col order-2 xl:order-none relative z-10 mb-12 xl:mb-0">
            
            {/* Watermark Number */}
            <div className="absolute -top-10 -left-6 xl:-left-12 overflow-hidden pointer-events-none select-none z-[-1]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.num}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 0.04, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-[180px] xl:text-[250px] font-extrabold text-white leading-none"
                >
                  {project.num}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Glassmorphic Info Card */}
            <div className="relative h-full flex flex-col justify-center p-6 xl:p-10 bg-[#0A0A0A]/40 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] group overflow-hidden">
              
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={project.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 flex flex-col"
                >
                  {/* Category Badge */}
                  <div className="flex items-center gap-4 mb-5">
                    <span className="px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-[40px] xl:text-[52px] font-bold text-white mb-4 leading-[1.1] capitalize tracking-tight">
                    {project.title.split('-').join(' ')}
                  </h2>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-lg mb-8 max-w-md">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-white/30 text-xs mb-4 uppercase tracking-[0.2em] font-semibold">Tech Stack</h4>
                    <ul className="flex flex-wrap gap-4">
                      {project.stack.map((item, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-[#0A0A0A]/50 border border-white/10 flex justify-center items-center hover:bg-sky-500/20 hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300 shadow-md">
                                  <div className="text-2xl text-white/60 hover:text-sky-400 transition-colors duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-[#0A0A0A] text-white border border-white/10 shadow-xl rounded-lg">
                                  <p className="text-sm">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent mb-8"></div>

                  {/* Links */}
                  <div className="flex items-center gap-5">
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[65px] h-[65px] rounded-full bg-sky-500/10 border border-sky-500/30 flex justify-center items-center group hover:bg-sky-500 transition-all duration-500 shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-sky-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                            <BsArrowUpRight className="text-sky-400 text-2xl group-hover:text-[#0A0A0A] group-hover:rotate-45 transition-all duration-500 relative z-10" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#0A0A0A] text-white border border-white/10 shadow-xl rounded-lg">
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link href={project.github} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[65px] h-[65px] rounded-full bg-[#0A0A0A]/50 border border-white/10 flex justify-center items-center group hover:bg-white hover:border-white transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                            <BsGithub className="text-white text-2xl group-hover:text-[#0A0A0A] group-hover:scale-110 transition-all duration-500 relative z-10" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#0A0A0A] text-white border border-white/10 shadow-xl rounded-lg">
                            <p>Github repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Image Side (Swiper) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } }}
            className="w-full xl:w-[50%]"
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] rounded-3xl overflow-visible relative"
              onSlideChange={handleSlideChange}
              grabCursor={true}
              speed={800}
            >
              {projects.map((proj, index) => {
                const isActive = project.num === proj.num;
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] sm:h-[400px] xl:h-[520px] relative flex justify-center items-center bg-[#0A0A0A] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 group">
                      
                      {/* Inner Glass border overlay */}
                      <div className="absolute inset-0 border-[2px] border-white/5 rounded-3xl z-20 pointer-events-none mix-blend-overlay"></div>
                      
                      {/* Dark overlay for inactive states or hover effect */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-[#0A0A0A]/40 z-10 group-hover:bg-[#0A0A0A]/10 transition-colors duration-700 pointer-events-none"></div>
                      
                      {/* Image with slow pan effect when active */}
                      <div className={`relative w-full h-full transition-transform duration-[15s] ease-linear ${isActive ? 'scale-110' : 'scale-100'} group-hover:scale-[1.15]`}>
                        <Image
                          src={proj.image}
                          fill
                          className="object-cover"
                          alt={proj.title}
                          quality={100}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              
              {/* Swiper Navigation Buttons Overlay */}
              <div className="absolute -bottom-16 xl:bottom-6 right-0 xl:right-6 z-50 w-full flex justify-center xl:justify-end xl:w-auto">
                <WorkSliderBtns />
              </div>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default work
