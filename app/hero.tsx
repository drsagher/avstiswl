import Image from 'next/image'
import hero from '/public/img/avsti.png'
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
export default function Hero() {
  return (
    <>
     <section id='hero' className='flex items-center justify-center max-lg:block text-center mt-20 round'>
    <div className='max-sm:px-6 max-xl:px-20  max-2xl:px-24 max-lg:text-center'>
      <h1 className='max-2xl:text-xl text-3xl uppercase font-bold leading-normal'>
          Allied Vocational Skills Training Institute&reg;
      </h1>
          <p className='max-2xl:text-sm text-lg font-medium uppercase my-5 text-gray-500'>Centre for empowerment and development of bounded women</p>
        <Popover>
            <PopoverTrigger>
                <button className='bg-blue-500 w-36 h-10 rounded-md text-white uppercase hover:bg-blue-600'>About AVSTI&reg;</button>
            </PopoverTrigger>
            <PopoverContent className="flex w-96">
            <p className="text-sm font-sm">
                Allied Vocational Skills Training Institute (AVSTI) is a community development Institute working in Punjab, Pakistan. AVSTI was established in 1990s when a group of volunteers set forth to transform the socio-economic conditions of the population of the country and vicinities in collaboration with community. The institute got registered from Registration Authorities in Pakistan and Sahiwal Chamber of Commerce and Industry in district Sahiwal, Registration No. 3188 to legalize the entire working and to create a be􀁅er relationship with various international NGOs and GOs. AVSTI is working to reach every person in the community according to their living circumstances and skills trainings of the socio-economic structure. AVSTI is of the view, since the 􀀱me of its inception, that less income is not the only cause of poverty. In community illiteracy, especially in women, unawareness of human rights, lack of opportunities and adoption of unhealthy old traditions are collectively devastating the social fabric day by day. In such an alarming conditions AVSTI is organizing its efforts to bring a revolutionary change in the seriocomic structure of the areas.
            </p>
            </PopoverContent>
        </Popover>
    </div>

    </section>
        <div className='flex justify-center max-sm:px-6 max-xl:px-20  max-2xl:px-24 max-lg:text-center mt-8'>
            <Image src={hero} alt='hero' className='max-lg:flex items-center justify-end max-lg:mt-10 max-lg:w-full' width={800} height={600}/>
        </div>
    </>
)
}