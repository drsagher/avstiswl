import Image from 'next/image'

export default function Service() {
  return (
    <div id="skills" className="">
      <h2 className="text-xl font-bold text-center mt-24 mb-8">Traditional Skills</h2>
      <div className=" flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-auto px-20">
          <h1 className="text-xl">Sewing and Embroidery</h1>
          <p className="text-center">
            Sewing and embroidery are two related but distinct skills that
            involve working with fabric and thread to create various types of
            designs and garments. Sewing involves joining fabric pieces
            together using a needle and thread or a sewing machine to create
            items such as clothing, bags, and accessories. Embroidery, on the
            other hand, involves decorating fabric with designs or patterns
            using various types of stitches and threads.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-auto px-20 py-4">
          <h1 className="text-xl">Beautician</h1>
          <p className="text-center">
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

      <h2 className="text-xl font-bold text-center mt-24 mb-8">Global Skills</h2>
      <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl">Computer Science & IT</h1>
        <p className="text-center">
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
      <div className="flex flex-col justify-center items-center py-4">
        <h1 className="text-xl">Freelance</h1>
        <p className="text-center">
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