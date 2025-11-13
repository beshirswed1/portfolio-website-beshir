'use client';
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.dev
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition: { delay: 2.4 , duration: 0.4 , ease:'easeInOut'}}}
      >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition: { delay: 2 , duration: 0.4 , ease:'easeIn'}}}
      className="w-[298px] h-[350px] xl:w-[400px] xl:h-[498px] mix-blend-lighten rounded-[100px]">
        <Image
        src="/assets/beshir.jpg"
        priority
        quality={100}
        fill
        alt="photo"
        className="rounded-4xl  brightness-50 "
        />
      </motion.div>
      </motion.dev>
    </div>
  )
}

export default Photo
