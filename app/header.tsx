import Image from 'next/image'
import Link from 'next/link'
import logo from '..//public/img/logo.png'
export default function Header() {
  return (
    <>
    <header className='flex items-center justify-between px-36 py-5 max-2xl:px-24 max-xl:px-20 max-lg:px-12 max-sm:px-6 bg-gray-300'>
      <div>
    <Image src={logo} alt='' width="72" />
      </div>
      <nav className='flex items-center'>
        <div className='max-lg:hidden '>
       <Link href="" className=' text-md px-5 hover:text-green-500 text-blue-500'>Introduction</Link>
       <Link href="" className=' text-md font-medium px-5 hover:text-green-500 text-blue-500'>Skills</Link>
       <Link href="" className=' text-md font-medium px-5 hover:text-green-500 text-blue-500'>Contact</Link>
       </div>
      </nav>
    </header>
    </>
)
}