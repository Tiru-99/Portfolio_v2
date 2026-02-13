import { SiGithub, SiLinkedin , SiX } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
export default function Socials(){
  return(
    <>
      <div className="mt-3 flex items-center gap-4 text-white/70">
        <a
          href="https://github.com/tiru-99"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
          aria-label="GitHub"
        >
          <SiGithub className="w-5 h-5" />
        </a>
      
        <a
          href="https://www.linkedin.com/in/aayush-tirmanwar-b81a62261/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
          aria-label="LinkedIn"
        >
          <SiLinkedin className="w-5 h-5" />
        </a>
        
        <a
          href="https://x.com/tiru299"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
          aria-label=""
        >
          <SiX className="w-5 h-5" />
        </a>
      
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsttFtppvfLSjCnFjRqdGQdDhVpDXcfcjgDftMKTpkbTcJGsmTTwFrJRvfMzsZWnBhPjsXDQ"
          className="hover:text-white transition"
          aria-label="Email"
        >
          <MdOutlineEmail className="w-5 h-5" />
        </a>
      </div>

    </>
  )  
}