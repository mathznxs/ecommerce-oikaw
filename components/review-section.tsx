"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { createClient } from "@/lib/supabase/client"
import type { Review } from "@/lib/types"
import { cn } from "@/lib/utils"

interface ReviewSectionProps {
  productId: string
  reviews: Review[]
  user: any
}

export function ReviewSection({ productId, reviews, user }: ReviewSectionProps) {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      router.push("/auth/login")
      return
    }

    setIsSubmitting(true)
    setError(null)

    const supabase = createClient()

    const { error: submitError } = await supabase.from("reviews").insert({
      product_id: productId,
      user_id: user.id,
      user_email: user.email,
      rating,
      comment,
    })

    if (submitError) {
      setError("Erro ao enviar avaliação. Tente novamente.")
      setIsSubmitting(false)
      return
    }

    setComment("")
    setRating(5)
    setIsSubmitting(false)
    router.refresh()
  }

  const averageRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : null

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Avaliações</h2>
          {averageRating && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="text-lg font-semibold">{averageRating}</span>
              </div>
              <span className="text-muted-foreground">
                ({reviews.length} {reviews.length === 1 ? "avaliação" : "avaliações"})
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Add Review Form */}
      <Card className="mb-8">
        <CardHeader>
          <h3 className="text-lg font-semibold">Deixe sua avaliação</h3>
          {!user && (
            <p className="text-sm text-muted-foreground">
              Você precisa estar logado para avaliar.{" "}
              <Button variant="link" asChild className="p-0 h-auto">
                <a href="/auth/login">Faça login aqui</a>
              </Button>
            </p>
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Rating Stars */}
            <div>
              <label className="text-sm font-medium mb-2 block">Sua avaliação</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    disabled={!user}
                    className="transition-colors disabled:opacity-50"
                  >
                    <Star
                      className={cn("h-8 w-8", star <= rating ? "fill-primary text-primary" : "text-muted-foreground")}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label htmlFor="comment" className="text-sm font-medium mb-2 block">
                Seu comentário
              </label>
              <Textarea
                id="comment"
                placeholder="Compartilhe sua experiência com este produto..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                disabled={!user || isSubmitting}
                rows={4}
                required
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" disabled={!user || isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Avaliação"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Separator className="mb-8" />

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">Nenhuma avaliação ainda. Seja o primeiro a avaliar!</p>
        ) : (
          reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold">{review.user_email}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(review.created_at).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < review.rating ? "fill-primary text-primary" : "text-muted-foreground",
                        )}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
