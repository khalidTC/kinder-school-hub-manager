
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const revenueData = [
  { name: "Tuition Fees", value: 12000, color: "#6a5acd" },
  { name: "Government Subsidies", value: 3500, color: "#3cb371" },
  { name: "Donations", value: 800, color: "#ffa500" },
  { name: "Extra Activities", value: 500, color: "#999999" },
];

const chartConfig = {
  tuition: {
    label: "Tuition Fees",
    color: "#6a5acd",
  },
  subsidies: {
    label: "Government Subsidies", 
    color: "#3cb371",
  },
  donations: {
    label: "Donations",
    color: "#ffa500",
  },
  activities: {
    label: "Extra Activities",
    color: "#999999",
  },
};

const RevenueAnalysis = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <BarChart className="w-6 h-6 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Revenue Analysis</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>
                  Analysis of revenue sources for this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={revenueData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {revenueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {revenueData.map((item) => (
                    <div key={item.name} className="text-center">
                      <div
                        className="w-4 h-4 rounded mx-auto mb-2"
                        style={{ backgroundColor: item.color }}
                      />
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-lg font-bold">${item.value.toLocaleString()}</p>
                    </div>
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

export default RevenueAnalysis;
