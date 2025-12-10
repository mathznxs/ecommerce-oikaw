"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ShoppingCart, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

const WHATSAPP_NUMBER = "5511945374081"

interface AddToCartSectionProps {
  product: Product
}

export function AddToCartSection({ product }: AddToCartSectionProps) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined,
  )
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product.colors && product.colors.length > 0 ? product.colors[0] : undefined,
  )
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleDirectOrder = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto:\n\n*${product.name}*\nPreço: R$ ${product.price.toFixed(2)}${selectedSize ? `\nTamanho: ${selectedSize}` : ""}${selectedColor ? `\nCor: ${selectedColor}` : ""}`,
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
  }

  return (
    <div className="space-y-6">
      {/* Sizes */}
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3">Tamanhos disponíveis</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <Badge
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Colors */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3">Cores disponíveis</h3>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <Badge
                key={color}
                variant={selectedColor === color ? "default" : "outline"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-3">
        <Button size="lg" className="w-full text-base" onClick={handleAddToCart} disabled={product.stock <= 0}>
          {isAdded ? (
            <>
              <Check className="mr-2 h-5 w-5" />
              Adicionado ao Carrinho
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Adicionar ao Carrinho
            </>
          )}
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="w-full text-base bg-transparent"
          onClick={handleDirectOrder}
          disabled={product.stock <= 0}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Encomendar Agora
        </Button>

        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          Adicione produtos ao carrinho ou encomende diretamente via WhatsApp
        </p>
      </div>
    </div>
  )
}
