import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-black">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-light uppercase text-center mb-16">About the Company</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* <!-- Text --> */}
          <div className="flex flex-col justify-between h-full">
            <div className="md:pl-8 h-auto md:h-[60vh] flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>

              <p className="text-white/80 text-lg max-w-lg mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus rhoncus eros, id aliquet dui aliquet
                vitae. Curabitur sit amet magna eget metus finibus efficitur. In tincidunt, risus quis congue efficitur,
                velit nisl viverra erat, in ullamcorper urna justo non enim. Pellentesque malesuada nisl et nisl auctor,
                ac scelerisque lorem vehicula.
              </p>

              <a href="#" className="inline-flex items-center text-white uppercase font-semibold">
                READ MORE
                <span className="ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* <!-- Image --> */}
          <div className="relative h-full min-h-[400px] md:min-h-[60vh]">
            <Image
              src="/placeholder.svg?height=1200&width=800"
              alt="Company Architecture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
