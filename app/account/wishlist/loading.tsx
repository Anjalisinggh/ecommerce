import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function WishlistLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Skeleton className="h-8 w-32" />
          </div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i}>
              <div className="relative">
                <Skeleton className="aspect-square rounded-t-lg" />
                <Skeleton className="absolute top-2 right-2 w-8 h-8 rounded-full" />
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <Skeleton className="h-3 w-16 mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </div>

                <div className="flex items-center gap-1 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Skeleton key={j} className="w-3 h-3 rounded-sm" />
                    ))}
                  </div>
                  <Skeleton className="h-3 w-12" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Skeleton className="h-5 w-12" />
                  <Skeleton className="h-4 w-8" />
                </div>

                <div className="flex gap-2">
                  <Skeleton className="h-8 flex-1" />
                  <Skeleton className="h-8 w-8" />
                  <Skeleton className="h-8 w-8" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

