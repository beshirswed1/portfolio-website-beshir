"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const Links =[
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  }
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex gap-8'>
      {Links.map((link , index)=>{
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && "text-emerald-500 border-b-2 border-emerald-500"} 
          Capitalize font-medium hover:text-emerald-500 transition-all`}>
            {link.name}
          </Link>
        )
      })}    
    </nav>
  )
}

export default Nav
