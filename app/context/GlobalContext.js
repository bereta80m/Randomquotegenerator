"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({});

function GlobalProvider({ children }) {
    const [allQuotes, setAllQuotes] = useState([])
    const [randomQuote, setRandomQuote] = useState([])
    const GetMyQuotes =async ()=>{
        try {
            const {data} = await axios.get("http://localhost:3000/api/GetQuotes")
            const ListRandom = Math.floor(Math.random() * data.data.length)
            setAllQuotes(data.data)
            setRandomQuote(data.data[ListRandom])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetMyQuotes()
    }, [])
  return (
    <GlobalContext.Provider value={{ allQuotes,randomQuote,GetMyQuotes }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;

export const UseGlobal = () => useContext(GlobalContext);
