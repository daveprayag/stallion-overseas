import { motion } from "framer-motion";
import { AiOutlineWhatsApp } from "react-icons/ai";

export function FloatingButton() {
  return (
    <motion.button
      className="p-[3px] fixed bottom-4 right-4 lg:hidden z-30"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "backOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <a
        href="https://api.whatsapp.com/send?phone=+919979924241&text=Hello%20Stallion%20Overseas%2C%20I%20have%20a%20query%20regarding%20your%20services."
        target="_blank"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#67bf7f] to-[#4761ab] rounded-full" />
        <div className="p-3 items-center flex bg-zinc-950 rounded-full relative group transition duration-200 text-zinc-50 hover:bg-transparent">
          <AiOutlineWhatsApp className="h-[1.5rem] w-[1.5rem]" />
        </div>
      </a>
    </motion.button>
  );
}

export default FloatingButton;
