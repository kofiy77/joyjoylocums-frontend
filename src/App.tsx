These markdown elements are causing the syntax error at line 32.

### **The Solution:**
Replace your **entire** App.tsx file in GitHub with this clean code:

```tsx
import { QueryClientProvider } from "@tanstack/react-query";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/home";

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
