
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const incomeData = [
  { month: "Jan", income: 45000, expenses: 32000 },
  { month: "Feb", income: 48000, expenses: 34000 },
  { month: "Mar", income: 52000, expenses: 36000 },
  { month: "Apr", income: 47000, expenses: 33000 },
  { month: "May", income: 55000, expenses: 38000 },
  { month: "Jun", income: 58000, expenses: 40000 },
];

const expenseData = [
  { category: "Salaries", amount: 25000 },
  { category: "Facilities", amount: 8000 },
  { category: "Supplies", amount: 4000 },
  { category: "Food", amount: 3000 },
];

const FinanceOverview = () => {
  const totalIncome = incomeData.reduce((sum, month) => sum + month.income, 0);
  const totalExpenses = incomeData.reduce((sum, month) => sum + month.expenses, 0);
  const netProfit = totalIncome - totalExpenses;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Finance Overview</h1>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Income</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    ${totalIncome.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                  <TrendingDown className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">
                    ${totalExpenses.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +8% from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                  <DollarSign className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">
                    ${netProfit.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +15% from last period
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Income vs Expenses</CardTitle>
                  <CardDescription>Monthly comparison over 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={incomeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="income" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        name="Income"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="expenses" 
                        stroke="#ef4444" 
                        strokeWidth={2}
                        name="Expenses"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expense Breakdown</CardTitle>
                  <CardDescription>Current month expenses by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={expenseData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="amount" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default FinanceOverview;
