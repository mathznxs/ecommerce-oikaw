import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/produtos/${product.slug}`}>
      <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.featured && (
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
              DESTAQUE
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="font-semibold text-balance leading-tight mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-lg font-bold">R$ {product.price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
