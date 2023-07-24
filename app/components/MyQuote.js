"use client";
import React from "react";
import { UseGlobal } from "../context/GlobalContext";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "800",
});
function MyQuote() {
  const { allQuotes, randomQuote } = UseGlobal();
  //console.log(randomQuote);
  return (
    <AnimatePresence>
      <div className="grid place-items-center w-full h-[90vh]">
        
        <div className="lg:w-1/3 md:w-1/3  border-l-8 border-[#f7df94] lg:pl-16 md:pl-16 sm:px-10 xs:px-20 xxs:px-20">
          <p className={ `${raleway.className} lg:text-3xl md:text-2xl sm:text-xl xs:text-lg`}>
            "{randomQuote.quoteText}"
          </p>
        </div>
        <div className="grid place-items-center w-full">
        <Link
                href={`/${randomQuote._id}`}
                className={`${raleway.className}   flex items-center lg:px-5 md:px-5 justify-between w-1/3 lg:pl-8 md:pl-8 text-black/75 cursor-pointer hover:bg-[#333333] py-5 hover:text-white`}
            
          >
            <motion.div 
            initial={{opacity:1,x:100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0, x:'100%'}}
            whileTap={{opacity:0,x:"100%"}}
             className="">
                <motion.p  className="font-bold text-xl">{randomQuote.quoteAuthor}</motion.p>
                
             
              <motion.p  className="text-sm font-normal text-gray-400">{randomQuote.quoteGenre}</motion.p>
            </motion.div>
            <div>
              <FaLongArrowAltRight className="text-2xl text-white hover:to-black" />
            </div>
            </Link>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default MyQuote;


















/*
"use client";
import React from "react";
import { UseGlobal } from "../context/GlobalContext";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "800",
});
function MyQuote() {
  const { allQuotes, randomQuote } = UseGlobal();
  //console.log(randomQuote);
  return (
    <AnimatePresence>
      <div className="grid place-items-center w-full h-[90vh]">
        <div className="w-1/3 border-l-8 border-[#f7df94] pl-16">
          <p className="text-3xl font-semibold font-serif">
            "{randomQuote.quoteText}"
          </p>
        </div>
        <div className="grid place-items-center w-full">
          <motion.div
            initial={{ opacity: 1, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{opacity: 0}}
            exit={{ opacity: 0, x: -100 }}
            className="flex items-center px-5 justify-between w-1/3 pl-8 text-black/75 cursor-pointer hover:bg-[#333333] py-5 hover:text-white"
          >
            <motion.div className="">
              <Link
                href={`/${randomQuote._id}`}
                className={`${raleway.className} font-bold text-xl  `}
              >
                {randomQuote.quoteAuthor}
              </Link>
              <p className="text-gray-400">{randomQuote.quoteGenre}</p>
            </motion.div>
            <div>
              <FaLongArrowAltRight className="text-2xl text-white hover:to-black" />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default MyQuote;


*/