import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  base: "/nerdbord-js-weekly-challenge/",
  root: "./",
  build: {
    outDir: "dist",
  },
}