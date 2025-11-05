import { Button } from "@/components/button"
import Image from "next/image"

export function TryAshrae() {
  return (
    <section id="try-ashrae" className="bg-black relative overflow-hidden">
      {/* <!-- Background Image --> */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Image
          src="/placeholder.svg?height=1200&width=2400"
          alt="Industrial Facility Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light uppercase mb-6">Try Ashrae Today</h2>

          <p className="text-xl text-white/80 mb-12">
            Discover how our innovative solutions can transform your business operations. Get in touch with our team to
            learn more about our products and services.
          </p>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg uppercase bg-transparent"
          >
            Get Started Now
          </Button>
        </div>
      </div>

      {/* <!-- Bottom Lines --> */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20 z-20">
        <div className="container mx-auto px-6 h-full">
          <div className="w-1/5 h-full bg-white"></div>
        </div>
      </div>
    </section>
  )
}
