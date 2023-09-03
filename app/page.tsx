import Hero from './hero'
import Service from './service'
import About from './about'
import Footer from './footer'
import Image from "next/image";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Home() {
  return (
    <>
    <head>
      <title>AVSTI&reg;</title>
    </head>
    <div id="header"className="">
      <header className='flex items-center justify-between px-36 py-5 max-2xl:px-24 max-xl:px-20 max-lg:px-12 max-sm:px-6 bg-gray-300'>
        <div>
          <Image src={logo} alt='logo' width="72" height="72"/>
        </div>
        <nav className='flex items-center'>
          <div className='max-lg:hidden '>
            <Link href="#hero" className=' text-md px-5 hover:text-green-500 text-blue-500'>Introduction</Link>
            <Link href="#skills" className=' text-md font-medium px-5 hover:text-green-500 text-blue-500'>Skills</Link>
            <Link href="#contact" className=' text-md font-medium px-5 hover:text-green-500 text-blue-500'>Contact</Link>
          </div>
          <Popover>
            <PopoverTrigger>
              <button className="text-white rounded-xl bg-red-600 px-4 py-2 hover:bg-green-500">Donate</button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-4 items-center">
                <h2 className="text-xl">Donation Now</h2>
                <div className="flex-col items-start">
                  <p className="bg-blue-200 font-bold">Name of Bank: Allied Bank Limited</p>
                  <p>Bank Address: Adda Kameer Town District Sahiwal, Punjab, Pakistan</p>
                  <p>Title: Allied Vocational Skills Training Institute®</p>
                  <p>Account Number: PK64ABPA0010091649900018</p>
                  <p>SWIFT Code: ABPAPKKA</p>
                </div>
                <div className="flex-col items-start justify-start">
                  <h2 className="bg-blue-200 font-bold">Payonerr Bank Detail</h2>
                  <p>Bank Detail: USA XX-7066</p>
                  <p>Bank Name: Citibank</p>
                  <p>Address: 111 Wall Street New York, NY 10043 USA</p>
                  <p>Swift Code: CITIUS33</p>
                  <p>ACCOUNT NUMBER: 70587950000307066</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          </nav>
      </header>
      <Hero/>
      <Service/>
      <About/>
      <Footer/>
    </div>
    </>
  )
}
