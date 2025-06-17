
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CalendarCheck, DollarSign, Calendar } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const summaryData = [
    { label: "Total Children", value: "120", icon: Users, color: "bg-blue-100 text-blue-600" },
    { label: "Today's Attendance", value: "95", icon: CalendarCheck, color: "bg-green-100 text-green-600" },
    { label: "Fees Collected", value: "$15,000", icon: DollarSign, color: "bg-yellow-100 text-yellow-600" },
    { label: "Upcoming Events", value: "3", icon: Calendar, color: "bg-purple-100 text-purple-600" }
  ];

  const attendanceData = [
    { date: "Mon", children: 88 },
    { date: "Tue", children: 92 },
    { date: "Wed", children: 85 },
    { date: "Thu", children: 95 },
    { date: "Fri", children: 78 },
    { date: "Sat", children: 45 },
    { date: "Sun", children: 40 }
  ];

  const revenueData = [
    { month: "Jan", amount: 12000 },
    { month: "Feb", amount: 15000 },
    { month: "Mar", amount: 18000 },
    { month: "Apr", amount: 16000 },
    { month: "May", amount: 20000 },
    { month: "Jun", amount: 22000 }
  ];

  const notifications = [
    "New enrollment application from Sarah Johnson",
    "Monthly financial report is ready for review",
    "Parent-teacher conference scheduled for next week"
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <SidebarTrigger className="mb-2" />
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening at your kindergarten today.</p>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {summaryData.map((item, index) => (
              <Card key={item.label} className="hover:shadow-lg transition-all duration-200 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{item.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="animate-fade-in" style={{animationDelay: "400ms"}}>
              <CardHeader>
                <CardTitle>Attendance Trends</CardTitle>
                <CardDescription>Daily attendance over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="children" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{animationDelay: "500ms"}}>
              <CardHeader>  
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>Monthly revenue over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Notifications */}
          <Card className="animate-fade-in" style={{animationDelay: "600ms"}}>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>Stay updated with the latest activities</CardDescription>
            </CardHeader>
            <CardContent>
              {notifications.length > 0 ? (
                <div className="space-y-3">
                  {notifications.map((notification, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <p className="text-sm text-gray-700">{notification}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No new notifications</p>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
