
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit, Phone, Mail, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ChildProfile = () => {
  const childData = {
    name: "Emma Thompson",
    age: 4,
    gender: "Female",
    class: "Butterflies",
    dateOfBirth: "March 15, 2020",
    address: "123 Maple Street, Springfield, IL 62701",
    parent: {
      name: "Sarah Thompson",
      relationship: "Mother",
      phone: "(555) 123-4567",
      email: "sarah.thompson@email.com",
      occupation: "Teacher"
    },
    emergency: {
      name: "John Thompson",
      relationship: "Father",
      phone: "(555) 987-6543"
    },
    health: {
      allergies: ["Peanuts", "Dairy"],
      medications: "None",
      conditions: "None",
      dietaryRestrictions: "Lactose-free meals"
    },
    enrollment: {
      startDate: "September 1, 2023",
      status: "Active"
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <SidebarTrigger className="mb-2" />
            <div className="flex items-center gap-4 mb-4">
              <Link to="/children">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Children
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Child Profile</h1>
                <p className="text-gray-600">View and manage child information</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Summary */}
            <Card className="lg:col-span-1 animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {childData.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{childData.name}</h2>
                <Badge className="mb-4">{childData.class}</Badge>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Age:</strong> {childData.age} years old</p>
                  <p><strong>Gender:</strong> {childData.gender}</p>
                  <p><strong>Date of Birth:</strong> {childData.dateOfBirth}</p>
                  <p><strong>Status:</strong> 
                    <Badge variant="default" className="ml-2">{childData.enrollment.status}</Badge>
                  </p>
                </div>
                <Button className="w-full mt-4 hover:scale-105 transition-transform">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Parent Information */}
              <Card className="animate-fade-in" style={{animationDelay: "100ms"}}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Parent Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Primary Contact</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> {childData.parent.name}</p>
                        <p><strong>Relationship:</strong> {childData.parent.relationship}</p>
                        <p><strong>Phone:</strong> {childData.parent.phone}</p>
                        <p><strong>Email:</strong> {childData.parent.email}</p>
                        <p><strong>Occupation:</strong> {childData.parent.occupation}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Emergency Contact</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> {childData.emergency.name}</p>
                        <p><strong>Relationship:</strong> {childData.emergency.relationship}</p>
                        <p><strong>Phone:</strong> {childData.emergency.phone}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Health Information */}
              <Card className="animate-fade-in" style={{animationDelay: "200ms"}}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Health Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Medical Details</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Medications:</strong> {childData.health.medications}</p>
                        <p><strong>Medical Conditions:</strong> {childData.health.conditions}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Allergies & Diet</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Allergies:</strong>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {childData.health.allergies.map((allergy, index) => (
                              <Badge key={index} variant="destructive" className="text-xs">
                                {allergy}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <p><strong>Dietary Restrictions:</strong> {childData.health.dietaryRestrictions}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enrollment Information */}
              <Card className="animate-fade-in" style={{animationDelay: "300ms"}}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Enrollment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Enrollment Date:</strong> {childData.enrollment.startDate}</p>
                    <p><strong>Address:</strong> {childData.address}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ChildProfile;
