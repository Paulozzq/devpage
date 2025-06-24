import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                  🚀 Nuevo lanzamiento
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transforma tu
                <span className="text-emerald-600"> negocio </span>con 
                <span className="ml-1 font-bold text-white animate-pulse bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(0,255,150,0.8)]">
                  DevPages
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubre la plataforma que revolucionará la forma en que trabajas. Aumenta tu productividad, reduce
                costos y alcanza tus objetivos más rápido.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Comenzar gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-gray-700 border-gray-300">
                <Play className="mr-2 h-5 w-5" />
                Ver demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">Tiempo de actividad</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Soporte técnico</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Hero Image"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-emerald-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
