<template>
  <div class="relative h-screen w-full bg-error-img bg-cover bg-top">
    <div
      class="absolute bottom-5 left-5 z-10 font-gotham-sans font-bold text-18 text-white md:hidden"
    >
      +7 000 <span class="text-button">000 00 00</span>
    </div>
    <div class="h-full w-full flex flex-col justify-center m-auto text-center">
      <span
        class="text-404 font-bold font-gotham-sans text-140 leading-140 sm:text-180 md:text-270 md:leading-220"
        >404</span
      >
      <span
        class="text-white font-bold font-gotham-sans text-38 sm:text-40 md:text-50"
        >Sorry, page not found</span
      >
      <div>
        <MyButton>Go back to main page</MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: { MyButton },
  name: "ErrorPage",
};
</script>
