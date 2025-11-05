import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-white/20">
      <div className="container mx-auto px-6 py-16">
        {/* <!-- Primary Links --> */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* <!-- Company Info --> */}
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Ashrae</h3>
            <p className="text-white/60 mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed luctus rhoncus eros, id aliquet dui aliquet
              vitae.
            </p>

            <p className="text-white/60 mb-2">Contact Us:</p>
            <address className="text-white/60 not-italic mb-6">120 Rose Avenue, Savar, Dhaka 1340, Bangladesh.</address>

            <div className="flex space-x-4">
              {/* <!-- Social Icons --> */}
              <Link
                href="#"
                className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white/10"
              >
                <span className="text-white text-2xl leading-none">f</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white/10"
              >
                <span className="text-white text-2xl leading-none">in</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white/10"
              >
                <span className="text-white text-2xl leading-none">tw</span>
              </Link>
            </div>
          </div>

          {/* <!-- Quick Links 1 --> */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Quick Links 2 --> */}
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Technical Documents
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Product Catalogs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Newsletter --> */}
          <div>
            <h4 className="text-white font-medium mb-4">Newsletter</h4>
            <p className="text-white/60 mb-4">Stay updated with our latest news and offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border border-white/20 py-2 px-4 text-white placeholder-white/40 focus:outline-none focus:border-white"
              />
              <button type="submit" className="w-full bg-white text-black py-2 uppercase font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Bottom Bar --> */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 md:mb-0">© Ashrae.com | All rights reserved 2025</p>

            <div className="flex space-x-6">
              <Link href="#" className="text-white/40 text-sm hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/40 text-sm hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
