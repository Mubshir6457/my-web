import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <Mail className="w-6 h-6 mr-4 text-blue-400" />
            <a href="mailto:m.mubashir@example.com" className="hover:text-blue-400 transition-colors">muhammadmubashis6457@gmail.com</a>
          </div>
          <div className="flex items-center mb-6">
            <Phone className="w-6 h-6 mr-4 text-blue-400" />
            <a href="tel:+92 3263429331" className="hover:text-blue-400 transition-colors">+92 3263429331</a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-6 h-6 mr-4 text-blue-400" />
            <p>Rahim yar khan,Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  )
}

