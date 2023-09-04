import Service from "@/app/service";
import About from "@/app/about";
import Footer from "@/app/footer";
import Image from "next/image";
import logo from "../public/img/logo.png";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import avsti from "../public/img/avsti.gif";

export default function Home() {
  return (
    <>
    <head>
      <title>AVSTI&reg;</title>
    </head>
    <div id="header">
      <header className='flex items-center justify-between px-36 py-5 max-2xl:px-24 max-xl:px-20 max-lg:px-12 max-sm:px-6 bg-gray-300'>
        <div>
          <Image src={logo} alt='logo' width="72" height="72"/>
        </div>
        <nav className='flex items-center'>
          <div className='max-lg:hidden '>
            <Link href="#hero-img" className=' text-md px-5 hover:text-green-500 text-blue-500'>Introduction</Link>
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

      {/*<Hero/>*/}
      <div>
        <section id='hero-img' className='flex items-center justify-center max-lg:block text-center mt-20 round'>
          <div className='max-sm:px-6 max-xl:px-20  max-2xl:px-24 max-lg:text-center'>
            <h1 className='max-2xl:text-xl text-3xl uppercase font-bold leading-normal'>
              Allied Vocational Skills Training Institute&reg;
            </h1>
            <p className='max-2xl:text-sm text-lg font-medium uppercase my-5 text-gray-500'>Centre for empowerment and development of bounded women</p>
            <Popover>
              <PopoverTrigger>
                <div className='bg-blue-500 w-36 h-10 rounded-md text-white uppercase hover:bg-blue-600'>About AVSTI&reg;</div>
              </PopoverTrigger>
              <PopoverContent className="flex w-96">
                <p className="text-sm font-sm">
                  Allied Vocational Skills Training Institute (AVSTI) is a community development Institute working in Punjab, Pakistan. AVSTI was established in 1990s when a group of volunteers set forth to transform the socio-economic conditions of the population of the country and vicinities in collaboration with community. The institute got registered from Registration Authorities in Pakistan and Sahiwal Chamber of Commerce and Industry in district Sahiwal, Registration No. 3188 to legalize the entire working and to create a better relationship with various international NGOs and GOs. AVSTI is working to reach every person in the community according to their living circumstances and skills trainings of the socio-economic structure. AVSTI is of the view, since the time of its inception, that less income is not the only cause of poverty. In community illiteracy, especially in women, unawareness of human rights, lack of opportunities and adoption of unhealthy old traditions are collectively devastating the social fabric day by day. In such an alarming conditions AVSTI is organizing its efforts to bring a revolutionary change in the seriocomic structure of the areas.
                </p>
              </PopoverContent>
            </Popover>
          </div>

        </section>
        <div className='flex justify-center max-sm:px-6 max-xl:px-20  max-2xl:px-24 max-lg:text-center mt-8'>
          <Image src={avsti} alt='hero' className='max-lg:flex items-center justify-end max-lg:mt-10 max-lg:w-full' width={800} height={600}/>
        </div>
      </div>
      {/*end hero*/}
      <Service/>
      <About/>
      <Footer/>
    </div>
    </>
  )
}
