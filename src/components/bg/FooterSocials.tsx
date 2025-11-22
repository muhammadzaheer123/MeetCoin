"use client";
import { motion, Variants } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const container: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, ease: "easeOut", duration: 0.5 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

const idleFloat = {
  y: [0, -4, 0, -2, 0],
  transition: {
    duration: 4.5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  },
};

const social = [
  {
    Icon: FaFacebookF,
    href: "https://facebook.com/yourpage",
    label: "Facebook",
  },
  {
    Icon: FaInstagram,
    href: "https://instagram.com/yourpage",
    label: "Instagram",
  },
  { Icon: FaXTwitter, href: "https://twitter.com/yourpage", label: "X" },
  {
    Icon: FaLinkedinIn,
    href: "https://linkedin.com/yourpage",
    label: "LinkedIn",
  },
  { Icon: FaYoutube, href: "https://youtube.com/yourpage", label: "YouTube" },
];

export default function FooterSocials() {
  return (
    <motion.div
      className="mt-8 flex items-center gap-3 sm:gap-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {social.map(({ Icon, href, label }, i) => (
        <motion.a
          key={`${label}-${i}`}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          whileHover={{
            rotateZ: [-6, 6, -3, 3, 0],
            scale: 1.06,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          whileTap={{ scale: 0.96 }}
          className="group grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur-sm hover:text-white"
        >
          <motion.span
            animate={{ y: [0, -4, 0, -2, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="grid place-items-center"
          >
            <Icon className="text-[14px]" />
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
}
