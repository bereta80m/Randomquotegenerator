"use client";
import React from "react";
import { UseGlobal } from "../context/GlobalContext";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ["latin"],
    weight: "800",
  });
function Quotes({ params }) {
  const { Quote } = params;
  const { allQuotes } = UseGlobal();
  const FindDoc = allQuotes.find((item) => item._id === Quote);
  const FiltroAll = allQuotes?.filter(
    (item) => item.quoteAuthor === FindDoc.quoteAuthor
  );

  return (
    <div className={`${raleway.className} grid place-items-center w-full h-[90vh] gap-10 overflow-auto`}>
        <div className="lg:w-1/3 md:w-1/3 lg:pl-16 md:pl-16">
        <p className="font-bold text-xl pl-2">{FindDoc?.quoteAuthor}</p>
        </div>
      {FiltroAll.map((item) => {
        return (
          <div className="lg:w-1/3 md:w-1/3  border-l-8 border-[#f7df94] lg:pl-16 md:pl-16 sm:px-10 xs:px-20 xxs:px-20">
            <p className="text-2xl font-semibold font-serif">
              "{item.quoteText}"
            </p>
          </div>
        );
      })}
      Quotes
    </div>
  );
}

export default Quotes;
