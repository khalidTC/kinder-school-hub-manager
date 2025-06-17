
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Calendar } from "lucide-react";

const schedule = {
  TPS: {
    Monday: ["9:00 - 10:00 Circle Time", "10:00 - 11:00 Free Play", "11:00 - 12:00 Story Time"],
    Tuesday: ["9:00 - 10:00 Music", "10:00 - 11:00 Art", "11:00 - 12:00 Outdoor Play"],
    Wednesday: ["9:00 - 10:00 Movement", "10:00 - 11:00 Sensory Play", "11:00 - 12:00 Rest Time"],
    Thursday: ["9:00 - 10:00 Language", "10:00 - 11:00 Building", "11:00 - 12:00 Garden Time"],
    Friday: ["9:00 - 10:00 Show & Tell", "10:00 - 11:00 Cooking", "11:00 - 12:00 Free Choice"],
  },
  PS: {
    Monday: ["9:00 - 10:00 Math Activities", "10:00 - 11:00 Reading", "11:00 - 12:00 Science"],
    Tuesday: ["9:00 - 10:00 Art & Craft", "10:00 - 11:00 Music", "11:00 - 12:00 PE"],
    Wednesday: ["9:00 - 10:00 Writing Practice", "10:00 - 11:00 Drama", "11:00 - 12:00 Library"],
    Thursday: ["9:00 - 10:00 Numbers", "10:00 - 11:00 Nature Study", "11:00 - 12:00 Games"],
    Friday: ["9:00 - 10:00 Project Work", "10:00 - 11:00 Assembly", "11:00 - 12:00 Free Play"],
  },
  MS: {
    Monday: ["9:00 - 10:00 Mathematics", "10:00 - 11:00 French", "11:00 - 12:00 Science"],
    Tuesday: ["9:00 - 10:00 English", "10:00 - 11:00 Art", "11:00 - 12:00 Sport"],
    Wednesday: ["9:00 - 10:00 Writing", "10:00 - 11:00 Music", "11:00 - 12:00 Computer"],
    Thursday: ["9:00 - 10:00 Reading", "10:00 - 11:00 Geography", "11:00 - 12:00 Workshop"],
    Friday: ["9:00 - 10:00 Presentation", "10:00 - 11:00 Cooking", "11:00 - 12:00 Games"],
  },
  GS: {
    Monday: ["9:00 - 10:00 Mathematics", "10:00 - 11:00 French", "11:00 - 12:00 History"],
    Tuesday: ["9:00 - 10:00 English", "10:00 - 11:00 Science", "11:00 - 12:00 PE"],
    Wednesday: ["9:00 - 10:00 Writing", "10:00 - 11:00 Art", "11:00 - 12:00 Technology"],
    Thursday: ["9:00 - 10:00 Reading", "10:00 - 11:00 Geography", "11:00 - 12:00 Music"],
    Friday: ["9:00 - 10:00 Project", "10:00 - 11:00 Assembly", "11:00 - 12:00 Review"],
  },
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const levels = ["TPS", "PS", "MS", "GS"];

const ClassSchedule = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Class Schedule</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Timetable</CardTitle>
                <CardDescription>
                  Class schedules for all kindergarten levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {levels.map((level) => (
                    <div key={level} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-sm font-semibold">
                          {level}
                        </Badge>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {level === "TPS" && "Toute Petite Section"}
                          {level === "PS" && "Petite Section"}
                          {level === "MS" && "Moyenne Section"}
                          {level === "GS" && "Grande Section"}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        {days.map((day) => (
                          <Card key={day} className="border">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium text-center">
                                {day}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <div className="space-y-1">
                                {schedule[level as keyof typeof schedule][day as keyof typeof schedule.TPS].map((activity, index) => (
                                  <div key={index} className="text-xs p-2 bg-gray-50 rounded text-center">
                                    {activity}
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
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

export default ClassSchedule;
