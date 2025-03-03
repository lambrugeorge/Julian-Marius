import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sophie L.",
    text: "Pizzas are delicious and the ingredients are of high quality.",
    image: "/sophie.avif", // Calea corectă către poza lui Sophie
    rating: 5,
  },
  {
    name: "Marco D.",
    text: "Quick service and a friendly atmosphere. My favorite food truck in Ahetze!",
    image: "/marco.avif", // Calea corectă către poza lui Marco
    rating: 5,
  },
  {
    name: "Marie C.",
    text: "I really appreciate the vegetarian option, it's tasty and filling. Thank you Julian & Marius!",
    image: "/marie.avif", // Calea corectă către poza lui Marie
    rating: 4,
  },
]

export function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">Ce que disent nos clients</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}