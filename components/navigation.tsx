"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag, User, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SimpleThemeToggle } from "@/components/simple-theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-semibold">MarketHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/shop" className="text-sm hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/categories" className="text-sm hover:text-accent transition-colors">
              Categories
            </Link>
            <Link href="/suppliers" className="text-sm hover:text-accent transition-colors">
              Suppliers
            </Link>
            <Link href="/about" className="text-sm hover:text-accent transition-colors">
              About
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <SimpleThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/cart">
                <ShoppingBag className="w-4 h-4" />
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/account">
                <User className="w-4 h-4" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              <Link href="/shop" className="text-sm hover:text-accent transition-colors">
                Shop
              </Link>
              <Link href="/categories" className="text-sm hover:text-accent transition-colors">
                Categories
              </Link>
              <Link href="/suppliers" className="text-sm hover:text-accent transition-colors">
                Suppliers
              </Link>
              <Link href="/about" className="text-sm hover:text-accent transition-colors">
                About
              </Link>
              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <SimpleThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
