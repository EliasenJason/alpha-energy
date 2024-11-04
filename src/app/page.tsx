import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat h-screen" style={{backgroundImage: "url('/images/pump-jack.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Add the logo image */}
            <div className="mb-6">
            <Image
              src="/images/alpha-energy-technologies.webp"
              alt="Alpha Energy Logo"
              width={500}
              height={200}
              className="mx-auto brightness-150 drop-shadow-[0_0_0.3rem_#000000]"
              priority
            />
            </div>
            <p className="text-xl mb-8 text-white">Powering Tomorrow's Solutions Today</p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold 
              hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Remote Engineering Oversight for Hydraulic Fracturing",
                description: "Our remote engineering team provides comprehensive oversight for hydraulic fracturing operations. With real-time monitoring and detailed analysis, we ensure optimal performance, safety, and efficiency in every phase of the operation.",
                icon: "🛢️",
              },
              {
                title: "Stimulation Program Design and Post-Job Data Analysis",
                description: "Our team crafts precise stimulation programs tailored to the unique characteristics of each well, optimizing performance from the start. After job completion, we provide in-depth data analysis.",
                icon: "🧪",
              },
              {
                title: "Customized Chemical Systems",
                description: "We design and supply unique chemical solutions tailored to meet the specific demands of your hydraulic fracturing projects. By developing custom formulations, we help enhance fluid performance.",
                icon: "📊",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300
                  border border-gray-700 hover:border-blue-500 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">About Alpha Energy</h2>
            <p className="text-gray-300 mb-8">
              At Alpha Energy, we're committed to advancing hydraulic fracturing operations through innovative, 
              data-driven solutions. With extensive experience in the oil and gas industry, we specialize in 
              providing remote and onsite engineering oversight, customized chemical systems, and comprehensive 
              support for every phase of your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    text-white placeholder-gray-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 
                  transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/images/alpha-energy-technologies.webp"
                alt="Alpha Energy Logo"
                width={200}
                height={67}
                className="mx-auto"
              />
            </div>
            <p className="mb-4">© 2024 Alpha Energy. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Twitter</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
