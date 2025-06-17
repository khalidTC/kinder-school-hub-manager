
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

const BehaviorNotes = () => {
  const [selectedChild, setSelectedChild] = useState("");
  const [incident, setIncident] = useState("");
  const [date, setDate] = useState("");
  const [actionsTaken, setActionsTaken] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedChild || !incident || !date || !actionsTaken) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Behavior Note Saved",
      description: "Behavior tracking record has been saved successfully.",
    });

    setSelectedChild("");
    setIncident("");
    setDate("");
    setActionsTaken("");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-900">Behavior Notes</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Behavior Tracking</CardTitle>
                <CardDescription>
                  Record behavioral incidents and actions taken
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
                    <Label htmlFor="incident">Incident</Label>
                    <Textarea
                      id="incident"
                      placeholder="Describe the behavioral incident..."
                      value={incident}
                      onChange={(e) => setIncident(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="actionsTaken">Actions Taken</Label>
                    <Textarea
                      id="actionsTaken"
                      placeholder="Describe the actions taken to address the incident..."
                      value={actionsTaken}
                      onChange={(e) => setActionsTaken(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Save Behavior Note
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

export default BehaviorNotes;
