
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { UtensilsCrossed } from "lucide-react";

const mealPlan = {
  Monday: {
    breakfast: "Oatmeal with fruits",
    lunch: "Grilled chicken with vegetables",
    snack: "Yogurt and crackers",
  },
  Tuesday: {
    breakfast: "Toast with jam",
    lunch: "Fish with rice and salad",
    snack: "Apple slices and cheese",
  },
  Wednesday: {
    breakfast: "Cereals with milk",
    lunch: "Pasta with tomato sauce",
    snack: "Banana and nuts",
  },
  Thursday: {
    breakfast: "Pancakes with honey",
    lunch: "Beef stew with bread",
    snack: "Carrot sticks and hummus",
  },
  Friday: {
    breakfast: "Scrambled eggs and toast",
    lunch: "Pizza with vegetables",
    snack: "Mixed berries and cookies",
  },
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const MealPlan = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <UtensilsCrossed className="w-6 h-6 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Meal Plan</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Meal Plan</CardTitle>
                <CardDescription>
                  Nutritious meals and snacks for all children
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {days.map((day) => (
                    <Card key={day} className="border-l-4 border-l-green-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center justify-between">
                          {day}
                          <Badge variant="outline" className="text-xs">
                            Day {days.indexOf(day) + 1}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm text-orange-600 mb-1">Breakfast</h4>
                          <p className="text-sm text-gray-600">
                            {mealPlan[day as keyof typeof mealPlan].breakfast}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm text-blue-600 mb-1">Lunch</h4>
                          <p className="text-sm text-gray-600">
                            {mealPlan[day as keyof typeof mealPlan].lunch}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm text-purple-600 mb-1">Snack</h4>
                          <p className="text-sm text-gray-600">
                            {mealPlan[day as keyof typeof mealPlan].snack}
                          </p>
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

export default MealPlan;
