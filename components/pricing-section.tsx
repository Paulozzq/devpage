import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Básico",
      price: "$29",
      period: "/mes",
      description: "Perfect para pequeñas empresas que están comenzando",
      features: [
        { name: "Hasta 5 usuarios", included: true },
        { name: "10GB de almacenamiento", included: true },
        { name: "Soporte por email", included: true },
        { name: "Integraciones básicas", included: true },
        { name: "Reportes básicos", included: true },
        { name: "API avanzada", included: false },
        { name: "Soporte prioritario", included: false },
        { name: "Análisis avanzado", included: false },
      ],
      popular: false,
      cta: "Comenzar gratis",
    },
    {
      name: "Profesional",
      price: "$79",
      period: "/mes",
      description: "Ideal para equipos en crecimiento que necesitan más funciones",
      features: [
        { name: "Hasta 25 usuarios", included: true },
        { name: "100GB de almacenamiento", included: true },
        { name: "Soporte por chat y email", included: true },
        { name: "Todas las integraciones", included: true },
        { name: "Reportes avanzados", included: true },
        { name: "API avanzada", included: true },
        { name: "Soporte prioritario", included: true },
        { name: "Análisis avanzado", included: false },
      ],
      popular: true,
      cta: "Prueba gratuita",
    },
    {
      name: "Empresarial",
      price: "$199",
      period: "/mes",
      description: "Para grandes organizaciones con necesidades específicas",
      features: [
        { name: "Usuarios ilimitados", included: true },
        { name: "Almacenamiento ilimitado", included: true },
        { name: "Soporte 24/7", included: true },
        { name: "Integraciones personalizadas", included: true },
        { name: "Reportes personalizados", included: true },
        { name: "API avanzada", included: true },
        { name: "Soporte prioritario", included: true },
        { name: "Análisis avanzado", included: true },
      ],
      popular: false,
      cta: "Contactar ventas",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">Precios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planes que se adaptan a tu negocio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan perfecto para tu empresa. Todos incluyen 14 días de prueba gratuita.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all ${
                plan.popular ? "ring-2 ring-emerald-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="pt-6">
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-emerald-600 hover:bg-emerald-700" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">¿Tienes preguntas sobre nuestros planes?</p>
          <Button variant="outline" className="bg-white text-gray-700 border-gray-300">
            Ver preguntas frecuentes
          </Button>
        </div>
      </div>
    </section>
  )
}
