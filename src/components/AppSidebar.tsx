
import { 
  Calendar, 
  Users, 
  Activity, 
  CreditCard, 
  BarChart, 
  Settings,
  User,
  Home,
  UserPlus,
  CalendarCheck,
  FileText,
  DollarSign,
  LogOut
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  {
    group: "Dashboard",
    icon: Home,
    items: [
      { title: "Home", url: "/dashboard", icon: Home }
    ]
  },
  {
    group: "Children",
    icon: Users,
    items: [
      { title: "List / Profiles", url: "/children", icon: Users },
      { title: "Enrollment", url: "/enrollment", icon: UserPlus },
      { title: "Attendance", url: "/attendance", icon: CalendarCheck },
      { title: "Progress Reports", url: "/progress", icon: FileText },
      { title: "Behavior Notes", url: "/behavior", icon: FileText }
    ]
  },
  {
    group: "Services",
    icon: Activity,
    items: [
      { title: "Service Overview", url: "/services", icon: Activity },
      { title: "Add New Service", url: "/services/new", icon: Activity },
      { title: "Class Schedule", url: "/schedule", icon: Calendar },
      { title: "Meal Plan", url: "/meals", icon: Activity },
      { title: "Transport", url: "/transport", icon: Activity },
      { title: "Extra Activities", url: "/activities", icon: Activity }
    ]
  },
  {
    group: "Finance",
    icon: CreditCard,
    items: [
      { title: "Financial Overview", url: "/finance", icon: CreditCard },
      { title: "Tuition Payments", url: "/payments", icon: DollarSign },
      { title: "Expenses", url: "/expenses", icon: DollarSign },
      { title: "Revenue Analysis", url: "/revenue", icon: BarChart },
      { title: "Invoices / Receipts", url: "/invoices", icon: FileText },
      { title: "Subsidies / Scholarships", url: "/subsidies", icon: DollarSign }
    ]
  },
  {
    group: "Reports",
    icon: BarChart,
    items: [
      { title: "Daily Reports", url: "/reports/daily", icon: BarChart },
      { title: "Weekly / Monthly Summary", url: "/reports/summary", icon: BarChart },
      { title: "Attendance", url: "/reports/attendance", icon: CalendarCheck },
      { title: "Child Development", url: "/reports/development", icon: Users },
      { title: "Financial", url: "/reports/financial", icon: CreditCard }
    ]
  },
  {
    group: "Administration",
    icon: Settings,
    items: [
      { title: "Staff Management", url: "/staff", icon: Users },
      { title: "Calendar / Events", url: "/events", icon: Calendar },
      { title: "Settings", url: "/settings", icon: Settings },
      { title: "Communication", url: "/communication", icon: Activity },
      { title: "Parent Access Settings", url: "/parent-access", icon: Settings }
    ]
  },
  {
    group: "Account",
    icon: User,
    items: [
      { title: "Profile", url: "/profile", icon: User }
    ]
  }
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Kindergarten</h2>
            <p className="text-xs text-gray-500">Management Portal</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {sidebarItems.map((section) => (
          <SidebarGroup key={section.group}>
            <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {section.group}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      isActive={location.pathname === item.url}
                      className="transition-all duration-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <Link to={item.url} className="flex items-center space-x-2">
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <Button 
          onClick={handleLogout}
          variant="outline" 
          className="w-full justify-start hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-all duration-200"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
