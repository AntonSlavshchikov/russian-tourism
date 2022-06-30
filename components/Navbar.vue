<template>
  <div
    class="hidden sm:flex justify-between items-center fixed top-0 left-0 right-0 pl-5 pr-5 pt-6 pb-6 z-[10] sm:pl-[60px] sm:pr-[60px]"
  >
    <div
      class="flex items-center justify-between text-[12px] leading-[11px] md:text-[14px] lg:text-[18px]"
    >
      <img
        class="h-[60px] mr-[31px] lg:h-[84px] lg:mr-[60px]"
        src="@/assets/media/navbar/logo.png"
        alt=""
      />
      <a class="mr-[30px] text-white" href="#">Destinations</a>
      <a class="mr-[30px] text-white" href="#">Tours</a>
      <a class="mr-[30px] text-white" href="#">Seasons</a>
      <a class="mr-[30px] text-white" href="#">Visa</a>
      <a class="text-white" href="#">About us</a>
    </div>
    <div class="flex">
      <a class="mr-5 flex justify-between items-center text-white" href="#"
        ><img src="@/assets/media/navbar/people.png" alt="" />
        <span class="hidden md:block text-[14px] leading-[13px]"
          >My Profile</span
        >
      </a>
      <a class="mr-5" href="#"
        ><img src="@/assets/media/navbar/lang.png" alt=""
      /></a>
      <a class="mr-5" href="#"
        ><img src="@/assets/media/navbar/money.png" alt=""
      /></a>
      <a class="mr-5" href="#"
        ><img src="@/assets/media/navbar/search.png" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped></style>
