'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import emailjs from '@emailjs/browser';
import { Input } from "@/components/ui/input"
import { Textarea} from "@/components/ui/textarea"
import {Select , SelectContent , SelectGroup , SelectItem , SelectLabel , SelectTrigger , SelectValue} from "@/components/ui/select"
import { FaPhoneAlt , FaEnvelope , FaMapMarkedAlt} from 'react-icons/fa'
const info = [
  {
    icon:<FaPhoneAlt/>,
    title: "Phone",
    description: "+905377906230"
  },
  {
    icon:<FaEnvelope/>,
    title: "Email",
    description: "beshirswed07@gmail.com"
  },
  {
    icon:<FaMapMarkedAlt/>,
    title: "Address",
    description: "GaziAntep , Turkiye"
  }
]
import { motion } from "framer-motion"
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    // NOTE: You need to replace these with your actual EmailJS IDs
    const serviceID = "service_7iibel3"; 
    const templateID = "template_lz0hlq7"; 
    const publicKey = "xdFL4pMH2KB7VpuDh";

    const templateParams = {
      from_name: `${formData.firstname} ${formData.lastname}`,
      from_email: formData.email,
      phone: formData.phone,
      service_requested: formData.service,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage("Message sent successfully!");
        setFormData({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error);
        setStatusMessage("Failed to send the message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{opacity: 1, transition: {delay:2.4 , duration: 0.4, ease:'easeIn'} }}
      className="py-6 relative overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto flex justify-center rounded-4xl px-5">
        <div className="flex flex-col xl:flex-row gap-[100px] w-full">
          <motion.form 
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="order-2 xl:order-none xl:w-1/2 flex flex-col gap-6 p-10 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl relative group hover:bg-white/[0.04] hover:border-sky-300/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            
            <motion.h3 variants={itemVariants} className="text-4xl text-sky-300 font-bold">Let's work together</motion.h3>
            <motion.p variants={itemVariants} className="text-white/60 leading-relaxed">
              I am available for freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <Input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Firstname" required />
              <Input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Lastname" required />
              <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
              <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Select onValueChange={handleSelectChange} value={formData.service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='Front-End'>Front-End Development</SelectItem>
                    <SelectItem value='Instructor'>Instructor</SelectItem>
                    <SelectItem value='SEO'>SEO Optimization</SelectItem>
                    <SelectItem value='Mentorship'>Mentorship</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here."
                className="h-[200px]"
                required
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <Button type="submit" size='md' disabled={isSubmitting} className="max-w-40 hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(125,211,252,0.4)] disabled:opacity-50">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {statusMessage && (
                <p className={`text-sm ${statusMessage.includes("success") ? "text-emerald-400" : "text-red-400"}`}>
                  {statusMessage}
                </p>
              )}
            </motion.div>
          </motion.form>


          <div className="flex-1 flex items-center order-1 xl:order-none mb-8 xl:mb-0">
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-10"
            >
              {info.map((item , index) => {
                return (
                  <motion.li variants={itemVariants} key={index} className="flex items-center gap-6 group">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-white/[0.02] backdrop-blur-md border border-white/5 text-sky-300 rounded-2xl flex items-center justify-center group-hover:bg-sky-300 group-hover:text-[#0A0A0A] group-hover:-rotate-12 transition-all duration-500 shadow-lg">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white/60 mb-1 group-hover:text-white/80 transition-all duration-300">{item.title}</p>
                      <h3 className="text-lg text-white group-hover:text-sky-300 transition-all duration-300">{item.description}</h3>
                    </div>
                  </motion.li>
                )
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default contact
