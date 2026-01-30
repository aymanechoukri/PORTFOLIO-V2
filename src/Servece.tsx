import { FiCode, FiSmartphone, FiLayers, FiGlobe, FiCheck } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      description: "Modern web applications using React, Next.js, and TypeScript.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile Responsive",
      description: "Fully responsive designs that work on all devices.",
      color: "from-purple-500/20 to-pink-500/20"
    },

    {
      icon: <FiGlobe />,
      title: "Web Performance",
      description: "Optimized websites for speed and SEO.",
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: <FiCheck />,
      title: "Quality Assurance",
      description: "Thorough testing and bug-free delivery.",
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section className="py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-[#39CEED]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I provide a wide range of web development services to help you build 
            your digital presence.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-[#0f172a] rounded-3xl border border-gray-800 hover:border-[#39ceed60] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(57,206,237,0.15)]"
            >
              {/* Icon */}
              <div className={`mb-6 p-4 bg-gradient-to-br ${service.color} rounded-2xl w-fit`}>
                <div className="text-white text-2xl">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              
              {/* Hover Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#39CEED] to-[#2dd4bf] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            My <span className="text-[#39CEED]">Work Process</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements" },
              { step: "02", title: "Design", desc: "Creating wireframes and mockups" },
              { step: "03", title: "Development", desc: "Building and testing the solution" },
              { step: "04", title: "Delivery", desc: "Launch and ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#39ceed15] to-transparent rounded-full border border-[#39ceed30] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#39CEED] text-xl font-bold">{item.step}</span>
                </div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}