"use client"

import { FC } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Meniul principal pentru plajă
const beachMenu = [
  {
    name: "MARGHERITA",
    description: "",
    image: "margherita.avif",
  },
  {
    name: "CHORIZO",
    description: "",
    image: "chorizo.avif",
  },
  {
    name: "VÉGÉTARIENNE",
    description: "",
    image: "vegetariane.avif",
  },
  {
    name: "KEBAB",
    description: "",
    image: "pizza-kebap.avif",
  },
  {
    name: "ROUMAINE",
    description: "",
    image: "romaneasca.avif",
  },
  {
    name: "BOEUF HACHÉ",
    description: "",
    image: "beouf hache.avif",
  },
  {
    name: "CRÊPES",
    description: "",
    image: "crepes.avif",
  },
  {
    name: "BEIGNETS",
    description: "",
    image: "beignet.avif",
  },
  {
    name: "GAUFRES",
    description: "",
    image: "gofre.avif",
  }
]

// Meniul pentru parking
const parkingMenu = [
  {
    name: "BURGERS",
    description: "",
    image: "burger.avif",
  },
  {
    name: "SANDWICH",
    description: "",
    image: "sandwich.avif",
  },
  {
    name: "MOULES-FRITES",
    description: "",
    image: "moules.avif",
  },
  {
    name: "KEBAB",
    description: "",
    image: "kebab.avif",
  },
  {
    name: "BOISSONS",
    description: "",
    image: "boisons.avif",
  }
]

interface MenuItem {
  name: string;
  description: string;
  image: string;
}

interface MenuSectionProps {
  title: string;
  menu: MenuItem[];
  bgColor: string;
  textColor: string;
  buttonColor: string;
  image?: string;
}

const MenuSection: FC<MenuSectionProps> = ({ title, menu, bgColor, textColor, buttonColor, image }) => {
  return (
    <section className={`py-16 ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-4">
        {image && (
          <div className="mb-12 mx-auto max-w-3xl">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full object-cover border-2 border-golden"
              priority
              placeholder="blur"
              blurDataURL="/placeholder.png" // Adaugă un placeholder pentru o încărcare mai lină
            />
          </div>
        )}
        
        <h2 className="text-center font-serif text-3xl font-bold md:text-4xl mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menu.map((item) => (
            <div key={item.name} className="group relative overflow-hidden rounded-xl bg-opacity-90 transition-all hover:scale-[1.02] cursor-pointer hover:shadow-2xl">
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="/placeholder.png" // Adaugă un placeholder pentru o încărcare mai lină
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-sm line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function FullMenu() {
  return (
    <main className="scroll-smooth">
      {/* Banner disponibilitate */}
      <div className="bg-red-600/90 p-4 text-center text-white">
        <h3 className="font-bold text-xl italic">
          🏖️ Du 1er Mai au 30 Septembre - À La Plage Erromardie Saint-Jean-de-Luz
        </h3>
        <p className="mt-2 font-medium">Service pizza indisponible à Ahetze pendant cette période</p>
      </div>

      {/* Sectiunea Plaja */}
      <MenuSection
        title="Menu Plage Saint-Jean-de-Luz"
        menu={beachMenu}
        bgColor="bg-black"
        textColor="text-white"
        buttonColor="bg-red-600 hover:bg-red-700"
        image="/plage.avif"
      />

      {/* Sectiunea Parking */}
      <MenuSection
        title="Menu Parking VIVAL, Ahetze"
        menu={parkingMenu}
        bgColor="bg-gray-100"
        textColor="text-gray-900"
        buttonColor="bg-blue-600 hover:bg-blue-700"
        image="/parking.avif"
      />
    </main>
  )
}