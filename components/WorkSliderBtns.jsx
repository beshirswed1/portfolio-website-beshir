"use client"
import { useSwiper } from "swiper/react"
import {PiCaretLeftBold , PiCaretRightBold} from "react-icons/pi";

const WorkSliderBtns = () => {
    const swiper = useSwiper();
  return (
    <div className="flex justify-end gap-4">
      <button onClick={()=> swiper.slidePrev()} className="bg-emerald-500 hover:bg-emerald-700 text-2xl w-[44px] h-[30px] flex justify-center items-center mt-2">
        <PiCaretLeftBold />
      </button>
      <button onClick={()=> swiper.slideNext()} className="bg-emerald-500 hover:bg-emerald-700 text-2xl w-[44px] h-[30px] flex justify-center items-center mt-2">
        <PiCaretRightBold/>
      </button>
    </div>
  )
}

export default WorkSliderBtns
