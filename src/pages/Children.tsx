
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Children = () => {
  const children = [
    {
      id: 1,
      name: "Emma Thompson",
      age: 4,
      class: "Butterflies",
      parent: "Sarah Thompson",
      contact: "(555) 123-4567",
      status: "Present"
    },
    {
      id: 2,
      name: "Liam Johnson",
      age: 5,
      class: "Rainbows",
      parent: "Michael Johnson",
      contact: "(555) 234-5678",
      status: "Present"
    },
    {
      id: 3,
      name: "Sophia Davis",
      age: 3,
      class: "Sunflowers",
      parent: "Jessica Davis",
      contact: "(555) 345-6789",
      status: "Absent"
    },
    {
      id: 4,
      name: "Noah Wilson",
      age: 4,
      class: "Butterflies",
      parent: "David Wilson",
      contact: "(555) 456-7890",
      status: "Present"
    },
    {
      id: 5,
      name: "Olivia Brown",
      age: 5,
      class: "Rainbows",
      parent: "Amanda Brown",
      contact: "(555) 567-8901",
      status: "Present"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <SidebarTrigger className="mb-2" />
            <h1 className="text-3xl font-bold text-gray-900">Children Management</h1>
            <p className="text-gray-600">Manage student profiles and information</p>
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle>Children List</CardTitle>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search children..."
                      className="pl-10 w-full sm:w-64"
                    />
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-gray-700">Photo</th>
                      <th className="text-left p-4 font-medium text-gray-700">Name</th>
                      <th className="text-left p-4 font-medium text-gray-700">Age</th>
                      <th className="text-left p-4 font-medium text-gray-700">Class</th>
                      <th className="text-left p-4 font-medium text-gray-700">Parent Name</th>
                      <th className="text-left p-4 font-medium text-gray-700">Contact</th>
                      <th className="text-left p-4 font-medium text-gray-700">Status</th>
                      <th className="text-left p-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {children.map((child, index) => (
                      <tr key={child.id} className="border-b hover:bg-gray-50 transition-colors animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                        <td className="p-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-600">
                              {child.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 font-medium text-gray-900">{child.name}</td>
                        <td className="p-4 text-gray-600">{child.age}</td>
                        <td className="p-4">
                          <Badge variant="secondary">{child.class}</Badge>
                        </td>
                        <td className="p-4 text-gray-600">{child.parent}</td>
                        <td className="p-4 text-gray-600">{child.contact}</td>
                        <td className="p-4">
                          <Badge variant={child.status === "Present" ? "default" : "destructive"}>
                            {child.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Link to="/children/profile">
                            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                              View Profile
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Children;
