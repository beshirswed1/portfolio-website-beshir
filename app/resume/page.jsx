'use client'
import { about, experience, education, skills } from "@/lib/data";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-24 relative overflow-hidden'
    >
      {/* Background glowing effects */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-400/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-5">
        <Tabs defaultValue='experience'
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4 bg-transparent">
            <TabsTrigger className="data-[state=active]:bg-sky-300 data-[state=active]:text-[#0A0A0A] data-[state=active]:font-bold bg-white/[0.03] text-white py-3 rounded-xl transition-all duration-300 border border-white/5 hover:bg-white/10" value="experience">Experience</TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-sky-300 data-[state=active]:text-[#0A0A0A] data-[state=active]:font-bold bg-white/[0.03] text-white py-3 rounded-xl transition-all duration-300 border border-white/5 hover:bg-white/10" value="education">Education</TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-sky-300 data-[state=active]:text-[#0A0A0A] data-[state=active]:font-bold bg-white/[0.03] text-white py-3 rounded-xl transition-all duration-300 border border-white/5 hover:bg-white/10" value="skills">Skills</TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-sky-300 data-[state=active]:text-[#0A0A0A] data-[state=active]:font-bold bg-white/[0.03] text-white py-3 rounded-xl transition-all duration-300 border border-white/5 hover:bg-white/10" value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* -------------------------<experience>------------------------- */}
            <TabsContent value="experience" className="w-full">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <motion.ul variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {experience.items.map((item, index) => {
                      return (
                        <motion.li variants={itemVariants} key={index} className="bg-white/[0.02] border border-white/5 h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1 hover:border-sky-300/30 hover:bg-white/[0.04] transition-all duration-300 shadow-lg">
                          <span className="text-sky-300 font-semibold">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-sky-300 rounded-full shadow-[0_0_10px_#7DD3FC]"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </motion.li>
                      )
                    })}
                  </motion.ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* -------------------------<education>------------------------- */}
            <TabsContent value="education" className="w-full">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <motion.ul variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <motion.li variants={itemVariants} key={index} className="bg-white/[0.02] border border-white/5 h-[184px] py-6 px-8 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1 hover:border-sky-300/30 hover:bg-white/[0.04] transition-all duration-300 shadow-lg">
                          <span className="text-sky-300 font-semibold">{item.duration}</span>
                          <h3 className="text-lg leading-tight max-w-[260px] min-h-[60px] text-center lg:text-left mt-2">{item.degree}</h3>
                          <div className="flex items-center gap-3 mt-auto">
                            <span className="w-[6px] h-[6px] bg-sky-300 rounded-full shadow-[0_0_10px_#7DD3FC]"></span>
                            <p className="text-white/60 text-sm">{item.institution}</p>
                          </div>
                        </motion.li>
                      )
                    })}
                  </motion.ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* -------------------------<skills>------------------------- */}
            <TabsContent value="skills" className="w-full h-full">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">{skills.description}</p>
                </div>
                <motion.ul variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8 pt-4">
                  {skills.skillList.map((item, index) => {
                    return (
                      <motion.li variants={itemVariants} key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-white/[0.02] border border-white/5 rounded-2xl flex justify-center items-center group hover:bg-sky-300/10 hover:border-sky-300/30 transition-all duration-300 shadow-lg">
                              <div className="text-6xl text-white group-hover:text-sky-300 transition-all duration-300 group-hover:scale-110">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white text-[#0A0A0A] font-medium border-none shadow-xl">
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            </TabsContent>

            {/* -------------------------<about>------------------------- */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                  {about.description}
                </p>
                <motion.ul variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 max-w-[700px] mx-auto xl:mx-0 mt-8">
                  {about.info.map((item, index) => {
                    return (
                      <motion.li variants={itemVariants} key={index} className="flex items-center justify-center xl:justify-start gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all duration-300 shadow-sm">
                        <span className="text-white/50 text-sm uppercase tracking-wider font-semibold">{item.fieldName}</span>
                        <span className="text-lg font-medium text-white">{item.fieldValue}</span>
                      </motion.li>
                    )
                  })}
                </motion.ul>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
