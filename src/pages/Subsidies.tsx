
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign } from "lucide-react";

const subsidies = [
  { id: 1, child: "Emma Johnson", eligibility: "Eligible", amount: 200 },
  { id: 2, child: "Liam Smith", eligibility: "Not Eligible", amount: 0 },
  { id: 3, child: "Olivia Brown", eligibility: "Pending", amount: 150 },
  { id: 4, child: "Noah Davis", eligibility: "Eligible", amount: 200 },
  { id: 5, child: "Ava Wilson", eligibility: "Eligible", amount: 180 },
];

const Subsidies = () => {
  const getEligibilityBadge = (eligibility: string) => {
    switch (eligibility) {
      case "Eligible":
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Eligible</Badge>;
      case "Pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "Not Eligible":
        return <Badge variant="secondary" className="bg-red-100 text-red-800">Not Eligible</Badge>;
      default:
        return <Badge variant="outline">{eligibility}</Badge>;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Scholarships & Subsidies</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Scholarships & Subsidies</CardTitle>
                <CardDescription>
                  Track scholarship and subsidy eligibility for enrolled children
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Child</TableHead>
                      <TableHead>Eligibility</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subsidies.map((subsidy) => (
                      <TableRow key={subsidy.id}>
                        <TableCell className="font-medium">{subsidy.child}</TableCell>
                        <TableCell>{getEligibilityBadge(subsidy.eligibility)}</TableCell>
                        <TableCell>
                          {subsidy.amount > 0 ? `$${subsidy.amount}` : "N/A"}
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

export default Subsidies;
