'use client'
import { Button } from "@/components/ui/button"
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
const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{opacity: 1,
      transition: {delay:2.4 , duration: 0.4, ease:'easeIn'} }}
      className="p-6"
    >
      <div className="container flex justify-center rounded-4xl">
        <div className="flex flex-col xl:flex-row gap-[100px]">
          <div className="order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rotate-xl">
              <h3 className="text-4xl text-emerald-500">Let's work together</h3>
              <p className="text-white/60">

              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a servisce"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a services</SelectLabel>
                    <SelectItem value='Front-End'>Front-End</SelectItem>
                    <SelectItem value='Instructor'>Instructor</SelectItem>
                    <SelectItem value='SEO'>SEO</SelectItem>
                    <SelectItem value='Mentorship'>Mentorship</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea 
                placeholder="Type your Message here."
                className="h-[200px]"
              />
              <Button size='md' className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>


          <div className="flex-1 flex items-center  order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((itme , index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-emerald-500 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{itme.icon}</div>
                    </div>
                    <div>
                      <p>{itme.title}</p>
                      <h3>{itme.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default contact
