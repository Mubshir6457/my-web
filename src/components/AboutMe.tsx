import Image from 'next/image'

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/my-pic1.jpg"
              alt="M. Mubashir"
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Hello! I'm M. Mubashir, an AI Engineer and Machine Learning Specialist with a passion for pushing the boundaries of what's possible with artificial intelligence.
            </p>
            <p className="text-lg mb-4">
              With over 5 years of experience in the field, I've had the opportunity to work on a wide range of projects, from computer vision applications to natural language processing systems. My expertise lies in developing scalable AI solutions that solve real-world problems.
            </p>
            <p className="text-lg mb-4">
              I hold a Master's degree in Artificial Intelligence from Stanford University and have published several papers in top-tier AI conferences. When I'm not coding or training models, you can find me mentoring aspiring AI engineers or speaking at tech conferences.
            </p>
            <p className="text-lg">
              My goal is to contribute to the advancement of AI technology and its ethical implementation in various industries. I'm always excited about new challenges and opportunities to collaborate on innovative AI projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

