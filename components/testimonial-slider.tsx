"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sophie L.",
    text: "Pizzas are delicious and the ingredients are of high quality.",
    image: "/sophie.jpg", // Calea corectă către poza lui Sophie
    rating: 5,
  },
  {
    name: "Marco D.",
    text: "Quick service and a friendly atmosphere. My favorite food truck in Ahetze!",
    image: "/marco.jpg", // Calea corectă către poza lui Marco
    rating: 5,
  },
  {
    name: "Marie C.",
    text: "I really appreciate the vegetarian option, it's tasty and filling. Thank you Julian & Marius!",
    image: "/marie.jpg", // Calea corectă către poza lui Marie
    rating: 4,
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">Ce spun clienții noștri</h2>
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg bg-white p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
                <div className="flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
          </div>
          <button
            onClick={goToPrevious}
            title="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            title="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}