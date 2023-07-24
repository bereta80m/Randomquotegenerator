import Image from 'next/image'
import MyQuote from './components/MyQuote'

export default function Home() {
  return (
    <div className='w-full grid place-items-center '>
      <MyQuote />
    </div>
  )
}
