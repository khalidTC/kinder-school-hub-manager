
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Children from "./pages/Children";
import ChildProfile from "./pages/ChildProfile";
import Enrollment from "./pages/Enrollment";
import Attendance from "./pages/Attendance";
import ProgressReports from "./pages/ProgressReports";
import BehaviorNotes from "./pages/BehaviorNotes";
import Services from "./pages/Services";
import AddService from "./pages/AddService";
import ClassSchedule from "./pages/ClassSchedule";
import MealPlan from "./pages/MealPlan";
import Transport from "./pages/Transport";
import ExtraActivities from "./pages/ExtraActivities";
import FinanceOverview from "./pages/FinanceOverview";
import Payments from "./pages/Payments";
import Expenses from "./pages/Expenses";
import RevenueAnalysis from "./pages/RevenueAnalysis";
import Invoices from "./pages/Invoices";
import Subsidies from "./pages/Subsidies";
import Reports from "./pages/Reports";
import Administration from "./pages/Administration";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/children" element={<Children />} />
          <Route path="/children/profile" element={<ChildProfile />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/progress" element={<ProgressReports />} />
          <Route path="/behavior" element={<BehaviorNotes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/new" element={<AddService />} />
          <Route path="/schedule" element={<ClassSchedule />} />
          <Route path="/meals" element={<MealPlan />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/activities" element={<ExtraActivities />} />
          <Route path="/finance" element={<FinanceOverview />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/revenue" element={<RevenueAnalysis />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/subsidies" element={<Subsidies />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admin" element={<Administration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
