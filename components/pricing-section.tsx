import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Emprendedor",
      price: "S/1,000",
      period: "",
      description: "Perfecto para emprendedores que inician su presencia digital",
      color: "bg-green-500",
      badgeColor: "bg-green-100 text-green-800",
      features: [
        "Landing page responsive con hasta 3 secciones personalizadas",
        "Integración con redes sociales y mensajería (WhatsApp, etc.)",
        "SEO básico (posicionamiento local)",
        "Google Analytics 4 con dashboard personalizado",
        "Hosting por 12 meses",
        "Capacitación para gestión básica de contenidos (2 horas)",
      ],
      popular: false,
      cta: "Comenzar ahora",
    },
    {
      name: "Crecimiento",
      price: "S/2,000",
      period: "",
      description: "Ideal para empresas en crecimiento que necesitan más funcionalidades",
      color: "bg-yellow-500",
      badgeColor: "bg-yellow-100 text-yellow-800",
      features: [
        "Sitio web de hasta 7 páginas con arquitectura optimizada",
        "CMS intuitivo para el cliente",
        "Formularios inteligentes con integración a CRM básico",
        "SEO intermedio + estrategia de palabras clave locales",
        "Integración con Yape, Plin, BIM",
        "Chat en vivo con respuestas automáticas",
        "Hosting premium por 12 meses con CDN",
        "Sesión fotográfica básica (10 fotos)",
        "Capacitación ampliada (4 horas)",
      ],
      popular: true,
      cta: "Más popular",
    },
    {
      name: "Expansión",
      price: "S/3,000",
      period: "",
      description: "Para empresas establecidas que buscan expandir su alcance digital",
      color: "bg-blue-500",
      badgeColor: "bg-blue-100 text-blue-800",
      features: [
        "E-commerce completo con hasta 50 productos/servicios",
        "Diseño UX/UI personalizado",
        "Reservas o citas online (si aplica)",
        "Portal para clientes (seguimiento y autogestión)",
        "SEO avanzado + estrategia de contenidos 3 meses",
        "Integración con ERP/CRM del cliente",
        "Seguridad avanzada (certificados y protección de datos)",
        "Micrositios para campañas (2 al año)",
        "Soporte técnico prioritario (12 meses)",
        "Capacitación integral (8 horas)",
      ],
      popular: false,
      cta: "Solicitar cotización",
    },
    {
      name: "Corporativo",
      price: "S/5,000",
      period: "",
      description: "Solución empresarial completa para grandes organizaciones",
      color: "bg-red-500",
      badgeColor: "bg-red-100 text-red-800",
      features: [
        "Ecosistema completo: sitio web, e-commerce, intranet y app web progresiva",
        "Arquitectura escalable (microservicios)",
        "IA para personalización de la experiencia del usuario",
        "Análisis predictivo de comportamiento",
        "Integración con sistemas empresariales y APIs",
        "SEO nacional e internacional",
        "Dashboard de KPIs en tiempo real",
        "Auditoría de ciberseguridad y protección avanzada",
        "Mantenimiento proactivo por 12 meses",
        "Formación digital para el equipo (16 horas)",
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
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Planes y Precios
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planes DevPages que se adaptan a tu negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde emprendedores hasta grandes corporaciones, tenemos la solución digital perfecta para impulsar tu
            crecimiento.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all h-full flex flex-col ${
                plan.popular ? "ring-2 ring-yellow-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6 flex-1 flex flex-col">
                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="pt-6 mt-auto">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
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

        {/* Additional Info */}
        <div className="text-center mt-16 space-y-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🚀 Entrega Rápida</h4>
              <p className="text-gray-600 text-sm">Proyectos entregados en 15-30 días según complejidad</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🛡️ Garantía Total</h4>
              <p className="text-gray-600 text-sm">30 días de garantía en todos nuestros servicios</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">📞 Soporte 24/7</h4>
              <p className="text-gray-600 text-sm">Atención personalizada cuando la necesites</p>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-gray-600 mb-4">¿Necesitas un plan personalizado para tu empresa?</p>
            <Button variant="outline" className="bg-white text-gray-700 border-gray-300">
              Solicitar cotización personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
