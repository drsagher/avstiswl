import Image from 'next/image'

export default function Service() {
  return (
    <div id="skills" className="">
      <h2 className="flex items-center justify-center text-center mt-28 text-3xl font-extrabold">Traditional Skills</h2>
      <div className="flex px-28">
        <div className="flex flex-col w-1/2 p-2 bg-white items-center justify-start text-center mr-28">
          <h1 className="text-xl font-bold p-4">Sewing and Embroidery</h1>
          <p>
            Sewing and embroidery are two related but distinct skills that
            involve working with fabric and thread to create various types of
            designs and garments. Sewing involves joining fabric pieces
            together using a needle and thread or a sewing machine to create
            items such as clothing, bags, and accessories. Embroidery, on the
            other hand, involves decorating fabric with designs or patterns
            using various types of stitches and threads.
          </p>
        </div>

        <div className="flex flex-col w-1/2 p-2 bg-white items-center justify-start text-center">
          <h1 className="text-xl font-bold p-4">Beautician</h1>
          <p>
            Beautician courses are designed to teach students the skills and
            knowledge required to work in the beauty industry. These courses
            cover a wide range of topics related to beauty treatments,
            including skincare, makeup application, hair care, nail care, and
            body treatments.Beautician courses are available at many
            institutions, including beauty schools, vocational schools, and
            online platforms. They can be a great way to gain new skills or
            improve your existing skills in the field of beauty and skincare.
            Graduates of beautician courses can go on to work in a variety of
            settings, including salons, spas, and beauty clinics.
          </p>
        </div>
      </div>

      <h2 className="flex items-center justify-center text-center text-3xl font-extrabold">Global Skills</h2>
      <div className="flex px-28">
      <div className="flex flex-col w-1/2 p-2 bg-white items-center justify-start text-center mr-28">
        <h1 className="text-xl font-bold p-4">Computer Science & IT</h1>
        <p>
          CS (Computer Science) and IT (Information Technology) courses are
          designed to teach students about computers, software, and
          information systems. These courses cover a wide range of topics
          such as programming languages, web development, database
          management, networking and security, and operating systems. CS and
          IT courses are available at many institutions, and can help
          individuals gain new skills or improve their existing skills in
          the field of computer science and information technology.
        </p>
      </div>
      <div className="flex flex-col w-1/2 p-2 bg-white items-center justify-start text-center">
        <h1 className="text-xl font-bold p-4">Freelance</h1>
        <p>
          Freelance skills are abilities that are in demand in the growing
          gig economy, where professionals work as independent contractors
          or freelancers rather than traditional employees. Freelancers
          typically work on a project-by-project basis, and may have
          multiple clients at any given time.These are just a few examples
          of freelance skills. Freelance professionals can work in a variety
          of industries and fields, and can often set their own rates and
          schedules. Successful freelancers often have strong communication
          and time management skills, as well as the ability to market
          themselves effectively to potential clients.
        </p>
      </div>
    </div>

    </div>
)
}