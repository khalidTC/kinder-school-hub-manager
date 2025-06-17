
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard } from "lucide-react";

const payments = [
  { id: 1, child: "Emma Johnson", status: "Paid", dueDate: "2025-01-15", amount: 450 },
  { id: 2, child: "Liam Smith", status: "Pending", dueDate: "2025-01-15", amount: 450 },
  { id: 3, child: "Olivia Brown", status: "Overdue", dueDate: "2024-12-15", amount: 450 },
  { id: 4, child: "Noah Davis", status: "Paid", dueDate: "2025-01-15", amount: 450 },
  { id: 5, child: "Ava Wilson", status: "Pending", dueDate: "2025-01-15", amount: 450 },
];

const Payments = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Paid</Badge>;
      case "Pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "Overdue":
        return <Badge variant="secondary" className="bg-red-100 text-red-800">Overdue</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Tuition Payments</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Tuition Fee Payments</CardTitle>
                <CardDescription>
                  Manage and track tuition fee payments for all enrolled children
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Child</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.child}</TableCell>
                        <TableCell>{getStatusBadge(payment.status)}</TableCell>
                        <TableCell>{payment.dueDate}</TableCell>
                        <TableCell>${payment.amount}</TableCell>
                        <TableCell>
                          {payment.status !== "Paid" && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              Pay Now
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Payments;
