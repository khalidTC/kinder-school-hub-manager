
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Download } from "lucide-react";

const Reports = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <BarChart className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
                <CardDescription>
                  Access various reports and analytics for the kindergarten
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="daily" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="daily">Daily Reports</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly Summary</TabsTrigger>
                    <TabsTrigger value="attendance">Attendance CSV</TabsTrigger>
                    <TabsTrigger value="development">Child Development</TabsTrigger>
                    <TabsTrigger value="financial">Financial Reports</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="daily" className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Daily Activity Report</h3>
                      <p className="text-sm text-gray-600 mb-4">Generate comprehensive daily reports including attendance, activities, and incidents.</p>
                      <Button>
                        <Download className="w-4 h-4 mr-2" />
                        Download Today's Report
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="weekly" className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Weekly & Monthly Summary</h3>
                      <p className="text-sm text-gray-600 mb-4">Comprehensive summary reports covering weekly and monthly activities.</p>
                      <div className="space-x-2">
                        <Button>
                          <Download className="w-4 h-4 mr-2" />
                          Weekly Report
                        </Button>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Monthly Report
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="attendance" className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Attendance Reports</h3>
                      <p className="text-sm text-gray-600 mb-4">Export attendance data in CSV format for external analysis.</p>
                      <Button>
                        <Download className="w-4 h-4 mr-2" />
                        Export Attendance CSV
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="development" className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Child Development Reports</h3>
                      <p className="text-sm text-gray-600 mb-4">Detailed reports on each child's developmental progress and milestones.</p>
                      <Button>
                        <Download className="w-4 h-4 mr-2" />
                        Generate Development Report
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="financial" className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Financial Reports</h3>
                      <p className="text-sm text-gray-600 mb-4">Comprehensive financial analysis including revenue, expenses, and profit/loss statements.</p>
                      <div className="space-x-2">
                        <Button>
                          <Download className="w-4 h-4 mr-2" />
                          Monthly Financial
                        </Button>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Annual Report
                        </Button>
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

export default Reports;
