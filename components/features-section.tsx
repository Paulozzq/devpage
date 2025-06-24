import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Users, BarChart3, Clock, Smartphone } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Velocidad Increíble",
      description: "Procesa datos 10x más rápido que la competencia con nuestra tecnología optimizada.",
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección de nivel empresarial con encriptación de extremo a extremo.",
    },
    {
      icon: Users,
      title: "Colaboración en Tiempo Real",
      description: "Trabaja en equipo sin límites con sincronización instantánea.",
    },
    {
      icon: BarChart3,
      title: "Análisis Inteligente",
      description: "Obtén insights valiosos con nuestros dashboards y reportes automáticos.",
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Accede a tu información desde cualquier lugar, en cualquier momento.",
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Funciona perfectamente en desktop, tablet y móvil.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
              Características
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Todo lo que necesitas en un solo lugar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las características que hacen de nuestra plataforma la elección perfecta para empresas de todos los
            tamaños.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
