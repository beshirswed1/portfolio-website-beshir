'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';
import GoogleTranslate from './GoogleTranslate';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'top-4 px-4' : 'top-0'}`}
    >
      <div className={`container mx-auto flex justify-between items-center transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0A0A0A]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(125,211,252,0.1)] rounded-full py-3 px-8' 
          : 'py-8 px-5 bg-transparent'
      }`}>
        <Link href="/">
          <h1 className='text-3xl font-bold tracking-tighter group flex items-center gap-1'>
            Bashir<span className='text-sky-300 group-hover:animate-bounce'>.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <GoogleTranslate />
          <Link href="/contact">
            <Button className="bg-sky-300 text-[#0A0A0A] hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 shadow-[0_0_15px_rgba(125,211,252,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] rounded-full px-6 font-semibold border-none">
              Hire me
            </Button>
          </Link>
        </div>
        <div className="xl:hidden flex items-center gap-4">
          <GoogleTranslate />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
