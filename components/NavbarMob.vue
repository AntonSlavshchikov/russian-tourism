<template>
  <div
    class="flex z-[10] justify-between items-center fixed top-0 left-0 right-0 pl-5 pr-5 pt-6 pb-6 sm:hidden"
  >
    <img class="h-[50px]" src="@/assets/media/navbar/logo.png" alt="" />
    <div class="flex">
      <a class="mr-5" href="#"
        ><img src="@/assets/media/navbar/people.png" alt=""
      /></a>
      <a href="#"><img src="@/assets/media/navbar/burger.png" alt="" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarMob",
};
</script>

<style lang="scss" scoped></style>
