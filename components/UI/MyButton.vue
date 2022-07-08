<template>
  <button
    class="inline-block text-white text-lg font-normal rounded-[35px] bg-button mt-7 pb-5 pt-5 pr-60 pl-60 sm:mt-10 sm:pt-6 sm:pb-6 uppercase hover:bg-button-hover transition-all sm:pr-16 sm:pl-16 sm:text-sm md:text-base"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>
