import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use different base paths for different deployment targets
  base: process.env.DEPLOY_TARGET === 'github' ? '/WildEncounter/' : '/',
})
