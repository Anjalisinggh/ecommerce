import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Target, Users, Heart, Award, Globe, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            About MarketHub
          </h2>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            We're building the future of e-commerce by connecting buyers and sellers in a powerful, 
            user-friendly marketplace that empowers everyone to succeed.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MarketHub was born from a simple idea: e-commerce should be accessible to everyone. 
                  Whether you're a small business owner looking to reach new customers or a customer 
                  searching for unique products, we believe technology should bring people together.
                </p>
                <p>
                  Founded in 2024, we've been on a mission to democratize online commerce by providing 
                  powerful tools that level the playing field. Our platform combines cutting-edge 
                  technology with intuitive design to create an experience that works for everyone.
                </p>
              </div>
            </div>
            <div className="bg-accent/5 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">1000+</div>
                  <div className="text-sm text-muted-foreground">Active Sellers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">1M+</div>
                  <div className="text-sm text-muted-foreground">Products Listed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at MarketHub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We continuously push the boundaries of what's possible in e-commerce technology.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We foster connections between buyers and sellers, building a thriving marketplace ecosystem.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Security and transparency are at the heart of every transaction on our platform.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We make e-commerce accessible to everyone, regardless of technical expertise or business size.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
          <p className="text-xl text-muted-foreground mb-8">
            To empower entrepreneurs and delight customers by creating the most intuitive, 
            powerful, and accessible e-commerce platform in the world.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Global Reach</h4>
              <p className="text-sm text-muted-foreground">
                Connect with customers worldwide through our international marketplace
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">
                Experience the speed and reliability that keeps your business moving forward
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Quality First</h4>
              <p className="text-sm text-muted-foreground">
                Every feature is designed with quality and user experience as top priorities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
          <p className="text-muted-foreground mb-8">
            Whether you're looking to sell your products or find amazing deals, 
            MarketHub is the place for you. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/shop">Start Shopping</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/supplier">Become a Seller</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 MarketHub. The complete multi-vendor eCommerce platform.
          </p>
        </div>
      </footer>
    </div>
  )
}
