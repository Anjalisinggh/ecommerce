import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye, Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock wishlist data
const wishlistItems = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "/wireless-headphones.png",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    brand: "AudioTech"
  },
  {
    id: "2", 
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "/fitness-watch.png",
    rating: 4.8,
    reviews: 89,
    inStock: true,
    brand: "FitTech"
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    image: "/cotton-tshirt.png", 
    rating: 4.2,
    reviews: 256,
    inStock: false,
    brand: "EcoWear"
  },
  {
    id: "4",
    name: "Artisan Coffee Beans",
    price: 18.99,
    image: "/pile-of-coffee-beans.png",
    rating: 4.7,
    reviews: 67,
    inStock: true,
    brand: "CoffeeCo"
  }
]

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/account">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Account
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">Save items you love for later</p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Wishlist button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                  >
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                  </Button>

                  {/* Out of stock overlay */}
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="mb-2">
                    <p className="text-sm text-muted-foreground">{item.brand}</p>
                    <h3 className="font-medium line-clamp-2">{item.name}</h3>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Heart
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(item.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">
                      {item.rating} ({item.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1" 
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
              <p className="text-muted-foreground mb-4">
                Start adding items you love to your wishlist
              </p>
              <Button asChild>
                <Link href="/shop">Browse Products</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Bulk Actions */}
        {wishlistItems.length > 0 && (
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add All to Cart
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} in your wishlist
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

