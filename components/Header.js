import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function Header() {

    const [navbar, setNavbar] = useState(false)
    const [open, setOpen] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 200) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
    }, [])

    const handleClick = () => setOpen(!open)

  return (
    <motion.header className={navbar ? 'header-active' : 'header'} 
        initial={{ y: -100, opacity: 0}}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.75, duration: 0.75 }}>
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="flex items-center justify-center space-x-4">
                <Image src={logo} alt="logo" width="50" height="50" />
                <a href="#" className="text-xl md:text-2xl font-bold text-text-primary tracking-wide">PCM CPA</a>
            </div>
            <div className="hidden xl:flex space-x-20 items-center text-text-primary">
                <Link activeClass="active" className="text-lg hover:text-theme font-bold tracking-widest cursor-pointer" to="home" spy={true} smooth={true} duration={500}>HOME</Link>
                <Link activeClass="active" className="text-lg hover:text-theme font-bold tracking-widest cursor-pointer" to="services" spy={true} smooth={true} duration={500}>SERVICES</Link>
                <Link activeClass="active" className="px-6 py-2 text-lg hover:text-theme font-bold tracking-widest cursor-pointer" to="contact" spy={true} smooth={true} duration={500}>CONTACT US</Link>
            </div>
            <div className="xl:hidden" onClick={handleClick}>
                <svg width="34" height="24" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
            </div>
        </div>
        { open &&             
            <div className="lg:hidden flex flex-col text-text-primary space-y-4 pt-6 mx-8 md:mx-14 text-right">
                <Link activeClass="active" className="text-base hover:text-theme font-bold tracking-widest cursor-pointer" to="home" spy={true} smooth={true} duration={500}>HOME</Link>
                <Link activeClass="active" className="text-base hover:text-theme font-bold tracking-widest cursor-pointer" to="services" spy={true} smooth={true} duration={500}>SERVICES</Link>
                <Link activeClass="active" className="text-base hover:text-theme font-bold tracking-widest cursor-pointer" to="contact" spy={true} smooth={true} duration={500}>CONTACT US</Link>
            </div>
        }
    </motion.header>
  )
}

export default Header