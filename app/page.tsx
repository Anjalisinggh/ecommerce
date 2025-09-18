import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Store, Shield, Users, TrendingUp, Package } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-accent-foreground" />
              </div>
              <h1 className="text-xl font-semibold text-foreground">MarketHub</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            The complete platform to build your marketplace
          </h2>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Connect buyers and sellers in a powerful multi-vendor platform. Manage products, process orders, and grow
            your business with our comprehensive tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/shop">Start Shopping</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/supplier/register">Become a Seller</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Role Selection Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Choose Your Experience</h3>
            <p className="text-muted-foreground">Access the platform that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Customer Panel */}
            <Card className="relative overflow-hidden group hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Customer Portal</CardTitle>
                <CardDescription>Browse products, manage your cart, track orders, and leave reviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Package className="w-4 h-4" />
                    Product browsing & search
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShoppingBag className="w-4 h-4" />
                    Shopping cart & wishlist
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    Order tracking & history
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/shop">Browse Products</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Supplier Panel */}
            <Card className="relative overflow-hidden group hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Store className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Supplier Dashboard</CardTitle>
                <CardDescription>Manage your products, track sales, and grow your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Package className="w-4 h-4" />
                    Product management
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    Sales analytics
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShoppingBag className="w-4 h-4" />
                    Order management
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/supplier">Supplier Portal</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Admin Panel */}
            <Card className="relative overflow-hidden group hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Admin Control</CardTitle>
                <CardDescription>Oversee the entire platform, manage users and suppliers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    User management
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Store className="w-4 h-4" />
                    Supplier oversight
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    Platform analytics
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/admin">Admin Access</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Platform Features</h3>
            <p className="text-muted-foreground">Everything you need for a successful marketplace</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Product Management</h4>
              <p className="text-sm text-muted-foreground">Easy product listing and inventory control</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Order Processing</h4>
              <p className="text-sm text-muted-foreground">Streamlined checkout and order fulfillment</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Analytics</h4>
              <p className="text-sm text-muted-foreground">Detailed insights and performance metrics</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">User Management</h4>
              <p className="text-sm text-muted-foreground">Comprehensive user and role management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-accent rounded-md flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="font-semibold">MarketHub</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 MarketHub. The complete multi-vendor eCommerce platform.
          </p>
        </div>
      </footer>
    </div>
  )
}
