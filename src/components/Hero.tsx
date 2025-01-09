import { FacebookIcon,  InstagramIcon, Linkedin,  } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">M. Mubashir</h1>
        <h2 className="text-3xl text-blue-400 mb-8">AI Engineer & Machine Learning Specialist</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Passionate about leveraging artificial intelligence to solve complex problems and create innovative solutions.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com/muhammadmubashis6457/profilecard/?igsh=anZtM3J6M21teWU4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <InstagramIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-mubashir-17b737338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61567329344717" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FacebookIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  )
}

