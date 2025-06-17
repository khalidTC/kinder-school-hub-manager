
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Activity, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { id: 1, name: "Yoga", description: "Weekly yoga sessions for all age groups", participants: 25 },
  { id: 2, name: "Speech Therapy", description: "Individual speech development sessions", participants: 8 },
  { id: 3, name: "Art Class", description: "Creative art activities and projects", participants: 30 },
];

const Services = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="w-6 h-6 text-purple-600" />
                <h1 className="text-2xl font-bold text-gray-900">Services</h1>
              </div>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link to="/services/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Service
                </Link>
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Service Overview</CardTitle>
                <CardDescription>
                  Manage all kindergarten services and activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <Card key={service.id} className="border-l-4 border-l-purple-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Participants: {service.participants}</span>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
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

export default Services;
