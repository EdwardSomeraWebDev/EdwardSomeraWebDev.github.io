import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative asset paths work on both user Pages and project Pages URLs.
  base: "./",
});
