import { ReactNode } from "react";

export function Toaster() {
  return (
    <div id="toast-container" className="fixed top-4 right-4 z-50">
      {/* Simplified toaster for initial build */}
    </div>
  );
}

export function useToast() {
  return {
    toast: (options: { title?: string; description?: string; variant?: string }) => {
      console.log('Toast:', options);
    }
  };
}
