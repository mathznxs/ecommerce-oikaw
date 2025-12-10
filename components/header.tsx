"use client"

import Link from "next/link"
import { Menu, User, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CartDrawer } from "@/components/cart-drawer"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith("/admin")

  const categories = [
    { name: "Camisetas", href: "/produtos?categoria=camisetas" },
    { name: "Moletons", href: "/produtos?categoria=moletons" },
    { name: "Calças", href: "/produtos?categoria=calcas" },
    { name: "Bonés", href: "/produtos?categoria=bones" },
    { name: "Acessórios", href: "/produtos?categoria=acessorios" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tighter">OIKAW</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <CartDrawer />

          {isAdminPage && (
            <Link href="/admin">
              <Button variant="ghost" size="icon">
                <Shield className="h-5 w-5" />
                <span className="sr-only">Admin</span>
              </Button>
            </Link>
          )}

          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Perfil</span>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {category.name}
                  </Link>
                ))}
                {isAdminPage && (
                  <Link href="/admin" className="text-lg font-medium transition-colors hover:text-primary">
                    Dashboard Admin
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
