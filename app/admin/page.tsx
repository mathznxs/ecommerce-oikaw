import { redirect } from "next/navigation"
import { isAdmin } from "@/lib/admin"
import { createClient } from "@/lib/supabase/server"
import { AdminDashboard } from "@/components/admin-dashboard"
import { Header } from "@/components/header"

export default async function AdminPage() {
  const admin = await isAdmin()

  if (!admin) {
    redirect("/auth/login")
  }

  const supabase = await createClient()

  // Fetch all products
  const { data: products } = await supabase.from("products").select("*").order("created_at", { ascending: false })

  // Fetch product stats
  const { count: totalProducts } = await supabase.from("products").select("*", { count: "exact", head: true })

  const { count: totalReviews } = await supabase.from("reviews").select("*", { count: "exact", head: true })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <AdminDashboard products={products || []} totalProducts={totalProducts || 0} totalReviews={totalReviews || 0} />
      </main>
    </div>
  )
}
