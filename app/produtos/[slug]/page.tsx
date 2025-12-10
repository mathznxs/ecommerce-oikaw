import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProductGallery } from "@/components/product-gallery"
import { ReviewSection } from "@/components/review-section"
import { AddToCartSection } from "@/components/add-to-cart-section"
import { createClient } from "@/lib/supabase/server"
import { Star } from "lucide-react"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const supabase = await createClient()

  // Fetch product
  const { data: product } = await supabase.from("products").select("*").eq("slug", slug).single()

  if (!product) {
    notFound()
  }

  // Fetch reviews with average rating
  const { data: reviews } = await supabase
    .from("reviews")
    .select("*")
    .eq("product_id", product.id)
    .order("created_at", { ascending: false })

  const averageRating = reviews?.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : null

  // Fetch related products
  const { data: relatedProducts } = await supabase
    .from("products")
    .select("*")
    .eq("category", product.category)
    .neq("id", product.id)
    .limit(4)

  // Get current user for review section
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Início
              </Link>
              <span>/</span>
              <Link href="/produtos" className="hover:text-foreground transition-colors">
                Produtos
              </Link>
              <span>/</span>
              <Link
                href={`/produtos?categoria=${product.category}`}
                className="hover:text-foreground transition-colors capitalize"
              >
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <ProductGallery images={product.images} productName={product.name} />

            {/* Product Info */}
            <div className="space-y-6">
              {product.featured && (
                <Badge variant="secondary" className="mb-2">
                  DESTAQUE
                </Badge>
              )}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-balance">{product.name}</h1>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{product.category}</p>
              </div>

              {/* Rating */}
              {averageRating && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="font-semibold">{averageRating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({reviews?.length} avaliações)</span>
                </div>
              )}

              {/* Price */}
              <div>
                <p className="text-4xl font-bold">R$ {product.price.toFixed(2)}</p>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">Sobre o produto</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <Separator />

              {/* Add to Cart Section */}
              <AddToCartSection product={product} />

              {/* Product Details */}
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <h3 className="font-semibold">Informações do produto</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Categoria</span>
                    <span className="text-foreground capitalize">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estoque</span>
                    <span className="text-foreground">
                      {product.stock > 0 ? `${product.stock} unidades` : "Indisponível"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-20">
            <ReviewSection productId={product.id} reviews={reviews || []} user={user} />
          </div>

          {/* Related Products */}
          {relatedProducts && relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Produtos Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => {
                  const ProductCard = require("@/components/product-card").ProductCard
                  return <ProductCard key={relatedProduct.id} product={relatedProduct} />
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
