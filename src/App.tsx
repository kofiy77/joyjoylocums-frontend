
import { QueryClientProvider } from "@tanstack/react-query";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import all existing pages
import Home from "./pages/home";
import Auth from "./pages/auth";
import AboutUs from "./pages/about-us";
import GPLocums from "./pages/gp-locums";
import NursePractitionerLocums from "./pages/nurse-practitioner-locums";
import PCNLocums from "./pages/pcn-locums";
import ClinicalPharmacistLocums from "./pages/clinical-pharmacist-locums";
import AlliedHealthcareProfessionals from "./pages/allied-healthcare-professionals";
import GPPractices from "./pages/gp-practices";
import Compliance from "./pages/compliance";
import GPPracticeEnquiry from "./pages/gp-practice-enquiry";
import StaffRegistration from "./pages/staff-registration";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfService from "./pages/terms-of-service";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50">
          <Switch>
            {/* Home page */}
            <Route path="/" component={Home} />
            
            {/* Authentication */}
            <Route path="/auth" component={Auth} />
            
            {/* Medical Professional Pages */}
            <Route path="/gp-locums" component={GPLocums} />
            <Route path="/nurse-practitioner-locums" component={NursePractitionerLocums} />
            <Route path="/pcn-locums" component={PCNLocums} />
            <Route path="/clinical-pharmacist-locums" component={ClinicalPharmacistLocums} />
            <Route path="/allied-healthcare-professionals" component={AlliedHealthcareProfessionals} />
            
            {/* Practice Pages */}
            <Route path="/gp-practices" component={GPPractices} />
            <Route path="/gp-practice-enquiry" component={GPPracticeEnquiry} />
            
            {/* Registration */}
            <Route path="/staff-registration" component={StaffRegistration} />
            
            {/* Information Pages */}
            <Route path="/compliance" component={Compliance} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-of-service" component={TermsOfService} />
            
            {/* 404 Page */}
            <Route>
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Page not found</h1>
                  <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="text-blue-600 hover:text-blue-800 underline">
                    Return to Home
                  </a>
                </div>
              </div>
            </Route>
          </Switch>
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
