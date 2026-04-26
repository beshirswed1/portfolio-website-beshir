"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Socials from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="h-full mt-10 sm:mt-0 px-5 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* Text and Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center xl:text-left order-2 xl:order-none z-10"
          >
            <motion.div variants={itemVariants} className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0A] border border-sky-300/30 text-sky-300 shadow-[0_0_15px_rgba(125,211,252,0.15)]">
              <span className="w-2 h-2 rounded-full bg-sky-300 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-sky-300 absolute"></span>
              <span className="text-sm font-medium uppercase tracking-wider ml-2">Available for Work</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="h1 mb-6 leading-tight">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-500 drop-shadow-sm">
                Masterpieces.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-[550px] mb-8 text-white/70 text-lg leading-relaxed font-light">
              Hi, I’m <b className="text-white font-semibold">Bashir Swed</b>. I transform complex ideas into sleek, high-performance web experiences. Specializing in Next.js & React, I blend motion and design to create websites that don't just look stunning—they feel alive.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col xl:flex-row items-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="group uppercase flex items-center gap-2 bg-sky-300 text-[#0A0A0A] hover:bg-white border-none transition-all duration-300 shadow-[0_0_20px_rgba(125,211,252,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                asChild
              >
                <a href="/assets/Beshir_Swed_Resume.pdf" download>
                  <span className="font-semibold">Download CV</span>
                  <FiDownload className="text-lg group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="group uppercase flex items-center gap-2 text-white hover:text-sky-300 transition-all duration-300"
                asChild
              >
                <a href="/work">
                  <span>View My Work</span>
                  <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <div className="flex xl:ml-4">
                <Socials />
              </div>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.6, type: "spring", stiffness: 100 } }}
            className="order-1 xl:order-none mb-12 xl:mb-0 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-300/20 to-transparent rounded-full blur-3xl"></div>
            <Photo />
          </motion.div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
