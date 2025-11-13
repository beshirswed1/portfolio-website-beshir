'use client'
import { motion } from "framer-motion"
import { useState } from "react"
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {BsArrowUpRight , BsGithub} from 'react-icons/bs'
import { Tooltip , TooltipContent , TooltipProvider , TooltipTrigger} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: "01",
    category: "Front-End",
    title: "yasmine-alshaam",
    description: "A simple personal website built with React.js",
    stack:[{name:'Html 5'},{name:'Css 3'} ,{name: 'JavaScript'}, {name: 'React'}],
    image: "/yasmin.png",
    live:"https://yasmeen-alsham.vercel.app/",
    github:'https://github.com/beshirswed1/YASMEEN_ALSHAM'
  },
  {
    num: "02",
    category: "Front-End",
    title: "book-vault",
    description: "A simple personal website built with javaScript",
    stack:[{name:'Html 5'},{name:'Css 3'} ,{name: 'JavaScript'}],
    image: "/book.png",
    live:"https://book-vault-three.vercel.app/",
    github:'https://github.com/beshirswed1/book-vaulet'
  },
  {
    num: "03",
    category: "Front-End",
    title: "foot craft",
    description: "A simple personal website built with React and Next.js",
    stack:[{name:'Html 5'},{name:'Css 3'} ,{name: 'JavaScript'}, {name: 'React'}],
    image: "/foot.png",
    live:"https://footcraft.vercel.app/",
    github:'https://github.com/beshirswed1/FOOTCRAFT'
  },
  {
    num: "04",
    category: "Front-End",
    title: "khair-alquron",
    description: "A simple personal website built with JavaScript",
    stack:[{name:'Html 5'},{name:'Css 3'} ,{name: 'JavaScript'}, {name: 'React'}],
    image: "/alqron.png",
    live:"https://khair-alquron.vercel.app/",
    github:'https://github.com/beshirswed1/khair-alquron'
  }
]
const work = () => {
  const [project , setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{opacity: 1,
      transition: {delay:2.4 , duration: 0.4, ease:'easeIn'} }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold text-white hover:text-emerald-500 tarnsition-all duration-500">{project.category}</h2>
              <h3 className="text-2xl font-semibold text-white/90">
  {project.title}
</h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item , index) =>{
                  return (
                    <li key={index} className="text-emerald-500">
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsArrowUpRight className="text-white text-3xl hover:text-emerald-500"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsGithub className="text-white text-3xl hover:text-emerald-500"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px md-12]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project , index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtns/>
            </Swiper>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default work
