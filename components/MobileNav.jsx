"use client"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";
import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'; // Might need this for accessibility if available, but let's just use regular title for now

import { FiHome, FiUser, FiBriefcase, FiLayers, FiMail } from "react-icons/fi";

const Links =[
    { name: "home", path: "/", icon: <FiHome /> },
    { name: "services", path: "/services", icon: <FiLayers /> },
    { name: "resume", path: "/resume", icon: <FiUser /> },
    { name: "work", path: "/work", icon: <FiBriefcase /> },
    { name: "contact", path: "/contact", icon: <FiMail /> }
]

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center p-2 rounded-full hover:bg-white/10 transition-colors">
            <CiMenuFries className="text-[32px] text-sky-300"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-[#0A0A0A]/95 backdrop-blur-xl border-l border-white/10">
            {/* Adding DialogTitle to prevent Radix warning */}
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
            <div className='mt-32 mb-20 text-center text-2xl'>
                <Link href="/">
                    <h1 className='text-4xl font-bold tracking-tighter'>Bashir<span className='text-sky-300'>.</span></h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
              {Links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link 
                      href={link.path} 
                      key={index} 
                      className={`${isActive ? "text-sky-300 border-b-2 border-sky-300" : "text-white/70"} group flex items-center gap-3 text-xl capitalize hover:text-sky-300 transition-all duration-300`}
                    >
                        <span className={`text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${isActive ? "text-sky-300" : "text-white/50 group-hover:text-sky-300"}`}>
                          {link.icon}
                        </span>
                        {link.name}
                    </Link>
                )
              })}  
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
