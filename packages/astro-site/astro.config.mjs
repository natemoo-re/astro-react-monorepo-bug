// import path from "path"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// const __dirname = new URL(".", import.meta.url).pathname

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: [
        // In my repo, I have to use the following, due to the monorepo nature.
        // But it seems unnecessary for the bug to be present.
        //
        // {
        // 	find: /^(@astrojs\/react\/.*)/,
        // 	replacement: path.resolve(__dirname, "./node_modules/$1"),
        // },
      ],
    },
  },
})
