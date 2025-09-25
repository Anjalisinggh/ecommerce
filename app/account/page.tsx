import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  User, 
  Package, 
  Heart, 
  Settings, 
  CreditCard, 
  MapPin, 
  Bell, 
  Shield,
  ShoppingBag,
  TrendingUp,
  Star,
  Edit,
  LogOut
} from "lucide-react"
import Link from "next/link"

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder-user.jpg",
  joinDate: "January 2024",
  totalOrders: 12,
  totalSpent: 1245.67,
  loyaltyPoints: 1245,
  tier: "Gold",
  recentOrders: [
    {
      id: "ORD-2024-001234",
      date: "January 15, 2024",
      status: "processing",
      total: 150.36,
      itemCount: 3
    },
    {
      id: "ORD-2024-001189", 
      date: "January 8, 2024",
      status: "shipped",
      total: 199.99,
      itemCount: 1
    }
  ],
  wishlistCount: 8,
  addresses: 2,
  paymentMethods: 3
}

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Account</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={userData.avatar} alt={userData.name} />
                    <AvatarFallback>
                      {userData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl">{userData.name}</CardTitle>
                <p className="text-muted-foreground">{userData.email}</p>
                <Badge variant="secondary" className="mt-2">
                  {userData.tier} Member
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Member since</p>
                  <p className="font-medium">{userData.joinDate}</p>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">{userData.totalOrders}</p>
                    <p className="text-sm text-muted-foreground">Orders</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">${userData.totalSpent.toFixed(0)}</p>
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                  </div>
                </div>

                <Separator />

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Loyalty Points</p>
                  <p className="text-2xl font-bold">{userData.loyaltyPoints.toLocaleString()}</p>
                </div>

                <Button className="w-full" variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" asChild>
                    <Link href="/account/orders">
                      <Package className="w-6 h-6" />
                      <span className="text-sm">Orders</span>
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" asChild>
                    <Link href="/account/wishlist">
                      <Heart className="w-6 h-6" />
                      <span className="text-sm">Wishlist</span>
                      <Badge variant="secondary" className="text-xs">{userData.wishlistCount}</Badge>
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" asChild>
                    <Link href="/shop">
                      <ShoppingBag className="w-6 h-6" />
                      <span className="text-sm">Shop</span>
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    <span className="text-sm">Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Orders</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/account/orders">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={order.status === "delivered" ? "default" : order.status === "shipped" ? "secondary" : "outline"}>
                          {order.status}
                        </Badge>
                        <p className="font-medium mt-1">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">{order.itemCount} item(s)</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/account/settings">
                      <User className="w-4 h-4 mr-3" />
                      Personal Information
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <MapPin className="w-4 h-4 mr-3" />
                    Addresses ({userData.addresses})
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="w-4 h-4 mr-3" />
                    Payment Methods ({userData.paymentMethods})
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/account/settings">
                      <Bell className="w-4 h-4 mr-3" />
                      Notifications
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-3" />
                    Change Password
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="w-4 h-4 mr-3" />
                    Privacy Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Star className="w-4 h-4 mr-3" />
                    Loyalty Program
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                    <LogOut className="w-4 h-4 mr-3" />
                    Sign Out
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Loyalty Program */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Loyalty Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{userData.tier} Member</p>
                    <p className="text-sm text-muted-foreground">{userData.loyaltyPoints} points earned</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Next tier: Platinum</p>
                    <p className="text-sm font-medium">755 points to go</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
