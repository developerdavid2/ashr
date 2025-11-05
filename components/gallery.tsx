import Image from "next/image"

export function Gallery() {
  return (
    <section id="gallery" className="bg-zinc-950">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-light uppercase text-center mb-16">Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 md:gap-[1px] bg-black">
          {/* <!-- Row 1 --> */}
          <div className="md:col-span-1 lg:col-span-2 relative h-[40vh] md:h-[50vh] bg-white">
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="w-16 h-16 bg-yellow-400"></div>
              <h3 className="text-black text-2xl uppercase">Lorem ipsum dolor</h3>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-2 relative h-[40vh] md:h-[50vh]">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Corporate Building"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 40vw"
            />
          </div>

          <div className="md:col-span-2 relative h-[40vh] md:h-[50vh] bg-white hidden md:block">
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="w-16 h-16 bg-yellow-400 ml-auto"></div>
              <div className="self-end">
                <h3 className="text-black text-2xl uppercase">Lorem ipsum dolor</h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 relative h-[40vh] md:h-[50vh] hidden lg:block">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Industrial Interior"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>

          {/* <!-- Row 2 --> */}
          <div className="md:col-span-1 relative h-[40vh] md:h-[50vh]">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Industrial Gears"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>

          <div className="md:col-span-1 lg:col-span-1 relative h-[40vh] md:h-[50vh]">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Industrial Plant"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>

          <div className="md:col-span-2 relative h-[40vh] md:h-[50vh] hidden md:block">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Industrial Machines"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 40vw"
            />
          </div>

          <div className="md:col-span-1 relative h-[40vh] md:h-[50vh] lg:hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Industrial Workshop"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>

          {/* <!-- Row 3 --> */}
          <div className="md:col-span-1 relative h-[40vh] md:h-[50vh] hidden md:block">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Industrial Controls"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>

          <div className="col-span-2 md:col-span-2 relative h-[40vh] md:h-[50vh]">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Office Building"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 40vw"
            />
          </div>

          <div className="col-span-2 md:col-span-2 relative h-[40vh] md:h-[50vh] hidden md:block">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Industrial Laboratory"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>

          <div className="relative h-[40vh] md:h-[50vh]">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Industrial Structure"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
