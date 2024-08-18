// vite.config.js
import path from "node:path";
import { defineConfig } from "file:///C:/Users/vynic/OneDrive/%C3%81rea%20de%20Trabalho/LIVEBIKE/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/vynic/OneDrive/%C3%81rea%20de%20Trabalho/LIVEBIKE/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import tailwind from "file:///C:/Users/vynic/OneDrive/%C3%81rea%20de%20Trabalho/LIVEBIKE/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/Users/vynic/OneDrive/%C3%81rea%20de%20Trabalho/LIVEBIKE/node_modules/autoprefixer/lib/autoprefixer.js";
var __vite_injected_original_dirname = "C:\\Users\\vynic\\OneDrive\\\xC1rea de Trabalho\\LIVEBIKE";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  server: {
    host: "0.0.0.0",
    // Escutar em todos os endereços de rede
    port: 3e3
    // Pode mudar para a porta que você preferir
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2eW5pY1xcXFxPbmVEcml2ZVxcXFxcdTAwQzFyZWEgZGUgVHJhYmFsaG9cXFxcTElWRUJJS0VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHZ5bmljXFxcXE9uZURyaXZlXFxcXFx1MDBDMXJlYSBkZSBUcmFiYWxob1xcXFxMSVZFQklLRVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdnluaWMvT25lRHJpdmUvJUMzJTgxcmVhJTIwZGUlMjBUcmFiYWxoby9MSVZFQklLRS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuaW1wb3J0IHRhaWx3aW5kIGZyb20gJ3RhaWx3aW5kY3NzJ1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZCgpLCBhdXRvcHJlZml4ZXIoKV0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJzAuMC4wLjAnLCAvLyBFc2N1dGFyIGVtIHRvZG9zIG9zIGVuZGVyZVx1MDBFN29zIGRlIHJlZGVcbiAgICBwb3J0OiAzMDAwICAgICAgIC8vIFBvZGUgbXVkYXIgcGFyYSBhIHBvcnRhIHF1ZSB2b2NcdTAwRUEgcHJlZmVyaXJcbiAgfSxcbiAgcGx1Z2luczogW3Z1ZSgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgIH0sXG4gIH0sXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFYsT0FBTyxVQUFVO0FBQzNXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUVoQixPQUFPLGNBQWM7QUFDckIsT0FBTyxrQkFBa0I7QUFMekIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUyxDQUFDLElBQUksQ0FBQztBQUFBLEVBQ2YsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
