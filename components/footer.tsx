import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">OIKAW</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Streetwear autêntico para quem vive a cultura urbana.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold">Loja</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/produtos?categoria=camisetas" className="hover:text-foreground transition-colors">
                  Camisetas
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=moletons" className="hover:text-foreground transition-colors">
                  Moletons
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=calcas" className="hover:text-foreground transition-colors">
                  Calças
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=bones" className="hover:text-foreground transition-colors">
                  Bonés
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Envios
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Trocas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Redes Sociais</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Oikaw. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
