import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Package, Truck, CheckCircle, MapPin, Download, MessageCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock order data
const orders = {
  "ORD-2024-001234": {
    id: "ORD-2024-001234",
    date: "January 15, 2024",
    status: "shipped",
    total: 150.36,
    subtotal: 129.97,
    shipping: 9.99,
    tax: 10.4,
    trackingNumber: "1Z999AA1234567890",
    carrier: "UPS",
    estimatedDelivery: "January 22-24, 2024",
    items: [
      {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        quantity: 1,
        price: 79.99,
        image: "/wireless-headphones.png",
        supplier: "TechGear Pro",
      },
      {
        id: 2,
        name: "Organic Cotton T-Shirt",
        quantity: 2,
        price: 24.99,
        image: "/cotton-tshirt.png",
        supplier: "EcoWear",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      apartment: "Apt 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    },
    billingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      apartment: "Apt 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    },
    timeline: [
      {
        status: "Order Placed",
        date: "January 15, 2024 at 2:30 PM",
        description: "Your order has been received and is being processed",
        completed: true,
      },
      {
        status: "Payment Confirmed",
        date: "January 15, 2024 at 2:31 PM",
        description: "Payment has been successfully processed",
        completed: true,
      },
      {
        status: "Processing",
        date: "January 16, 2024 at 9:00 AM",
        description: "Your order is being prepared by our suppliers",
        completed: true,
      },
      {
        status: "Shipped",
        date: "January 18, 2024 at 3:45 PM",
        description: "Your order has been shipped and is on its way",
        completed: true,
      },
      {
        status: "Out for Delivery",
        date: "Expected January 22, 2024",
        description: "Your order is out for delivery",
        completed: false,
      },
      {
        status: "Delivered",
        date: "Expected January 22, 2024",
        description: "Your order has been delivered",
        completed: false,
      },
    ],
  },
}

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = orders[params.id as keyof typeof orders]

  if (!order) {
    notFound()
  }

  const completedSteps = order.timeline.filter((step) => step.completed).length
  const progressPercentage = (completedSteps / order.timeline.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/account/orders"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Orders
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Order {order.id}</h1>
              <p className="text-muted-foreground">Placed on {order.date}</p>
            </div>
            <Badge
              variant={order.status === "delivered" ? "default" : order.status === "shipped" ? "secondary" : "outline"}
              className="text-sm"
            >
              {order.status === "processing" && <Package className="w-3 h-3 mr-1" />}
              {order.status === "shipped" && <Truck className="w-3 h-3 mr-1" />}
              {order.status === "delivered" && <CheckCircle className="w-3 h-3 mr-1" />}
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Order Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {completedSteps} of {order.timeline.length} steps
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>

                <div className="space-y-4">
                  {order.timeline.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-current" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${step.completed ? "text-foreground" : "text-muted-foreground"}`}>
                            {step.status}
                          </h4>
                          <span className="text-sm text-muted-foreground">{step.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tracking Information */}
            {order.trackingNumber && (
              <Card>
                <CardHeader>
                  <CardTitle>Tracking Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">Tracking Number</p>
                      <p className="text-sm text-muted-foreground">{order.trackingNumber}</p>
                      <p className="text-sm text-muted-foreground">Carrier: {order.carrier}</p>
                    </div>
                    <Button variant="outline">
                      <Truck className="w-4 h-4 mr-2" />
                      Track Package
                    </Button>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Estimated delivery: <span className="font-medium">{order.estimatedDelivery}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Items in this Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-border">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">by {item.supplier}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-muted-foreground">Qty: {item.quantity}</span>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                        <Button variant="outline" size="sm">
                          Buy Again
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>${order.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${order.tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Receipt
                </Button>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  {order.shippingAddress.apartment && <p>{order.shippingAddress.apartment}</p>}
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Billing Address */}
            <Card>
              <CardHeader>
                <CardTitle>Billing Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">{order.billingAddress.name}</p>
                  <p>{order.billingAddress.address}</p>
                  {order.billingAddress.apartment && <p>{order.billingAddress.apartment}</p>}
                  <p>
                    {order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.zipCode}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Package className="w-4 h-4 mr-2" />
                  Return Items
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
