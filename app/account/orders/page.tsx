import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Package, Truck, CheckCircle, Eye, Download } from "lucide-react"

// Mock orders data
const orders = [
  {
    id: "ORD-2024-001234",
    date: "January 15, 2024",
    status: "processing",
    total: 150.36,
    items: [
      {
        name: "Wireless Bluetooth Headphones",
        quantity: 1,
        price: 79.99,
        image: "/wireless-headphones.png",
      },
      {
        name: "Organic Cotton T-Shirt",
        quantity: 2,
        price: 24.99,
        image: "/cotton-tshirt.png",
      },
    ],
    estimatedDelivery: "January 22-24, 2024",
  },
  {
    id: "ORD-2024-001189",
    date: "January 8, 2024",
    status: "shipped",
    total: 199.99,
    items: [
      {
        name: "Smart Fitness Watch",
        quantity: 1,
        price: 199.99,
        image: "/fitness-watch.png",
      },
    ],
    estimatedDelivery: "January 15-17, 2024",
    trackingNumber: "1Z999AA1234567890",
  },
  {
    id: "ORD-2024-001156",
    date: "December 28, 2023",
    status: "delivered",
    total: 56.97,
    items: [
      {
        name: "Artisan Coffee Beans",
        quantity: 3,
        price: 18.99,
        image: "/pile-of-coffee-beans.png",
      },
    ],
    deliveredDate: "January 3, 2024",
  },
]

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Orders</h1>
          <p className="text-muted-foreground">Track and manage your order history</p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{order.id}</CardTitle>
                    <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge
                      variant={
                        order.status === "delivered" ? "default" : order.status === "shipped" ? "secondary" : "outline"
                      }
                    >
                      {order.status === "processing" && <Package className="w-3 h-3 mr-1" />}
                      {order.status === "shipped" && <Truck className="w-3 h-3 mr-1" />}
                      {order.status === "delivered" && <CheckCircle className="w-3 h-3 mr-1" />}
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                    <span className="font-semibold">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Order Items */}
                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-border">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Qty: {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Order Status Info */}
                <div className="flex items-center justify-between">
                  <div>
                    {order.status === "processing" && (
                      <p className="text-sm text-muted-foreground">Estimated delivery: {order.estimatedDelivery}</p>
                    )}
                    {order.status === "shipped" && (
                      <div>
                        <p className="text-sm text-muted-foreground">Estimated delivery: {order.estimatedDelivery}</p>
                        <p className="text-sm font-medium">Tracking: {order.trackingNumber}</p>
                      </div>
                    )}
                    {order.status === "delivered" && (
                      <p className="text-sm text-muted-foreground">Delivered on {order.deliveredDate}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    {order.status === "shipped" && (
                      <Button variant="outline" size="sm">
                        <Truck className="w-4 h-4 mr-2" />
                        Track Package
                      </Button>
                    )}
                    {order.status === "delivered" && (
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download Receipt
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {orders.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
              <p className="text-muted-foreground mb-4">Start shopping to see your orders here</p>
              <Button asChild>
                <a href="/shop">Browse Products</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
