"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiBriefcase, FiLayers, FiMail } from "react-icons/fi";

const Links = [
  { name: 'Home', path: '/', icon: <FiHome /> },
  { name: 'services', path: '/services', icon: <FiLayers /> },
  { name: 'resume', path: '/resume', icon: <FiUser /> },
  { name: 'work', path: '/work', icon: <FiBriefcase /> },
  { name: 'contact', path: '/contact', icon: <FiMail /> }
];

const Nav = () => {
  const pathname = usePathname();
  
  return (
    <nav className='flex gap-8'>
      {Links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link 
            href={link.path} 
            key={index} 
            className="relative capitalize font-medium transition-all group flex items-center gap-2"
          >
            <span className={`text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${isActive ? "text-sky-300" : "text-white/60 group-hover:text-sky-300"}`}>
              {link.icon}
            </span>
            <span className={`${isActive ? "text-sky-300" : "text-white/70 group-hover:text-sky-300 transition-colors duration-300"}`}>
              {link.name}
            </span>
            {isActive && (
              <motion.div
                layoutId="navIndicator"
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-sky-300"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {!isActive && (
              <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sky-300/50 transition-all duration-300 group-hover:w-full" />
            )}
          </Link>
        )
      })}    
    </nav>
  )
}

export default Nav;
