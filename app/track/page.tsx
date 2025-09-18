"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, Package, Truck, CheckCircle, MapPin, Clock } from "lucide-react"
import { useState } from "react"

// Mock tracking data
const trackingData = {
  "1Z999AA1234567890": {
    trackingNumber: "1Z999AA1234567890",
    carrier: "UPS",
    status: "In Transit",
    estimatedDelivery: "January 22, 2024 by 8:00 PM",
    currentLocation: "New York, NY Distribution Center",
    progress: 75,
    events: [
      {
        date: "January 20, 2024",
        time: "2:15 PM",
        location: "New York, NY",
        status: "Out for Delivery",
        description: "Package is out for delivery",
      },
      {
        date: "January 20, 2024",
        time: "8:30 AM",
        location: "New York, NY Distribution Center",
        status: "Arrived at Facility",
        description: "Package arrived at distribution center",
      },
      {
        date: "January 19, 2024",
        time: "11:45 PM",
        location: "Philadelphia, PA",
        status: "Departed Facility",
        description: "Package departed from Philadelphia facility",
      },
      {
        date: "January 19, 2024",
        time: "6:20 PM",
        location: "Philadelphia, PA Distribution Center",
        status: "Arrived at Facility",
        description: "Package arrived at Philadelphia distribution center",
      },
      {
        date: "January 18, 2024",
        time: "3:45 PM",
        location: "Origin Facility",
        status: "Shipped",
        description: "Package has been shipped",
      },
    ],
  },
}

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleTrack = () => {
    setIsSearching(true)
    // Simulate API call
    setTimeout(() => {
      const result = trackingData[trackingNumber as keyof typeof trackingData]
      setTrackingResult(result || null)
      setIsSearching(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Track Your Package</h1>
            <p className="text-muted-foreground">Enter your tracking number to see the latest updates</p>
          </div>

          {/* Tracking Search */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="tracking" className="sr-only">
                    Tracking Number
                  </Label>
                  <Input
                    id="tracking"
                    placeholder="Enter tracking number (e.g., 1Z999AA1234567890)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                  />
                </div>
                <Button onClick={handleTrack} disabled={!trackingNumber || isSearching}>
                  <Search className="w-4 h-4 mr-2" />
                  {isSearching ? "Tracking..." : "Track"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tracking Results */}
          {trackingResult && (
            <div className="space-y-6">
              {/* Package Status */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Package Status</CardTitle>
                    <Badge variant="secondary">{trackingResult.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Tracking Number</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{trackingResult.trackingNumber}</p>
                      </div>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Carrier</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{trackingResult.carrier}</p>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Estimated Delivery</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{trackingResult.estimatedDelivery}</p>
                      </div>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Current Location</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{trackingResult.currentLocation}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Delivery Progress</span>
                      <span className="text-sm text-muted-foreground">{trackingResult.progress}%</span>
                    </div>
                    <Progress value={trackingResult.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Tracking History */}
              <Card>
                <CardHeader>
                  <CardTitle>Tracking History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingResult.events.map((event: any, index: number) => (
                      <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          {index === 0 ? (
                            <CheckCircle className="w-4 h-4 text-accent-foreground" />
                          ) : (
                            <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{event.status}</h4>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">{event.date}</p>
                              <p className="text-sm text-muted-foreground">{event.time}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{event.description}</p>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{event.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {trackingNumber && !trackingResult && !isSearching && (
            <Card>
              <CardContent className="text-center py-12">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tracking Number Not Found</h3>
                <p className="text-muted-foreground mb-4">
                  Please check your tracking number and try again. It may take up to 24 hours for tracking information
                  to appear.
                </p>
                <Button variant="outline" onClick={() => setTrackingNumber("")}>
                  Try Another Number
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
