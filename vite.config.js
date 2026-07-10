import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // The portfolio is deployed from the root user-site repository:
  // https://edwardsomerawebdev.github.io/
  base: "/",
});
