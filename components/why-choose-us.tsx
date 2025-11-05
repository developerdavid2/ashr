import { Feature } from "@/components/feature"

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-black">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-light uppercase text-center mb-16">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Large Image --> */}
          <div className="md:col-span-1 relative h-[400px] md:h-full md:min-h-[500px]">
            <div className="w-full h-full bg-stone-900"></div>
          </div>

          {/* <!-- Features Grid --> */}
          <div className="md:col-span-2">
            {/* <!-- Top Row --> */}
            <div className="flex flex-col md:flex-row border-b border-white">
              <Feature
                title="Industry Experience"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                background="bg-white"
                textColor="text-black"
              />
              <Feature
                title="Skilled Employees"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                background="bg-white"
                textColor="text-black"
              />
            </div>

            {/* <!-- Middle Row --> */}
            <div className="flex flex-col md:flex-row border-b border-white">
              <Feature
                title="Research and Development"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                background="bg-white"
                textColor="text-black"
              />
              <Feature
                title="Quality Control"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                background="bg-white"
                textColor="text-black"
              />
            </div>

            {/* <!-- Bottom Row --> */}
            <div className="flex flex-col md:flex-row">
              <Feature
                title="Global Supply Chain"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                background="bg-white"
                textColor="text-black"
              />
              <Feature
                title="Innovation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                background="bg-white"
                textColor="text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
