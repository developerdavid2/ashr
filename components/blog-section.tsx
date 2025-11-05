import Image from "next/image"

export function BlogSection() {
  return (
    <section id="blogs" className="bg-zinc-900">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-light uppercase text-center mb-16">News & Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white">
          {/* <!-- Item 1 (large) --> */}
          <div className="md:col-span-2 md:row-span-2 relative h-[70vh] md:h-auto">
            <Image
              src="/placeholder.svg?height=1200&width=800"
              alt="Featured News Item"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>
            <div className="absolute inset-0 flex items-end p-8">
              <div className="w-full max-w-xl">
                <span className="text-sm text-gray-400 mb-2 block">PRODUCT</span>
                <h3 className="text-xl font-medium mb-2">Introduction to our products</h3>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit</p>
              </div>
            </div>
          </div>

          {/* <!-- Item 2 --> */}
          <div className="relative h-[35vh] md:h-auto border-t md:border-t-0 md:border-l md:border-r border-white">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Industrial News"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"></div>
            <div className="absolute inset-0 flex items-end p-4">
              <div>
                <span className="text-sm text-gray-400 mb-2 block">Product</span>
                <h3 className="text-lg font-medium">Introduction to our products</h3>
              </div>
            </div>
          </div>

          {/* <!-- Item 3 --> */}
          <div className="relative h-[35vh] md:h-auto border-t md:border-t-0 md:border-l border-white">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Engineering News"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"></div>
            <div className="absolute inset-0 flex items-end p-4">
              <div>
                <span className="text-sm text-gray-400 mb-2 block">ENGINEERING</span>
                <h3 className="text-lg font-medium">Introduction to our engineering team</h3>
              </div>
            </div>
          </div>

          {/* <!-- Item 4 --> */}
          <div className="relative h-[35vh] md:h-auto border-t md:border-t-0 md:border-l md:border-r border-white">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Innovation News"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"></div>
            <div className="absolute inset-0 flex items-end p-4">
              <div>
                <span className="text-sm text-gray-400 mb-2 block">INNOVATION</span>
                <h3 className="text-lg font-medium">Introduction to our innovation</h3>
              </div>
            </div>
          </div>

          {/* <!-- Item 5 --> */}
          <div className="relative h-[35vh] md:h-auto border-t md:border-t-0 md:border-l border-white">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="More Engineering"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"></div>
            <div className="absolute inset-0 flex items-end p-4">
              <div>
                <span className="text-sm text-gray-400 mb-2 block">ENGINEERING</span>
                <h3 className="text-lg font-medium">Introduction to our engineering team</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
