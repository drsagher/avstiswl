import Image from 'next/image'
import Link from 'next/link'
import logo from '..//public/img/logo.png'

export default function Footer() {
  return (
    <>
 <section id="contact" className='px-36 py-5 max-2xl:px-24 max-xl:px-20 max-lg:px-12 max-sm:px-6 mt-36 max-lg:mt-28 max-sm:mt-16 bg-blue-400'>
      <div className='flex justify-around  max-lg:block'>
      <div className='max-lg:flex items-center justify-center'>
        <Image src={logo} alt='' width="100"/>
      </div>

      <div className='max-lg:flex items-center justify-center  max-lg:text-center'>
      <div className='mt-5'>
        <h1 className='text-2xl uppercase font-bold text-white'>quick link</h1>
        <div className='mt-1'>
       <Link href="#hero" className='uppercase text-sm font-medium hover:text-blue-500 block text-white leading-10'>Introduction</Link>
       <Link href="#skills" className='uppercase text-sm font-medium hover:text-blue-500 block text-white leading-10'>Skills</Link>
       <Link href="#contact" className='uppercase text-sm font-medium hover:text-blue-500 block text-white leading-10'>Contact</Link>
      </div>
      </div>
      </div>

      <div className='max-lg:flex items-center justify-center max-lg:text-center'>
      <div className='mt-5'>
        <h1 className='text-2xl font-bold text-white'>Course</h1>
        <div className='mt-1'>
       <Link href="#skills" className=' text-sm font-medium hover:text-blue-500 block text-white leading-10'>•	Sewing and Embroidery</Link>
       <Link href="#skills" className=' text-sm font-medium hover:text-blue-500 block text-white leading-10'>•	Beautician</Link>
       <Link href="#skills" className=' text-sm font-medium hover:text-blue-500 block text-white leading-10'>•	Computer Science & IT</Link>
       <Link href="#skills" className=' text-sm font-medium hover:text-blue-500 block text-white leading-10'>•	Freelance  </Link>
      </div>
      </div>
      </div>
      
      <div className='max-lg:flex items-center justify-center max-lg:text-center mt-5'>
      <div>
        <h1 className='text-2xl uppercase font-bold text-white'>REQUEST SERVICE</h1>
        <div className='mt-3'>
        <h1 className='text-white text-md font-bold '>Location</h1>
        <p className='text-white font-medium  leading-10'>Kameer Town, District Sahiwal, Punjab, Pakistan. PC 57130</p>
        </div>

        <div className='mt-3'>
        <h1 className='text-white text-md font-bold'>Mobile</h1>
        <p className='text-white font-medium uppercase'>+92 300 869 4039</p>
        </div>

        <div className='mt-3'>
        <h1 className='text-white text-md font-bold uppercase'>Email</h1>
        <p className='text-white font-medium'>avstiskills@gmail.com</p>
        </div>
      </div>
      </div>
      </div>
      <div className='flex items-center justify-center py-2 mt-5'>
        <p className='text-sm text-white font-medium uppercase max-lg:text-center'>&copy;AVSTI&reg;-All rights reserved-2023</p>
      </div>
    </section>
    </>
)
}