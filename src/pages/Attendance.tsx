
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CalendarCheck, Save, Download, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Child {
  id: number;
  childName: string;
  age: number;
  class: string;
  photo: string;
  status: "present" | "absent" | "sick" | "late" | "";
  notes: string;
  selected: boolean;
}

const mockChildren: Child[] = [
  { id: 1, childName: "Emma Johnson", age: 4, class: "TPS", photo: "/placeholder.svg", status: "", notes: "", selected: false },
  { id: 2, childName: "Liam Smith", age: 5, class: "PS", photo: "/placeholder.svg", status: "", notes: "", selected: false },
  { id: 3, childName: "Sofia Rodriguez", age: 3, class: "MS", photo: "/placeholder.svg", status: "", notes: "", selected: false },
  { id: 4, childName: "Noah Wilson", age: 6, class: "GS", photo: "/placeholder.svg", status: "", notes: "", selected: false },
  { id: 5, childName: "Olivia Brown", age: 4, class: "TPS", photo: "/placeholder.svg", status: "", notes: "", selected: false },
  { id: 6, childName: "Ava Davis", age: 5, class: "PS", photo: "/placeholder.svg", status: "", notes: "", selected: false },
];

const classrooms = ["All", "TPS", "PS", "MS", "GS"];

const Attendance = () => {
  const [children, setChildren] = useState<Child[]>(mockChildren);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClassroom, setSelectedClassroom] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Filter children based on classroom and search
  const filteredChildren = children.filter(child => {
    const matchesClassroom = selectedClassroom === "All" || child.class === selectedClassroom;
    const matchesSearch = child.childName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesClassroom && matchesSearch;
  });

  // Auto-save functionality
  useEffect(() => {
    if (hasUnsavedChanges) {
      const timer = setTimeout(() => {
        console.log("Auto-saving attendance data...");
        setHasUnsavedChanges(false);
        toast({
          title: "Auto-saved",
          description: "Attendance data has been automatically saved.",
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasUnsavedChanges]);

  const handleStatusChange = (childId: number, status: "present" | "absent" | "sick" | "late") => {
    setChildren(prev => prev.map(child => 
      child.id === childId ? { ...child, status } : child
    ));
    setHasUnsavedChanges(true);
  };

  const handleNotesChange = (childId: number, notes: string) => {
    setChildren(prev => prev.map(child => 
      child.id === childId ? { ...child, notes } : child
    ));
    setHasUnsavedChanges(true);
  };

  const handleSelectChild = (childId: number, selected: boolean) => {
    setChildren(prev => prev.map(child => 
      child.id === childId ? { ...child, selected } : child
    ));
  };

  const handleSelectAll = (selected: boolean) => {
    setChildren(prev => prev.map(child => ({ ...child, selected })));
  };

  const handleBulkAction = (status: "present" | "absent" | "sick") => {
    const selectedChildren = children.filter(child => child.selected);
    if (selectedChildren.length === 0) {
      toast({
        title: "No children selected",
        description: "Please select children to apply bulk action.",
        variant: "destructive"
      });
      return;
    }

    setChildren(prev => prev.map(child => 
      child.selected ? { ...child, status } : child
    ));
    setHasUnsavedChanges(true);
    toast({
      title: "Bulk action applied",
      description: `${selectedChildren.length} children marked as ${status}.`,
    });
  };

  const handleSubmitAttendance = () => {
    const incompleteChildren = filteredChildren.filter(child => !child.status);
    if (incompleteChildren.length > 0) {
      toast({
        title: "Incomplete attendance",
        description: `Please mark attendance for all children. ${incompleteChildren.length} children still need status.`,
        variant: "destructive"
      });
      return;
    }

    console.log("Submitting attendance:", { date: selectedDate, children: filteredChildren });
    setHasUnsavedChanges(false);
    toast({
      title: "Attendance Submitted",
      description: `Daily attendance for ${selectedDate} has been recorded successfully.`,
    });
  };

  const handleExport = (format: string) => {
    console.log(`Exporting attendance as ${format}`);
    toast({
      title: "Export Started",
      description: `Attendance data is being exported as ${format.toUpperCase()}.`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present": return "🟢";
      case "absent": return "🔴";
      case "sick": return "🟡";
      case "late": return "🟠";
      default: return "";
    }
  };

  const selectedCount = children.filter(child => child.selected).length;
  const allSelected = filteredChildren.length > 0 && filteredChildren.every(child => child.selected);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CalendarCheck className="w-6 h-6 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">Daily Attendance</h1>
                {hasUnsavedChanges && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    Unsaved changes
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Button onClick={() => handleExport("pdf")} variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  PDF
                </Button>
                <Button onClick={() => handleExport("csv")} variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  CSV
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Mark Daily Attendance</CardTitle>
                <CardDescription>
                  Record attendance for {new Date(selectedDate).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Select Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="classroom">Classroom</Label>
                    <Select value={selectedClassroom} onValueChange={setSelectedClassroom}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select classroom" />
                      </SelectTrigger>
                      <SelectContent>
                        {classrooms.map((classroom) => (
                          <SelectItem key={classroom} value={classroom}>
                            {classroom}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="search">Search</Label>
                    <Input
                      id="search"
                      placeholder="Search by name or parent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Bulk Actions */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                      {selectedCount > 0 ? `${selectedCount} selected` : "Select children for bulk actions"}
                    </span>
                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => handleBulkAction("present")} 
                        size="sm" 
                        variant="outline"
                        disabled={selectedCount === 0}
                      >
                        Mark All Present
                      </Button>
                      <Button 
                        onClick={() => handleBulkAction("absent")} 
                        size="sm" 
                        variant="outline"
                        disabled={selectedCount === 0}
                      >
                        Set All Absent
                      </Button>
                      <Button 
                        onClick={() => handleBulkAction("sick")} 
                        size="sm" 
                        variant="outline"
                        disabled={selectedCount === 0}
                      >
                        Set All Sick
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Attendance Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <Checkbox
                            checked={allSelected}
                            onCheckedChange={handleSelectAll}
                          />
                        </TableHead>
                        <TableHead className="w-16">Photo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Notes</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredChildren.map((child) => (
                        <TableRow key={child.id}>
                          <TableCell>
                            <Checkbox
                              checked={child.selected}
                              onCheckedChange={(checked) => handleSelectChild(child.id, !!checked)}
                            />
                          </TableCell>
                          <TableCell>
                            <img 
                              src={child.photo} 
                              alt={child.childName}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          </TableCell>
                          <TableCell className="font-medium">{child.childName}</TableCell>
                          <TableCell>{child.age}</TableCell>
                          <TableCell>{child.class}</TableCell>
                          <TableCell>
                            <div className="flex flex-col space-y-1">
                              {["present", "absent", "sick", "late"].map((status) => (
                                <label key={status} className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    name={`status-${child.id}`}
                                    value={status}
                                    checked={child.status === status}
                                    onChange={() => handleStatusChange(child.id, status as any)}
                                    className="w-3 h-3"
                                  />
                                  <span className="text-sm">
                                    {getStatusIcon(status)} {status.charAt(0).toUpperCase() + status.slice(1)}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Textarea
                              placeholder="Optional comment"
                              value={child.notes}
                              onChange={(e) => handleNotesChange(child.id, e.target.value)}
                              className="min-h-[60px] text-sm"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Submit Button */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{filteredChildren.length} children</span>
                  </div>
                  <Button onClick={handleSubmitAttendance} className="bg-green-600 hover:bg-green-700">
                    <Save className="w-4 h-4 mr-2" />
                    Submit Attendance
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
