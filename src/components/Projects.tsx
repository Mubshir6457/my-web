import Image from 'next/image'

const projects = [
  {
    title: "AI-Powered Image Recognition",
    description: "Developed a deep learning model for real-time object detection in images and video streams.",
    image: "/p.png",
  },
  {
    title: "Natural Language Processing Chatbot",
    description: "Created an intelligent chatbot using NLP techniques to provide customer support for an e-commerce platform.",
    image: "/gt.png",
  },
  {
    title: "Predictive Maintenance System",
    description: "Implemented a machine learning model to predict equipment failures in manufacturing plants.",
    image: "/we.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={600} 
                height={400} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

