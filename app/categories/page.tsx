import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Laptop, Headphones, Watch, Shirt, Shovel as Shoe, Coffee, Book } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets and tech accessories",
    icon: Smartphone,
    productCount: 1247,
    image: "/electronics-category.jpg",
  },
  {
    id: "computers",
    name: "Computers & Laptops",
    description: "High-performance computing devices",
    icon: Laptop,
    productCount: 892,
    image: "/computers-category.jpg",
  },
  {
    id: "audio",
    name: "Audio & Headphones",
    description: "Premium sound equipment",
    icon: Headphones,
    productCount: 456,
    image: "/audio-category.jpg",
  },
  {
    id: "wearables",
    name: "Wearables",
    description: "Smart watches and fitness trackers",
    icon: Watch,
    productCount: 234,
    image: "/wearables-category.jpg",
  },
  {
    id: "clothing",
    name: "Clothing",
    description: "Fashion and apparel for everyone",
    icon: Shirt,
    productCount: 2156,
    image: "/clothing-category.jpg",
  },
  {
    id: "footwear",
    name: "Footwear",
    description: "Shoes and sneakers for all occasions",
    icon: Shoe,
    productCount: 678,
    image: "/footwear-category.jpg",
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    description: "Gourmet foods and specialty drinks",
    icon: Coffee,
    productCount: 543,
    image: "/food-category.jpg",
  },
  {
    id: "books",
    name: "Books & Media",
    description: "Books, magazines, and digital media",
    icon: Book,
    productCount: 1890,
    image: "/books-category.jpg",
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
          <p className="text-muted-foreground">Explore our wide range of product categories</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.id} href={`/categories/${category.id}`}>
                <Card className="group hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="p-0">
                    <div className="aspect-video overflow-hidden rounded-t-lg relative">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 bg-background/90 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {category.productCount}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
