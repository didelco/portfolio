"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Line from "@/components/line";
import SwitchTheme from "@/components/themeSwitch";

export default function Header() {
  const pathname = usePathname();
  const rutas = pathname.split("/").slice(1);
  const [selected, setSelected] = useState(rutas[0]);

  useEffect(() => {
    const name = pathname.split("/").slice(1)[0] == "" ? "home" : pathname.split("/").slice(1)[0];
    setSelected(name);
  }, [pathname]);
  console.log(selected);
  const menu = [
    { name: "HOME", url: "/" },
    { name: "WORK", url: "/work" },
    { name: "ABOUT", url: "/about" },
  ];
  return (
    <div className='my-4'>
      <Line delay={1} b={true} />
      <div className=' my-2 md:my-4 flex justify-between items-center'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} className=' hidden sm:block text-2xl w-full'>
          CDDC
        </motion.div>
        <ul className='flex gap-4 sm:gap-8 md:gap-16 w-full justify-start sm:justify-center'>
          {menu.map((item, i) => (
            <li key={item.name} className={`relative cursor-pointer `}>
              <Link
                href={item.url}
                onClick={() => setSelected(item.name)}
                className={` h-10 flex items-center text-md md:text-lg ${rutas[0] == item.url.slice(1) ? "font-semibold text-primary" : "font-light"}`}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 + 0.2 * i }}>
                  {item.name}
                </motion.div>
              </Link>
              {item.name === selected ? (
                <>
                  <motion.div className='w-full absolute h-1  bg-neutral' transition={{ duration: 0.8, ease: "anticipate" }} layoutId='underline' />
                </>
              ) : null}
            </li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className='w-full flex justify-end items-center mr-2'>
          <SwitchTheme />
        </motion.div>
      </div>
    </div>
  );
}
