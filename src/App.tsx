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
```

## Key Change:
- Import: `import Home from "./pages/home";`
- Route: `<Route path="/" component={Home} />`

This will connect the complete JoyJoy Locums medical platform instead of showing the fallback message.
