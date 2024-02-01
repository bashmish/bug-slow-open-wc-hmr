import { hmrPlugin, presets as hmrPresets } from "@open-wc/dev-server-hmr";

export default {
  open: "/index.html",
  nodeResolve: true,
  plugins: [
    hmrPlugin({
      include: [
        "src/**/*",
        "node_modules/lit-element/node_modules/@lit/reactive-element/**",
      ],
      presets: [hmrPresets.litElement],
    }),
  ],
};
