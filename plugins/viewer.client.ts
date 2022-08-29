import { defineNuxtPlugin } from "#app";
import Viewer from "viewerjs";

export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      viewer: () => Viewer,
    },
  };
});
