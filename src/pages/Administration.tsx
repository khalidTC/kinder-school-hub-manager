
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Users, Calendar, MessageSquare, Shield } from "lucide-react";

const Administration = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <Settings className="w-6 h-6 text-gray-600" />
              <h1 className="text-2xl font-bold text-gray-900">Administration</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Administration Panel</CardTitle>
                <CardDescription>
                  Manage staff, settings, and communication tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="staff" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="staff">Staff Management</TabsTrigger>
                    <TabsTrigger value="calendar">Calendar / Events</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                    <TabsTrigger value="communication">Communication</TabsTrigger>
                    <TabsTrigger value="parent-access">Parent Access</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="staff" className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold">Staff Management</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">Manage staff members, roles, and permissions.</p>
                      <div className="space-x-2">
                        <Button>Add New Staff</Button>
                        <Button variant="outline">View All Staff</Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="calendar" className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <Calendar className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold">Calendar & Events</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">Manage school calendar, events, and important dates.</p>
                      <div className="space-x-2">
                        <Button>Add Event</Button>
                        <Button variant="outline">View Calendar</Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="settings" className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <Settings className="w-5 h-5 text-purple-600" />
                        <h3 className="font-semibold">System Settings</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">Configure system preferences and general settings.</p>
                      <div className="space-x-2">
                        <Button>General Settings</Button>
                        <Button variant="outline">Security Settings</Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="communication" className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <MessageSquare className="w-5 h-5 text-orange-600" />
                        <h3 className="font-semibold">Communication Tools</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">Manage communication with parents and staff.</p>
                      <div className="space-x-2">
                        <Button>Send Announcement</Button>
                        <Button variant="outline">Message History</Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="parent-access" className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <Shield className="w-5 h-5 text-red-600" />
                        <h3 className="font-semibold">Parent Access Settings</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">Configure parent portal access and permissions.</p>
                      <div className="space-x-2">
                        <Button>Access Settings</Button>
                        <Button variant="outline">Parent Accounts</Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Administration;
