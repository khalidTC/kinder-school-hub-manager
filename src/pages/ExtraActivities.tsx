
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Zap, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const activities = [
  { id: "dance", name: "Dance", description: "Creative movement and dance classes", schedule: "Mondays 2-3 PM" },
  { id: "music", name: "Music", description: "Instrumental and vocal music lessons", schedule: "Wednesdays 2-3 PM" },
  { id: "sports", name: "Sports", description: "Basic sports and physical activities", schedule: "Fridays 2-3 PM" },
];

const children = [
  { id: 1, name: "Emma Johnson", class: "TPS" },
  { id: 2, name: "Liam Smith", class: "PS" },
  { id: 3, name: "Sofia Rodriguez", class: "MS" },
  { id: 4, name: "Noah Wilson", class: "GS" },
  { id: 5, name: "Olivia Brown", class: "TPS" },
];

const ExtraActivities = () => {
  const [assignments, setAssignments] = useState<Record<string, string[]>>({
    dance: [],
    music: [],
    sports: [],
  });

  const handleAssignmentChange = (activityId: string, childName: string, checked: boolean) => {
    setAssignments(prev => ({
      ...prev,
      [activityId]: checked 
        ? [...prev[activityId], childName]
        : prev[activityId].filter(name => name !== childName)
    }));
  };

  const handleSave = () => {
    toast({
      title: "Assignments Saved",
      description: "Extra-curricular activity assignments have been updated.",
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-pink-600" />
                <h1 className="text-2xl font-bold text-gray-900">Extra Activities</h1>
              </div>
              <Button onClick={handleSave} className="bg-pink-600 hover:bg-pink-700">
                <Save className="w-4 h-4 mr-2" />
                Save Assignments
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Extra-curricular Activities</CardTitle>
                <CardDescription>
                  Assign children to optional activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activities.map((activity) => (
                    <Card key={activity.id} className="border-l-4 border-l-pink-500">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">{activity.name}</CardTitle>
                            <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                            <Badge variant="outline" className="mt-2">
                              {activity.schedule}
                            </Badge>
                          </div>
                          <Badge variant="secondary">
                            {assignments[activity.id].length} enrolled
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-medium text-sm text-gray-700 mb-3">
                          Assign Children:
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {children.map((child) => (
                            <div key={child.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={`${activity.id}-${child.id}`}
                                checked={assignments[activity.id].includes(child.name)}
                                onCheckedChange={(checked) => 
                                  handleAssignmentChange(activity.id, child.name, checked as boolean)
                                }
                              />
                              <label 
                                htmlFor={`${activity.id}-${child.id}`} 
                                className="text-sm cursor-pointer"
                              >
                                <div>{child.name}</div>
                                <div className="text-xs text-gray-500">{child.class}</div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
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

export default ExtraActivities;
