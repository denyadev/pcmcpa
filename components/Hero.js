import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function Hero() {
  return (
    <>
        <div className="bg-bg h-screen bg-cover lg:bg-bottom">
            <div div className="bg-black/70 h-full w-full flex items-center justify-center">
                <motion.div className="xl:w-1/2 text-center space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    <motion.h1 className="md:mx-12 text-3xl md:text-5xl xl:text-6xl font-bold text-white tracking-wide"
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                    >PCM Chartered Professional Accountant</motion.h1>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0}}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}>
                        <h3 className="md:mx-12 text-lg md:text-xl xl:text-2xl font-base text-gray-200 tracking-tight italic">Professional Corporation</h3>
                        <h2 className="mx-10 md:mx-32 text-base md:text-lg xl:text-xl text-gray-300 tracking-wider mt-6">To help you manage and grow your business.</h2>
                        <Link to="services" spy={true} smooth={true} duration={500}>
                            <motion.button type="submit" className="m-auto px-3 py-3 rounded bg-theme text-white font-semibold mt-12 flex items-center space-x-3 hover:text-gray-700 group hover:bg-white"
                                whileHover={ { scale: 1.1 } }
                                >
                                    <svg className="fill-white group-hover:fill-gray-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>								
                                    <span>View Services</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Hero