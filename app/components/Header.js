"use client"
import React from 'react'
import {TfiReload} from "react-icons/tfi"
import { UseGlobal } from '../context/GlobalContext'
import Link from 'next/link'

function Header() {
  const {GetMyQuotes} = UseGlobal()

  return (
    <header className='flex w-full px-16 pt-5 justify-end items-center sticky top-0 '>
      <Link href={'/'} onClick={()=>GetMyQuotes()} className='flex items-center gap-3'>
        Random <TfiReload className=''/>
      </Link >
    </header>
  )
}

export default Header
