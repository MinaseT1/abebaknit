import Image from "next/image";
import { Mail, Phone, MapPin, Users, Award, Zap } from "lucide-react";
import { Navbar1 } from "@/components/ui/navbar-1";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">

      {/* Navigation */}
       <div className="relative z-10">
         <Navbar1 />
       </div>

      {/* Hero Section */}
       <section id="home" className="relative bg-gradient-to-br from-white to-gray-50 py-12 lg:py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Image - appears first on mobile, second on desktop */}
            <div className="relative order-1 lg:order-2 animate-fade-in-right">
               <div className="relative max-w-sm mx-auto lg:max-w-none">
                 <Image
                   src="/herosection.png"
                   alt="Manufacturing Excellence"
                   width={600}
                   height={500}
                   priority
                   placeholder="blur"
                   blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                   className="relative z-10 w-full h-auto transform transition-all duration-1000 ease-out"
                 />
                 <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-br from-[#107239] to-[#0d5f2f] rounded-3xl shadow-2xl -z-0 transform transition-all duration-1000 ease-out delay-300"></div>
               </div>
             </div>
            {/* Text content - appears second on mobile, first on desktop */}
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-title transform transition-all duration-1000 ease-out">
                Abeba
                <span className="text-[#107239] block">Knit & Cultural</span>
                Manufacturing
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed font-subtext transform transition-all duration-1000 ease-out delay-200">
                Crafting excellence in textile manufacturing with traditional Ethiopian cultural elements and modern innovation.
              </p>
            
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
       <section className="bg-[#107239] py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white font-title">15+</div>
              <div className="text-green-100 mt-2 font-subtext">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white font-title">5000+</div>
              <div className="text-green-100 mt-2 font-subtext">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white font-title">10000+</div>
              <div className="text-green-100 mt-2 font-subtext">Products Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white font-title">98%</div>
              <div className="text-green-100 mt-2 font-subtext">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
       <section id="about" className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Overview */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-title">
              About <span className="text-[#107239]">Abeba Knit</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-subtext">
              Abeba Knit and Cultural Manufacturing Enterprise - Established in 2000, located in Hawassa Industrial Zone, Ethiopia. From an initial capital of 5,500 ETB, we have grown to over 60 million ETB, becoming a leading manufacturer of high-quality knitwear and cultural attire.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-[#107239] to-[#0d5f2f] p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4 font-title">Our Vision</h3>
              <p className="text-lg leading-relaxed font-subtext">
                To become a leading manufacturer and exporter of high-quality knitwear and cultural attire that celebrates Ethiopian heritage and meets global standards.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-[#107239]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-title">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed font-subtext">
                To produce high-quality student uniforms, modern knitwear, and cultural dresses using locally sourced materials while empowering women and local communities through employment opportunities and skills development.
              </p>
            </div>
          </div>

          {/* Manufacturing Image */}
          <div className="mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Manuf..png"
                alt="Manufacturing Process"
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold font-title">Modern Manufacturing Excellence</h3>
                  <p className="text-lg font-subtext">Blending traditional craftsmanship with cutting-edge technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-title">
              Our <span className="text-[#107239]">Goals</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-[#107239] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-title">Quality Standards</h4>
                <p className="text-gray-600 text-sm font-subtext">Producing high-quality uniforms, knitwear, and cultural garments meeting local and international standards.</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-[#107239] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-title">Empower Communities</h4>
                <p className="text-gray-600 text-sm font-subtext">Creating sustainable job opportunities for women and local communities, fostering economic independence.</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-[#107239] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-title">Cultural Preservation</h4>
                <p className="text-gray-600 text-sm font-subtext">Celebrating and promoting Ethiopia's cultural identity through traditional designs with modern styles.</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-[#107239] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-title">Innovation & Growth</h4>
                <p className="text-gray-600 text-sm font-subtext">Embracing creativity and new technologies to improve products and expand market reach.</p>
              </div>
            </div>
          </div>

          {/* Historical Background */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 font-title">
              Historical <span className="text-[#107239]">Background</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-subtext">
                Founded by <strong>Mrs. Abeba Zenebe</strong> in 2001 as a sole proprietorship with just 5 employees, Abeba Enterprise began with an initial focus on knitting student uniform sweaters. Through consistent quality delivery and strategic market expansion in Hawassa and surrounding areas, the company quickly established its reputation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-subtext">
                By 2004, the enterprise made a pioneering step in Ethiopia by diversifying into modern cultural jackets, trousers, and dresses using locally woven Southern regional fabrics. This innovation marked our commitment to preserving Ethiopian cultural heritage while meeting modern fashion demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
       <section id="services" className="py-20 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-title">
              Our <span className="text-[#107239]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-subtext">
              From custom knit products to traditional Ethiopian cultural garments, we offer comprehensive manufacturing solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-title">Custom Knit Products</h3>
              <p className="text-gray-600 mb-6 font-subtext">
                High-quality custom knit garments tailored to your specifications and requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-title">Cultural Garments</h3>
              <p className="text-gray-600 mb-6 font-subtext">
                Traditional Ethiopian cultural clothing with authentic designs and premium materials.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-title">Bulk Manufacturing</h3>
              <p className="text-gray-600 mb-6 font-subtext">
                Large-scale production capabilities for wholesale and commercial clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-title">Design Consultation</h3>
              <p className="text-gray-600 mb-6 font-subtext">
                Expert design advice and consultation for your textile manufacturing needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-title">Quality Control</h3>
              <p className="text-gray-600 mb-6 font-subtext">
                Rigorous quality assurance processes to ensure every product meets our high standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-title">Export Services</h3>
              <p className="text-gray-600 mb-6 font-subtext">
                International shipping and export services for global clients and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-title">
              Our <span className="text-[#107239]">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-subtext">
              Explore our collection of premium suits and traditional garments crafted with excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloth Sample 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/Cloth sample 1.png"
                  alt="Cloth Sample 1"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold font-title">Premium Cloth Sample</h3>
                  <p className="text-sm font-subtext">High-quality textile design</p>
                </div>
              </div>
            </div>
            
            {/* Cloth Sample 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/Cloth sample 3.png"
                  alt="Cloth Sample 3"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold font-title">Traditional Design</h3>
                  <p className="text-sm font-subtext">Cultural garment pattern</p>
                </div>
              </div>
            </div>
            
            {/* Cloth Design 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/Cloth design 2.png"
                  alt="Cloth Design 2"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold font-title">Modern Design</h3>
                  <p className="text-sm font-subtext">Contemporary styling</p>
                </div>
              </div>
            </div>
            
            {/* Cloths 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/Cloths 2.png"
                  alt="Cloths Collection"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold font-title">Suit Collection</h3>
                  <p className="text-sm font-subtext">Professional attire</p>
                </div>
              </div>
            </div>
            
            {/* Cloths 2K */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/Cloths 2K.png"
                  alt="Premium Cloths"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold font-title">Premium Collection</h3>
                  <p className="text-sm font-subtext">Luxury garments</p>
                </div>
              </div>
            </div>
            
            {/* Clot hs 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/Clot  hs 2.png"
                  alt="Clothing Collection"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold font-title">Garment Showcase</h3>
                  <p className="text-sm font-subtext">Diverse clothing range</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Collection */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-title">
              Cultural <span className="text-[#107239]">Heritage Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-subtext">
              Discover our authentic Ethiopian cultural garments representing the rich traditions of different regions.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Sidama Cultural Dress */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/sidama1.png"
                    alt="Sidama Traditional Dress"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-title">
                  Sidama Traditional Dress
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-subtext">
                  The Sidama traditional dress represents the rich cultural heritage of the Sidama people in southern Ethiopia. 
                  This elegant garment features intricate handwoven patterns and vibrant colors that tell stories of ancient traditions. 
                  Made from locally sourced cotton and adorned with traditional embroidery, each piece is a masterpiece of cultural artistry.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Handwoven traditional patterns</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Premium locally sourced cotton</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Authentic cultural embroidery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hadiya Cultural Dress */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/Hadiya.png"
                    alt="Hadiya Traditional Dress"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-title">
                  Hadiya Traditional Attire
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-subtext">
                  The Hadiya traditional attire showcases the sophisticated textile traditions of the Hadiya zone. 
                  Known for its distinctive geometric patterns and earth-tone color palette, this garment reflects the 
                  agricultural heritage and artistic excellence of the Hadiya people. Each piece is carefully crafted 
                  using time-honored techniques passed down through generations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Distinctive geometric patterns</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Earth-tone color palette</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Traditional weaving techniques</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gurage Cultural Dress */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/Gurage.png"
                    alt="Gurage Traditional Dress"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-title">
                  Gurage Cultural Garment
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-subtext">
                  The Gurage cultural garment embodies the entrepreneurial spirit and rich traditions of the Gurage people. 
                  Characterized by its bold patterns and vibrant colors, this traditional dress represents the community's 
                  strong cultural identity and artistic heritage. The intricate details and quality craftsmanship make 
                  each piece a celebration of Gurage culture.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Bold traditional patterns</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Vibrant cultural colors</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Premium quality craftsmanship</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gamo Cultural Dress */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/Gamo.png"
                    alt="Gamo Traditional Dress"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-title">
                  Gamo Traditional Ensemble
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-subtext">
                  The Gamo traditional ensemble represents the highland culture and pastoral traditions of the Gamo people. 
                  This sophisticated garment features elegant draping and subtle color combinations that reflect the 
                  natural beauty of the Gamo highlands. The careful attention to detail and traditional construction 
                  methods ensure authenticity and cultural significance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Elegant traditional draping</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Highland-inspired colors</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#107239] rounded-full mr-3"></span>
                    <span className="text-gray-600 font-subtext">Authentic construction methods</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-title">
              Our <span className="text-[#107239]">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-subtext">
              Meet the dedicated professionals behind Abeba Knit & Cultural Manufacturing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder & CEO */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/founder&ceo.png"
                  alt="Founder & CEO"
                  width={192}
                  height={192}
                  loading="lazy"
                  sizes="192px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="w-full h-full object-cover object-center rounded-full border-4 border-[#107239]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#107239] mb-2 font-title">Mrs. Abeba Zenebe</h3>
              <p className="text-gray-600 font-subtext">Founder & CEO</p>
            </div>
            
            {/* Co-Founder */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/Co-founde.png"
                  alt="Co-Founder"
                  width={192}
                  height={192}
                  loading="lazy"
                  sizes="192px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="w-full h-full object-cover object-center rounded-full border-4 border-[#107239]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#107239] mb-2 font-title">Mr. Wolle Abegaz</h3>
              <p className="text-gray-600 font-subtext">Co-founder and General Manager</p>
            </div>
            
            {/* Operational Manager */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/opretionalmanager.png"
                  alt="Operational Manager"
                  width={192}
                  height={192}
                  loading="lazy"
                  sizes="192px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="w-full h-full object-cover rounded-full border-4 border-[#107239]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#107239] mb-2 font-title">Mrs. Wdase Mulugetam </h3>
              <p className="text-gray-600 font-subtext">Operational Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
       <section id="contact" className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-title">
              Get In <span className="text-[#107239]">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-subtext">
              Ready to start your next project? Contact us today for a consultation and quote.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#107239] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-title">Phone</h3>
                    <p className="text-gray-600 font-subtext">0462207432</p>
                    <p className="text-gray-600 font-subtext">+251 916828905</p>
                    <p className="text-gray-600 font-subtext">+251 916822985</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#107239] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-title">Email</h3>
                    <p className="text-gray-600 font-subtext">wolleabeg777@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#107239] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-title">Address</h3>
                    <p className="text-gray-600 font-subtext">Hawassa, Sidama, Ethiopia</p>
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-subtext">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#107239] focus:border-transparent font-subtext"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-subtext">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#107239] focus:border-transparent font-subtext"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-subtext">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#107239] focus:border-transparent font-subtext"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#107239] text-white py-3 rounded-lg font-semibold hover:bg-[#0d5f2f] transition-colors font-subtext"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
       <footer className="bg-[#107239] text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/kkjj.png"
                  alt="Abeba Knit Logo"
                  width={32}
                  height={32}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="mr-3"
                />
                <span className="text-xl font-bold font-title">Abeba Knit</span>
              </div>
              <p className="text-gray-400 font-subtext">
                Premium textile manufacturing with Ethiopian cultural heritage and modern innovation.
              </p>
            </div>
          
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-title">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors font-subtext">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-subtext">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-subtext">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-subtext">News</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-title">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="font-subtext">+251 916828905</li>
                <li className="font-subtext">wolleabeg777@gmail.com</li>
                <li className="font-subtext">Hawassa, Sidama, Ethiopia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-gray-200">
            <p className="font-subtext">&copy; 2025 Abeba Knit and Cultural Manufacturing Enterprise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
