import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full mt-10 sm:mt-0 px-5">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* النصوص والمحتوى */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-gray-400">Front-End Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-emerald-500">Beshir-swed</span>
            </h1>

            <p className="max-w-[550px] mb-6 text-gray-300">
              I’m Bashir, a passionate Front-End Developer dedicated to crafting sleek, responsive, and high-performing web interfaces. 
              I specialize in React and Next.js, building modern digital experiences that blend beauty with speed. 
              With a focus on clean code and user-centric design, I turn ideas into powerful, scalable web solutions. 
              My mission is simple — create web products that not only look stunning but perform flawlessly.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* زر تحميل السيرة الذاتية */}
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                asChild
              >
                <a href="/assets/beshir-cv.pdf" download>
                  <span>Download CV</span>
                  <FiDownload className="text-lg" />
                </a>
              </Button>

              {/* روابط التواصل */}
              <div className="flex mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>

          {/* الصورة */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* الإحصائيات */}
      <Stats />
    </section>
  );
}
