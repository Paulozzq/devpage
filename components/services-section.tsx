import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Megaphone, TrendingUp } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Creamos sitios web y aplicaciones modernas, rápidas y escalables.",
      features: ["React & Next.js", "Backend robusto", "APIs RESTful", "Base de datos optimizada"],
    },
    {
      icon: Palette,
      title: "Diseño UX/UI",
      description: "Diseños atractivos y funcionales que convierten visitantes en clientes.",
      features: ["Investigación UX", "Prototipado", "Diseño responsive", "Testing de usabilidad"],
    },
    {
      icon: Megaphone,
      title: "Marketing Digital",
      description: "Estrategias integrales para hacer crecer tu presencia online.",
      features: ["SEO/SEM", "Redes sociales", "Email marketing", "Analytics"],
    },
    {
      icon: TrendingUp,
      title: "Consultoría",
      description: "Asesoramiento estratégico para optimizar tus procesos digitales.",
      features: ["Auditoría digital", "Estrategia tecnológica", "Transformación digital", "Capacitación"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluciones completas para tu negocio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios digitales para llevar tu empresa al siguiente nivel.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-center">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">¿Listo para transformar tu negocio digital?</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="#pricing">Ver nuestros planes</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
