"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Package, ShoppingCart, BarChart3, Settings, Users, Plus, Store, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Dashboard", href: "/supplier", icon: LayoutDashboard },
  { name: "Products", href: "/supplier/products", icon: Package },
  { name: "Orders", href: "/supplier/orders", icon: ShoppingCart },
  { name: "Analytics", href: "/supplier/analytics", icon: BarChart3 },
  { name: "Customers", href: "/supplier/customers", icon: Users },
  { name: "Settings", href: "/supplier/settings", icon: Settings },
]

export function SupplierSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-card border-r border-border">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
            <Store className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h2 className="font-semibold">TechGear Pro</h2>
            <p className="text-xs text-muted-foreground">Supplier Portal</p>
          </div>
        </div>

        <Button className="w-full mb-6" asChild>
          <Link href="/supplier/products/new">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Link>
        </Button>

        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
