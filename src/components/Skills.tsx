const skills = [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "TensorFlow",
    "PyTorch",
    "Python",
    "Data Analysis",
    "Big Data",
    "Neural Networks",
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  