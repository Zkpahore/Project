// vite.config.js
import { defineConfig } from "file:///C:/Users/User/Desktop/Todo-App-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/User/Desktop/Todo-App-main/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
