import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"

interface ProductsPageProps {
  searchParams: Promise<{ categoria?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const category = params.categoria

  const supabase = await createClient()

  let query = supabase.from("products").select("*").order("created_at", { ascending: false })

  if (category) {
    query = query.eq("category", category)
  }

  const { data: products } = await query

  const categories = [
    { name: "Todos", value: null },
    { name: "Camisetas", value: "camisetas" },
    { name: "Moletons", value: "moletons" },
    { name: "Calças", value: "calcas" },
    { name: "Bonés", value: "bones" },
    { name: "Acessórios", value: "acessorios" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : "Todos os Produtos"}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {products?.length || 0} {products?.length === 1 ? "produto encontrado" : "produtos encontrados"}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant={category === cat.value || (!category && !cat.value) ? "default" : "outline"}
              asChild
              className="whitespace-nowrap"
            >
              <a href={cat.value ? `/produtos?categoria=${cat.value}` : "/produtos"}>{cat.name}</a>
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
