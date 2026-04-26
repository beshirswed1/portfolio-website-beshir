import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaTiktok, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Social = () => {
  const socials = [
    { icon: <FaLinkedinIn />, path: "linkedin.com/in/beshir-swed-781b86365" },
    { icon: <FaGithub />, path: "https://github.com/beshirswed1" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=61565237137777" },
    { icon: <FaYoutube />, path: "https://www.youtube.com/@BeshirSwed" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/ollx.b27/" },
  ]
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => {
        return (
          <Link key={index} target="_blank" rel="noopener noreferrer" href={item.path} className="w-9 h-9 border border-sky-300 rounded-full flex justify-center items-center text-sky-300 text-base hover:bg-sky-300 hover:text-black hover:transition-all duration-500">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
