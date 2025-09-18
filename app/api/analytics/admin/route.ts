import { type NextRequest, NextResponse } from "next/server"

// Mock admin analytics endpoint
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const period = searchParams.get("period") || "30days"

  // Mock platform analytics data
  const platformData = {
    revenue: {
      total: 318700,
      growth: 14.2,
      data: [
        { month: "Jan", revenue: 45200 },
        { month: "Feb", revenue: 38800 },
        { month: "Mar", revenue: 52200 },
        { month: "Apr", revenue: 48800 },
        { month: "May", revenue: 62200 },
        { month: "Jun", revenue: 71100 },
      ],
    },
    orders: {
      total: 3189,
      growth: 11.8,
    },
    users: {
      customers: 2100,
      suppliers: 89,
      growth: 13.5,
    },
    topSuppliers: [
      { name: "TechGear Pro", revenue: 45670, orders: 234 },
      { name: "EcoWear", revenue: 32450, orders: 189 },
      { name: "FitTech", revenue: 28900, orders: 156 },
    ],
    categories: [
      { name: "Electronics", percentage: 45 },
      { name: "Clothing", percentage: 25 },
      { name: "Food & Beverage", percentage: 15 },
      { name: "Books & Media", percentage: 10 },
      { name: "Other", percentage: 5 },
    ],
  }

  return NextResponse.json(platformData)
}
