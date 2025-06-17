
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Bus, MapPin } from "lucide-react";

const transportRoutes = [
  {
    id: "A",
    name: "Route A",
    areas: ["Downtown", "City Center", "Main Street"],
    children: ["Emma Johnson", "Liam Smith", "Sofia Rodriguez"],
    driver: "John Doe",
    capacity: 15,
  },
  {
    id: "B",
    name: "Route B", 
    areas: ["Suburbs", "Park Avenue", "Oak Street"],
    children: ["Noah Wilson", "Olivia Brown", "Mason Davis"],
    driver: "Jane Smith",
    capacity: 20,
  },
  {
    id: "C",
    name: "Route C",
    areas: ["Westside", "Hill View", "Maple Lane"],
    children: ["Ava Martinez", "Ethan Anderson", "Isabella Garcia"],
    driver: "Mike Johnson",
    capacity: 12,
  },
];

const Transport = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <Bus className="w-6 h-6 text-yellow-600" />
              <h1 className="text-2xl font-bold text-gray-900">Transport</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Transport Overview</CardTitle>
                <CardDescription>
                  Manage bus routes and child assignments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {transportRoutes.map((route) => (
                    <Card key={route.id} className="border-l-4 border-l-yellow-500">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{route.name}</CardTitle>
                          <Badge variant="outline">
                            {route.children.length}/{route.capacity}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm text-gray-700 mb-2 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            Coverage Areas
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {route.areas.map((area, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm text-gray-700 mb-2">
                            Assigned Children ({route.children.length})
                          </h4>
                          <div className="space-y-1">
                            {route.children.map((child, index) => (
                              <div key={index} className="text-xs text-gray-600 bg-gray-50 p-1 rounded">
                                {child}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm text-gray-700 mb-1">Driver</h4>
                          <p className="text-sm text-gray-600">{route.driver}</p>
                        </div>

                        <Button variant="outline" size="sm" className="w-full">
                          Manage Assignments
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Transport;
