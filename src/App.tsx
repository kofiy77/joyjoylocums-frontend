import { QueryClientProvider } from "@tanstack/react-query";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">JoyJoy Locums</h1>
        <p className="text-xl text-gray-600">Medical Staffing Platform</p>
        <p className="text-sm text-gray-500 mt-2">CLI upload successful! Ready for deployment</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50">
          <Switch>
            <Route path="/" component={Home} />
            <Route>
              <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl">Page not found</h1>
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
