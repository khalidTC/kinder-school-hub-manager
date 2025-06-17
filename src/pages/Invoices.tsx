
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download } from "lucide-react";

const invoices = [
  { id: "INV-2025-001", date: "2025-01-01", amount: 450, child: "Emma Johnson" },
  { id: "INV-2025-002", date: "2025-01-01", amount: 450, child: "Liam Smith" },
  { id: "INV-2025-003", date: "2025-01-01", amount: 450, child: "Olivia Brown" },
  { id: "INV-2025-004", date: "2025-01-01", amount: 450, child: "Noah Davis" },
  { id: "INV-2025-005", date: "2025-01-01", amount: 450, child: "Ava Wilson" },
];

const Invoices = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Invoices & Receipts</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Invoice List</CardTitle>
                <CardDescription>
                  Download and manage all invoices and receipts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Child</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>PDF Download</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.child}</TableCell>
                        <TableCell>${invoice.amount}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
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

export default Invoices;
