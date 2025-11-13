import Link  from "next/link"
import { FaGithub , FaLinkedinIn , FaTiktok , FaFacebook , FaInstagram} from "react-icons/fa";
const Social = () => {
    const socials = [
        {icon : <FaLinkedinIn/> , path: "linkedin.com/in/beshir-swed-781b86365" },
        {icon : <FaGithub/> , path: "https://github.com/beshirswed1" },
        {icon : <FaFacebook/> , path: "https://www.facebook.com/profile.php?id=100049305971841" },
        {icon : <FaInstagram/> , path: "https://www.instagram.com/ollx.b27/" },
    ]
  return (
    <div className="flex gap-6">
      {socials.map((item , index) => {
        return (
          <Link key={index} href={item.path} className="w-9 h-9 border border-emerald-500 rounded-full flex justify-center items-center text-emerald-500 text-base hover:bg-emerald-500 hover:text-black hover:transition-all duration-500">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
