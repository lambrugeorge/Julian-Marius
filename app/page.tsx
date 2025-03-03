import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import MenuSection from "@/components/menu-section"
import { TestimonialSection } from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center overflow-hidden bg-black text-white h-screen">
        <Image
          src="/coperta.jpeg"
          alt="Julian & Marius Food Truck"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 py-20 text-center md:py-32">
          <div className="mx-auto mb-6 w-32 md:w-40">
            <div className="rounded-full bg-white p-2">
              <Image
                src="/logo.avif"
                alt="Julian & Marius Logo"
                width={600}
                height={450}
                className="rounded-full"
              />
            </div>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-6xl animate-fade-in-up">Julian & Marius</h1>
          <p className="mb-8 text-xl md:text-2xl animate-fade-in-up animation-delay-200">Food Truck Délicieux</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-amber-500 text-black hover:bg-amber-600 transition-transform hover:scale-105"
            >
              Notre Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-amber-500 text-black hover:bg-amber-600 transition-transform hover:scale-105"
            >
              Où nous trouver
            </Button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">Bienvenue chez Julian & Marius</h2>
            <p className="mb-8 text-lg text-gray-700">
              Nous sommes passionnés par la création de délicieuses pizzas et plats de rue de qualité supérieure. Notre
              food truck combine des saveurs traditionnelles avec une touche moderne pour vous offrir une expérience
              culinaire inoubliable.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              <Image
                src="/iulian.avif"
                alt="Julian & Marius Food Truck"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />
              <Image
                src="marius.avif"
                alt="Julian & Marius Location"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
  <div className="rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
    <div className="flex items-center justify-center mb-4">
      <Image src="/fresh-ingredients.png" alt="Ingrédients Frais" width={50} height={50} />
    </div>
    <h3 className="mb-3 text-center font-serif text-xl font-bold text-white">Ingrédients Frais</h3>
    <p className="text-center text-white">Nous utilisons uniquement des ingrédients frais et de qualité.</p>
  </div>
  <div className="rounded-lg bg-gradient-to-r from-green-500 to-teal-500 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
    <div className="flex items-center justify-center mb-4">
      <Image src="/authentic-recipes.png" alt="Recettes Authentiques" width={50} height={50} />
    </div>
    <h3 className="mb-3 text-center font-serif text-xl font-bold text-white">Recettes Authentiques</h3>
    <p className="text-center text-white">Des recettes traditionnelles avec une touche créative.</p>
  </div>
  <div className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
    <div className="flex items-center justify-center mb-4">
      <Image src="/fast-service.png" alt="Service Rapide" width={50} height={50} />
    </div>
    <h3 className="mb-3 text-center font-serif text-xl font-bold text-white">Service Rapide</h3>
    <p className="text-center text-white">Profitez d'un service rapide sans compromettre la qualité.</p>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Location & Contact Section */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">Où nous trouver</h2>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <h3 className="mb-6 text-xl font-bold">Informations</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-amber-500" />
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <p className="text-gray-600">Au parking VIVAL, 64210, Ahetze, France</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-amber-500" />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-gray-600">+33 6 69 23 37 57</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-amber-500" />
                  <div>
                    <h4 className="font-medium">Horaires</h4>
                    <p className="text-gray-600">Ouvert jusqu'à 23h</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 transition-transform hover:scale-105"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 transition-transform hover:scale-105"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Button>
              </div>
            </div>

            <div className="h-64 overflow-hidden rounded-lg bg-gray-200 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.9273321624!2d-1.5918!3d43.4294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51152b0c7e6f45%3A0x2c366e31d5d2abf1!2sAhetze%2C%20France!5e0!3m2!1sen!2sus!4v1646579836754!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Julian & Marius location"
                className="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-amber-500 py-16 text-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Food background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">Envie de Savourer Nos Délices?</h2>
          <p className="mb-8 text-lg">Venez nous rendre visite ou appelez-nous pour commander à l'avance!</p>
          <a className="bg-black text-white hover:bg-gray-800 transition-transform hover:scale-105 inline-flex items-center justify-center px-4 py-2 rounded-lg text-lg" 
          href="tel:+33669233757"
>
  <Phone className="mr-2 h-5 w-5" />
  Call Now
</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center">
              <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
                <Image src="/logo.avif" alt="Julian & Marius Logo" width={40} height={40} />
              </div>
              <span className="font-serif text-xl font-bold">Julian & Marius</span>
            </div>

            <div className="flex flex-wrap gap-6">
              <Link href="#menu" className="hover:text-amber-500 transition-colors">
                Menu
              </Link>
              <Link href="#contact" className="hover:text-amber-500 transition-colors">
                Contact
              </Link>
              <Link href="#" className="hover:text-amber-500 transition-colors">
                Mentions Légales
              </Link>
            </div>

            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Julian & Marius. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}