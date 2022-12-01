import { useState } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { motion } from 'framer-motion'


function Contact() {

    const { register, handleSubmit, errors, reset } = useForm();

    async function onSubmitForm(values) {
        let config = {
          method: 'post',
          url: `/api/contact`, // `${process.env.NEXT_PUBLIC_API_URL}/api/contact` ||
          headers: {
            'Content-Type': 'application/json',
          },
          data: values,
        };
    
        try {
          const response = await axios(config);
          console.log(response);
          if (response.status == 200) {
            reset();
          }
        } catch (err) {}
      }

  return (
    <>
        <div className="h-screen lg:grid grid-rows-4 grid-cols-2">
            {/* Left */}
            <div className="py-24 md:h-auto row-span-4 bg-gradient-to-r from-[#2C3E50] to-[#28313B] flex items-center justify-center">
                <div className="mx-10 md:mx-36 lg:mx-52 w-full">
                    <h1 className="text-2xl font-medium mb-4 text-white">Write Us</h1>
                    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-2">
                        <label htmlFor="name" className="text-text-primary block mb-2 font-semibold"></label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: true, message: 'You must enter your name' })}
                            className="w-full pb-2 border-b-2 border-white/50 bg-transparent text-white focus:outline-0 placeholder-gray-400 pt-4"
                        />
                        <span>{errors?.name?.message}</span>
                        <label htmlFor="email" className="text-text-primary block mb-2 font-semibold"></label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register('email', { 
                                required: {value: true, message: 'You must enter your email address' },
                                minLength: {value: 5, message: 'You must enter a valid email address' },
                                maxLength: {value: 254, message: 'You must enter a valid email address' },})}
                            className="w-full pb-2 border-b-2 border-white/50 bg-transparent text-white focus:outline-0 placeholder-gray-400 pt-4"
                        />
                        <span>{errors?.email?.message}</span>
                        <label htmlFor="subject" className="text-text-primary block mb-2 font-semibold"></label>
                        <input
                            id="subject"
                            type="subject"
                            placeholder="Subject"
                            {...register('email', { 
                                required: {value: true, message: 'You must enter your email address' },
                                minLength: {value: 5, message: 'You must enter a valid email address' },
                                maxLength: {value: 254, message: 'You must enter a valid email address' },})}
                            className="w-full pb-2 border-b-2 border-white/50 bg-transparent text-white focus:outline-0 placeholder-gray-400 pt-4"
                        />
                        <span>{errors?.subject?.message}</span>
                        <label htmlFor="message" className="text-text-primary block mb-2 font-semibold"></label>
                        <textarea
                            id="message"
                            type="text"
                            placeholder="Message"
                            {...register('Message', { 
                                required: {value: true, message: 'You must enter a message' },
                                maxLength: {value: 1000, message: 'Your message cannot exceed 1000 characters' }})}
                            rows="6"
                            className="w-full pb-2 border-b-2 border-white/50 bg-transparent text-white focus:outline-0 placeholder-gray-400 pt-4"
                        />
                        <span>{errors?.message?.message}</span>
                        <motion.button type="submit" className="px-3 py-3 rounded bg-theme text-white font-semibold mt-12 flex items-center space-x-3 hover:text-gray-700 group hover:bg-white"
                            whileHover={{ scale: 1.05 }}
                            >
                            <svg className="fill-white group-hover:fill-gray-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>								
                            <span><a>Send Message</a></span>
                        </motion.button>
                    </form>
                </div>
            </div>
            {/* Right Top*/}
            <div className="py-24 md:h-auto row-span-2 flex items-center justify-center bg-[#1d1e23]">
                <div className="mx-10 space-y-4">
                    <h1 className="text-2xl font-medium text-white">Contact Information</h1>
                    <h2 className="text-gray-400 pb-6">Got a question? We&apos;d love to hear from you.</h2>
                    <div className="space-y-4">
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/5755+Coopers+Ave,+Mississauga,+ON+L4Z+1R9/data=!4m2!3m1!1s0x882b3f50cb7bbfa9:0x496b52a7654f7722?sa=X&ved=2ahUKEwick96pzNf7AhWnlIkEHScuDVMQ8gF6BAgWEAE" className="flex flex-nowrap items-center space-x-4 group">
                            <svg className="flex-none fill-white border-2 rounded-2xl p-2 group-hover:fill-theme group-hover:border-theme" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                            <h3 className="text-base font-normal leading-7 text-gray-400 "><span className="font-semibold text-white group-hover:text-theme">Address: </span>5755 Coopers Ave, Mississauga, ON L4Z 1R9</h3>
                        </a>
                        <a href="tel:9055688338" className="flex flex-nowrap items-center space-x-4 group">
                            <svg className="flex-none fill-white border-2 rounded-2xl p-2 group-hover:fill-theme group-hover:border-theme" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
                            <h3 className="text-base font-normal leading-7 text-gray-400"><span className="font-semibold text-white group-hover:text-theme">Phone: </span>905-568-8338</h3>
                        </a>
                        <a href="mailto:info@pcmcpa.ca" className="flex flex-nowrap items-center space-x-4 group">
                            <svg className="flex-none fill-white border-2 rounded-2xl p-2 group-hover:fill-theme group-hover:border-theme" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>								
                            <h3 className="text-base font-normal leading-7 text-gray-400"><span className="font-semibold text-white group-hover:text-theme">Email: </span>info@pcmcpa.ca</h3>
                        </a>
                    </div>
                </div>
            </div>
            {/* Right Bottom*/}
            <div className="h-1/2 lg:h-full row-span-2 bg-gradient-to-r from-green-200 to-emerald-500 flex items-center justify-center">
                <iframe className="" width="100%" height="100%" loading="lazy" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.7682858691787!2d-79.66191598450291!3d43.63218147912201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f50cb7bbfa9%3A0x496b52a7654f7722!2s5755%20Coopers%20Ave%2C%20Mississauga%2C%20ON%20L4Z%201R9!5e0!3m2!1sen!2sca!4v1646604554144!5m2!1sen!2sca"></iframe>
            </div>
        </div>
    </>
  )
}

export default Contact