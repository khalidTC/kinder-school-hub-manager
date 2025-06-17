
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Plus, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceName || !description || !ageGroup) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Service Added",
      description: "New service has been created successfully.",
    });

    setTimeout(() => {
      navigate("/services");
    }, 1500);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Plus className="w-6 h-6 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Add New Service</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Add New Service</CardTitle>
                <CardDescription>
                  Create a new service or activity for the kindergarten
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="serviceName">Service Name</Label>
                    <Input
                      id="serviceName"
                      placeholder="Enter service name"
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the service or activity..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ageGroup">Age Group</Label>
                    <Select value={ageGroup} onValueChange={setAgeGroup}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TPS">TPS (Toute Petite Section)</SelectItem>
                        <SelectItem value="PS">PS (Petite Section)</SelectItem>
                        <SelectItem value="MS">MS (Moyenne Section)</SelectItem>
                        <SelectItem value="GS">GS (Grande Section)</SelectItem>
                        <SelectItem value="All">All Age Groups</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Service
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

export default AddService;
