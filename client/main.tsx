import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InternetServices from "./pages/InternetServices";
import WebDevelopment from "./pages/WebDevelopment";
import ChatbotsAI from "./pages/ChatbotsAI";
import SocialMediaBoosting from "./pages/SocialMediaBoosting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/internet-services" element={<InternetServices />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/chatbots-ai" element={<ChatbotsAI />} />
          <Route
            path="/social-media-boosting"
            element={<SocialMediaBoosting />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
