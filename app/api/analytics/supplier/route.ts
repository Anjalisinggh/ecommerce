import { type NextRequest, NextResponse } from "next/server"

// Mock supplier analytics endpoint
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const supplierId = searchParams.get("supplierId")
  const period = searchParams.get("period") || "30days"

  // Mock analytics data
  const analyticsData = {
    revenue: {
      total: 31400,
      growth: 12.5,
      data: [
        { month: "Jan", revenue: 4200 },
        { month: "Feb", revenue: 3800 },
        { month: "Mar", revenue: 5200 },
        { month: "Apr", revenue: 4800 },
        { month: "May", revenue: 6200 },
        { month: "Jun", revenue: 7100 },
      ],
    },
    orders: {
      total: 316,
      growth: 8.2,
    },
    customers: {
      total: 1247,
      growth: 15.3,
    },
    conversionRate: {
      rate: 3.2,
      growth: -0.5,
    },
    topProducts: [
      { name: "Wireless Headphones", sales: 45, revenue: 3599.55 },
      { name: "Cotton T-Shirt", sales: 32, revenue: 799.68 },
      { name: "Fitness Watch", sales: 28, revenue: 5599.72 },
    ],
  }

  return NextResponse.json(analyticsData)
}
