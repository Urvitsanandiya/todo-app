import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows external connections, which is important for production
    port: process.env.PORT || 3000, // Use the PORT provided by the environment or fallback to 3000 for local dev
  },
});
