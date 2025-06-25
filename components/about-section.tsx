import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const benefits = [
    "Más de 5 años de experiencia en el mercado",
    "Equipo de expertos certificados",
    "Tecnología de vanguardia",
    "Soporte técnico especializado",
    "Actualizaciones constantes",
    "Integración con 100+ herramientas",
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/equipo.jpg"
              alt="About Us"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Proyectos completados</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Acerca de nosotros
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Líderes en innovación tecnológica</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Desde 2020, ayudamos a empresas peruanas a digitalizarse. 
                Nuestra misión es hacer accesible la tecnología de primer nivel.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#testimonials">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Conoce más sobre nosotros
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
