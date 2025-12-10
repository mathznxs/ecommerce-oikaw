import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface ErrorPageProps {
  searchParams: Promise<{ error?: string }>
}

export default async function AuthErrorPage({ searchParams }: ErrorPageProps) {
  const params = await searchParams

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-muted/20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-4xl font-bold tracking-tighter">OIKAW</h1>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="text-2xl">Erro na autenticação</CardTitle>
            <CardDescription>Algo deu errado durante o processo de autenticação</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {params.error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md border border-destructive/20">
                <p className="font-medium">Código do erro:</p>
                <p className="mt-1">{params.error}</p>
              </div>
            )}
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte.
            </p>
            <div className="flex gap-2">
              <Button asChild className="flex-1 bg-transparent" variant="outline">
                <Link href="/">Voltar ao Início</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/auth/login">Tentar Novamente</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
