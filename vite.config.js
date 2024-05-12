import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/auth": "http://localhost:3000",
    "/api": "http://localhost:3000",
  },
})
