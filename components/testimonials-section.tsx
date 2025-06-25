import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechStart",
      image: "/placeholder.svg?height=80&width=80",
      content: "Increíble servicio y resultados excepcionales. Nuestras ventas aumentaron un 300% en solo 6 meses.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Marketing, InnovateCorp",
      image: "/placeholder.svg?height=80&width=80",
      content: "El equipo más profesional con el que he trabajado. Superaron todas nuestras expectativas.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Fundadora, DigitalPlus",
      image: "/placeholder.svg?height=80&width=80",
      content: "Transformaron completamente nuestra presencia digital. Altamente recomendados.",
      rating: 5,
    },
    {
      name: "Luis Hernández",
      role: "CTO, FutureTech",
      image: "/placeholder.svg?height=80&width=80",
      content: "Soluciones innovadoras y soporte técnico excepcional. No podríamos estar más satisfechos.",
      rating: 5,
    },
    {
      name: "Sofia López",
      role: "Gerente General, GrowthCo",
      image: "/placeholder.svg?height=80&width=80",
      content: "ROI impresionante y resultados medibles desde el primer mes. Excelente inversión.",
      rating: 5,
    },
    {
      name: "Diego Morales",
      role: "VP Ventas, ScaleCorp",
      image: "/placeholder.svg?height=80&width=80",
      content: "Proceso fluido, comunicación clara y entrega a tiempo. Definitivamente volveremos a trabajar juntos.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Testimonios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 1,000 empresas confían en nosotros para impulsar su crecimiento digital.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">¿Listo para unirte a nuestros clientes satisfechos?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              ⭐ 4.9/5 en Google Reviews
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              🏆 Top Rated en Clutch
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
