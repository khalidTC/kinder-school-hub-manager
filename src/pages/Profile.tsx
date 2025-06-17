
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6 text-gray-600" />
              <h1 className="text-2xl font-bold text-gray-900">Account Profile</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your full name" defaultValue="John Smith" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" defaultValue="john.smith@kindergarten.edu" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="password">New Password</Label>
                    <Input id="password" type="password" placeholder="Leave blank to keep current password" />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Save Changes
                  </Button>
                  <Button variant="outline">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Actions</CardTitle>
                <CardDescription>
                  Manage your session and account access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={handleLogout}
                  variant="destructive" 
                  className="w-full md:w-auto"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Log Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Profile;
