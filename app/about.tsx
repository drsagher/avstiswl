import Image from 'next/image'
import t1 from '..//public/img/t1.jpg'
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
export default function About() {
  return (
    <>
    <section id='about' className='flex lg:flex-col justify-center items-center py-24 bg-gray-200 mt-14'>
<div className="flex">
  <div className='flex flex-col justify-center items-center px-14'>
    <h2 className='text-3xl text-blue-600 py-2'>Chief Executive Officer</h2>
    <h2 className='text-3xl font-bold pb-8'>Muhammad Jafar Bhatti</h2>
    <Popover>
      <PopoverContent className="flex w-96">
        <p className="text-sm font-sm">
          The activity of social work took a revolutionary start in Pakistan in the start of September 2000. A group of volunteers set forth to transform the socio-economic conditions of venerable people of Pakistan and vicinities with collaboration of community. The AVSTI was funded by group of devoted personalities amongst the middle-class community.
          The AVSTI is a community development training institute working in rural areas of Pakistan. AVSTI was established in 2000 when a group of volunteers set forth to transform the socio-economic conditions of the population of the Pakistan and Vicinities in collaboration with community. The institute to create a better relationship with various international donors and charity personalities and international NGOs. AVSTI is working to reach every person in the community according to their living circumstances and nature of the socio-economic structure. AVSTI is of the view, since the time of its inception, that less income is not the only cause of poverty. In community illiteracy, especially in women, unawareness if human right, lack of opportunities and adoption of unhealthy old traditions are collectively devasting the social fabric day by day. In such and alarming conditions AVSTI is organizing its efforts to bring a revolutionary change in the socio-economic structure of the Pakistan.
          I am fully confident that with sincere and active participation of the employees, employees and volunteers of the organization in the implementation of the planned activities of AVSTI would be able to achieve its targets during the year`s 2023-24.
          I also take this opportunity to commend the hard work putting by the AVSTI staff and express my appreciations for the continuous support and contribution of all AVSTI national and international charities organization, which have worked in association with AVSTI Pakistan.
        </p>
      </PopoverContent>
      <PopoverTrigger>
        <button className='bg-blue-500 w-36 h-10 rounded-md text-white uppercase hover:bg-blue-600'>CEO Message</button>
      </PopoverTrigger>
    </Popover>
  </div>
  <div>
    <Image src={t1} alt='' height={350} className='rounded-xl border-4 border-white shadow-xl max-lg:flex items-center justify-center max-lg:mt-10'/>
  </div>
</div>

    </section>
    </>
)
}