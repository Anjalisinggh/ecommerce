import { type NextRequest, NextResponse } from "next/server"

// Mock order creation endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, shippingAddress, billingAddress, paymentDetails, total } = body

    // Generate order ID
    const orderId = `ORD-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`

    // Mock order creation
    const order = {
      id: orderId,
      status: "confirmed",
      items,
      shippingAddress,
      billingAddress,
      paymentDetails: {
        ...paymentDetails,
        cardNumber: paymentDetails.cardNumber.replace(/\d(?=\d{4})/g, "*"), // Mask card number
      },
      total,
      subtotal: total * 0.85, // Mock calculation
      shipping: total * 0.07,
      tax: total * 0.08,
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    }

    return NextResponse.json({
      success: true,
      order,
    })
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ error: "Order creation failed" }, { status: 500 })
  }
}
