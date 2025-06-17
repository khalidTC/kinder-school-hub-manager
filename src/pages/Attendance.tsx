
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CalendarCheck, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const mockChildren = [
  { id: 1, name: "Emma Johnson", class: "TPS" },
  { id: 2, name: "Liam Smith", class: "PS" },
  { id: 3, name: "Sofia Rodriguez", class: "MS" },
  { id: 4, name: "Noah Wilson", class: "GS" },
  { id: 5, name: "Olivia Brown", class: "TPS" },
];

const Attendance = () => {
  const [attendance, setAttendance] = useState<Record<number, string>>({});

  const handleAttendanceChange = (childId: number, status: string) => {
    setAttendance(prev => ({ ...prev, [childId]: status }));
  };

  const handleSaveAttendance = () => {
    toast({
      title: "Attendance Saved",
      description: "Daily attendance has been recorded successfully.",
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <CalendarCheck className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Mark Daily Attendance</CardTitle>
                <CardDescription>
                  Record attendance for {new Date().toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Child Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockChildren.map((child) => (
                      <TableRow key={child.id}>
                        <TableCell className="font-medium">{child.name}</TableCell>
                        <TableCell>{child.class}</TableCell>
                        <TableCell>
                          <Select onValueChange={(value) => handleAttendanceChange(child.id, value)}>
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="present">Present</SelectItem>
                              <SelectItem value="absent">Absent</SelectItem>
                              <SelectItem value="sick">Sick</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4">
                  <Button onClick={handleSaveAttendance} className="bg-green-600 hover:bg-green-700">
                    <Save className="w-4 h-4 mr-2" />
                    Save Attendance
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Attendance;
