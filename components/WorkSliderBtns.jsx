"use client"
import { useSwiper } from "swiper/react"
import {PiCaretLeftBold , PiCaretRightBold} from "react-icons/pi";

const WorkSliderBtns = () => {
    const swiper = useSwiper();
  return (
    <div className="flex justify-center xl:justify-end gap-4 w-full xl:w-auto pointer-events-none">
      <button onClick={()=> swiper.slidePrev()} className="pointer-events-auto w-[55px] h-[55px] rounded-full bg-[#0A0A0A]/70 backdrop-blur-xl border border-white/10 hover:bg-sky-500 hover:border-sky-400 hover:text-[#0A0A0A] text-white flex justify-center items-center transition-all duration-500 hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)] group">
        <PiCaretLeftBold className="text-2xl group-hover:-translate-x-1 transition-transform duration-300" />
      </button>
      <button onClick={()=> swiper.slideNext()} className="pointer-events-auto w-[55px] h-[55px] rounded-full bg-[#0A0A0A]/70 backdrop-blur-xl border border-white/10 hover:bg-sky-500 hover:border-sky-400 hover:text-[#0A0A0A] text-white flex justify-center items-center transition-all duration-500 hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)] group">
        <PiCaretRightBold className="text-2xl group-hover:translate-x-1 transition-transform duration-300"/>
      </button>
    </div>
  )
}

export default WorkSliderBtns
