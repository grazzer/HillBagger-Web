import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { routeTree } from "./routeTree.gen.ts";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StyledEngineProvider } from "@mui/material/styles";
import { APIProvider } from "@vis.gl/react-google-maps";

// Create a new router instance
const router = createRouter({ routeTree, context: { hills: [] } });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
// createRoot(document.getElementById("root")!).render(
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <RouterProvider router={router} />
      </APIProvider>
    </StrictMode>
  );
}
