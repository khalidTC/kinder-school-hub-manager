
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { FileText, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const mockChildren = [
  { id: 1, name: "Emma Johnson" },
  { id: 2, name: "Liam Smith" },
  { id: 3, name: "Sofia Rodriguez" },
  { id: 4, name: "Noah Wilson" },
];

const ProgressReports = () => {
  const [selectedChild, setSelectedChild] = useState("");
  const [developmentNotes, setDevelopmentNotes] = useState("");
  const [learningGoals, setLearningGoals] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedChild || !developmentNotes || !learningGoals) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Progress Report Saved",
      description: "Child progress notes have been recorded successfully.",
    });

    setSelectedChild("");
    setDevelopmentNotes("");
    setLearningGoals("");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Progress Reports</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Child Progress Notes</CardTitle>
                <CardDescription>
                  Record development progress and learning goals for children
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="child">Child</Label>
                    <Select value={selectedChild} onValueChange={setSelectedChild}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a child" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockChildren.map((child) => (
                          <SelectItem key={child.id} value={child.name}>
                            {child.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="developmentNotes">Development Notes</Label>
                    <Textarea
                      id="developmentNotes"
                      placeholder="Enter development observations and progress notes..."
                      value={developmentNotes}
                      onChange={(e) => setDevelopmentNotes(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="learningGoals">Learning Goals</Label>
                    <Textarea
                      id="learningGoals"
                      placeholder="Set learning objectives and goals..."
                      value={learningGoals}
                      onChange={(e) => setLearningGoals(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Save Progress Report
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ProgressReports;
