'use client'
import { FaHtml5 , FaCss3, FaJs , FaReact , FaBootstrap  } from "react-icons/fa"
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiSass , SiShadcnui  } from "react-icons/si";
import { SiTailwindcss , SiMui} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";


const about ={
  title: "About me",
  description: ' ',
  info:[
    {
      fieldName: "Name",
      fieldValue: "Beshir-Swed",
    },
    {
      fieldName: "Phone",
      fieldValue: "+905377906230",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "syria",
    },
    {
      fieldName: "Email",
      fieldValue: "beshirswed07@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ]
}

const experience = {
  icon: '',
  title: "My Experience",
  description: "Self-taught Front-End Web Developer with hands-on experience in HTML, CSS, React, TypeScript, Tailwind CSS, JavaScript, Python (Flask), Next.js, Git, GitHub, and SQLite. I have been working as a Freelance Front-End Developer since 2025, focusing on creating interactive, modern, and responsive web applications with clean code and strong UI/UX design.",
  items:[
    {
      company:'Freelance',
      position:'Front-End Developer',
      duration:'2025 – Present',
    }
  ]
}

const education = {
  icon: '',
  title: "My Education",
  description: "Studied at Al-Mahmoudiyah School for Imams and Preachers – Gaziantep, Turkey, completed 10th grade with Islamic studies focus. Currently taking advanced Front-End courses to enhance my skills.",
  items:[
    {
      institution:'Al-Mahmoudiyah School for Imams and Preachers',
      degree:'Completed 10th Grade (Islamic Studies focus)',
      duration: 'Until 2023',
    },
    {
      institution:'Osama Elzero & Ibrahim Adel',
      degree:'Python Course & Certificate',
      duration: '2024',
    },
    {
      institution:'Arabian Systems Academy',
      degree:'Front-End Development Course (Instructor: Malek)',
      duration: '2025 – Ongoing',
    },


  ]
}

const skills = {
  title: "My Skills",
  description: "Front-End Developer | Building fast, modern websites with Next.js & TypeScript, optimized for SEO",
  skillList:[
    {
      icon: <FaHtml5/> ,
      name: 'html 5',
    },
    {
      icon:<FaCss3/>,
      name: 'css 3',
    },
    {
      icon:<FaJs/>,
      name: 'javascript',
    },
    {
      icon:<FaReact/>,
      name: 'react',
    },
    {
      icon:<RiNextjsLine/>,
      name: 'next js',
    },
    {
      icon:<SiTypescript/>,
      name: 'typescript',
    },
    {
      icon:<SiTailwindcss/>,
      name: 'tailwindcss',
    },
    {
      icon: <FaBootstrap/>,
      name: 'bootstrap',
    },
    {
      icon:<SiMui/>,
      name: 'material ui',
    },
    {
      icon:<SiShadcnui />,
      name: 'shadcn ui',
    },
    {
      icon:<SiSass/>,
      name: 'sass',
    },
    {
      icon:<TbBrandRedux/>,
      name: 'redux toolkit',
    }
  ]
}

import { Tabs , TabsContent , TabsList ,TabsTrigger } from '@/components/ui/tabs';
import { Tooltip ,TooltipContent ,TooltipProvider ,TooltipTrigger} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area'
import {delay, motion} from 'framer-motion'

const resume = () => {
  return (
    <motion.dev
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition:{delay:2.4 , duration: 0.4, ease:'easeIn' }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience'
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">

            {/* -------------------------<experience>------------------------- */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                  <ul>
                    {experience.items.map((item , index) =>{
                      return (
                        <li key={index} className="bg-[#232329] m-3 h-[184-px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                          <span className="text-emerald-500">{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-emerald-500 rounded-full"></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
              </div>
            </TabsContent>




            {/* -------------------------<education>------------------------- */}
            <TabsContent value="education" className="w-full">
               <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item , index) =>{
                      return (
                        <li key={index} className="bg-[#232329] m-3 h-[184-px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                          <span className="text-emerald-500">{item.duration}</span>
                          <h3>{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-emerald-500 rounded-full"></span>
                            <p>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                  </ScrollArea>
              </div>
            </TabsContent>



            {/* -------------------------<skills>------------------------- */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap[40px] p-3">
                {skills.skillList.map((item, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                            <div className="text-6xl">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>





            {/* -------------------------<about>------------------------- */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0">
                  {about.info.map((item , index) =>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.dev>
  )
}

export default resume
