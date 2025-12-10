import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ArrowRight } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function HomePage() {
  const supabase = await createClient()

  // Fetch featured products
  const { data: featuredProducts } = await supabase.from("products").select("*").eq("featured", true).limit(4)

  // Fetch products by category for showcase
  const { data: newArrivals } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-10" />
          <Image src="/urban-streetwear-youth-culture.jpg" alt="Hero" fill className="object-cover" priority />
          <div className="relative z-20 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-balance">
              Autêntico.
              <br />
              <span className="text-primary">Urbano.</span> Original.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
              Descubra peças que traduzem a essência das ruas. Streetwear brasileiro para jovens que vivem a cultura
              urbana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base">
                <Link href="/produtos">
                  Explorar Coleção
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                <Link href="/produtos?categoria=camisetas">Ver Camisetas</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Destaques</h2>
              <p className="text-muted-foreground leading-relaxed">As peças mais desejadas da temporada</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/produtos">
                Ver Tudo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Category Banners */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">Explore por Categoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Camisetas */}
            <Link href="/produtos?categoria=camisetas" className="group relative h-80 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10" />
              <Image
                src="/streetwear-tshirts.jpg"
                alt="Camisetas"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-3xl font-bold mb-2">Camisetas</h3>
                <p className="text-muted-foreground mb-3">Design gráfico exclusivo</p>
                <Button variant="secondary" size="sm">
                  Explorar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>

            {/* Moletons */}
            <Link href="/produtos?categoria=moletons" className="group relative h-80 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10" />
              <Image
                src="/streetwear-hoodies.jpg"
                alt="Moletons"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-3xl font-bold mb-2">Moletons</h3>
                <p className="text-muted-foreground mb-3">Conforto e estilo</p>
                <Button variant="secondary" size="sm">
                  Explorar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>

            {/* Calças - Full Width */}
            <Link
              href="/produtos?categoria=calcas"
              className="group relative h-80 overflow-hidden rounded-lg md:col-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10" />
              <Image
                src="/streetwear-cargo-pants.jpg"
                alt="Calças"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-3xl font-bold mb-2">Calças & Cargos</h3>
                <p className="text-muted-foreground mb-3">Mobilidade e atitude</p>
                <Button variant="secondary" size="sm">
                  Explorar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Novidades</h2>
              <p className="text-muted-foreground leading-relaxed">Recém chegados no catálogo</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/produtos">
                Ver Tudo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card border-y">
          <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
              Faça Parte da Cultura Oikaw
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
              Siga a gente nas redes sociais e fique por dentro dos lançamentos, drops exclusivos e a vibe das ruas.
            </p>
            <Button size="lg" asChild>
              <Link href="#">Seguir no Instagram</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
