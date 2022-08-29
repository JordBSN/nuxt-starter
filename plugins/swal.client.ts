import Swal from "sweetalert2";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      swalCustom: (title, message, icon) => {
        return Swal.fire({
          title: title,
          text: message,
          icon: icon,
        });
      },
    },
  };
});
