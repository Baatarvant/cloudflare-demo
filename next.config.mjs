import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import { paraglide } from "@inlang/paraglide-js-adapter-next/plugin";

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

const nextConfig = {
  output: "export",
  distDir: "out",
};

export default paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./src/paraglide",
  },
  ...nextConfig,
});
