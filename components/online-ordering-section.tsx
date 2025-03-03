"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"

export function OnlineOrderingSection() {
  const [orderType, setOrderType] = useState("pickup")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the order to your backend
    toast({
      title: "Commande reçue!",
      description: "Nous préparons votre commande. Merci de votre confiance!",
    })
  }

  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">Commander en ligne</h2>
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
          <RadioGroup defaultValue="pickup" onValueChange={setOrderType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pickup" id="pickup" />
              <Label htmlFor="pickup">À emporter</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="delivery" id="delivery" />
              <Label htmlFor="delivery">Livraison</Label>
            </div>
          </RadioGroup>

          <div className="space-y-2">
            <Label htmlFor="name">Nom</Label>
            <Input id="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input id="phone" type="tel" required />
          </div>

          {orderType === "delivery" && (
            <div className="space-y-2">
              <Label htmlFor="address">Adresse de livraison</Label>
              <Input id="address" required />
            </div>
          )}

          <Button type="submit" className="w-full">
            Passer la commande
          </Button>
        </form>
      </div>
    </section>
  )
}

