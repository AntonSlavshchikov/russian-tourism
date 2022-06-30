<template>
  <div class="relative h-screen w-full bg-intro-img bg-cover bg-top">
    <div
      class="h-screen w-full flex justify-center flex-col m-auto pt-0 pb-0 pl-5 pr-5 sm:pl-[60px] sm:pr-[60px] md:max-w-[1024px] lg:max-w-[1720px]"
    >
      <p
        class="text-[38px] text-white font-bold mb-10 leading-9 text-center sm:text-[40px] sm:leading-[29px]"
      >
        <img
          src="@/assets/media/intro/main-text.svg"
          alt=""
          class="block max-w-full h-auto m-auto"
        />
      </p>
      <form
        action=""
        class="bg-transparent border-0 p-0 sm:grid sm:grid-cols-search h-[70px] sm:p-[10px] sm:relative sm:h-auto sm:items-center"
      >
        <div
          class="hidden sm:block absolute h-full w-full sm:border-2 sm:border-border-color sm:rounded-full sm:backdrop-filter sm:backdrop-blur-sm sm:bg-blur"
        ></div>
        <div class="relative mb-[10px] sm:mb-0">
          <img
            class="transform translate-x-[58%] translate-y-[50%] absolute h-[24px] z-[1] left-[25px] top-[10px] sm:top-0"
            src="@/assets/media/intro/pointmap.png"
            alt=""
          />
          <div class="relative">
            <div class="relative">
              <input
                type="text"
                class="border-2 border-border-color rounded-full backdrop-filter backdrop-blur-sm bg-blur h-[70px] w-full pl-16 pr-7 text-white text-base placeholder-opacity-50 sm:border-0 sm:bg-transparent sm:backdrop-blur-0 sm:h-[50px]"
                placeholder="Moscow"
              />
            </div>
          </div>
        </div>

        <div class="relative mb-[10px] sm:mb-0">
          <img
            class="transform translate-x-[58%] translate-y-[50%] absolute h-[24px] z-[1] left-[20px] top-[10px] sm:top-0"
            src="@/assets/media/intro/calend.png"
            alt=""
          />
          <div class="relative">
            <div
              class="relative sm:before:content-[''] sm:before:absolute sm:before:top-[calc(50% - 25px)] sm:before:bg-[#dfdfdf] sm:before:w-[2px] sm:before:h-[50px] sm:after:content-[''] sm:after:absolute sm:after:top-[calc(50% - 25px)] sm:after:bg-[#dfdfdf] sm:after:w-[2px] sm:after:h-[50px] sm:after:right-0"
            >
              <input
                type="text"
                class="border-2 border-border-color rounded-full backdrop-filter backdrop-blur-sm bg-blur h-[70px] w-full pl-16 pr-7 text-white text-base placeholder-opacity-50 sm:border-0 sm:bg-transparent sm:backdrop-blur-0 sm:h-[50px]"
                placeholder="Календарь"
              />
            </div>
          </div>
        </div>

        <div class="relative mb-[24px] sm:mb-0">
          <img
            class="transform translate-x-[58%] translate-y-[50%] absolute h-[24px] z-[1] left-[25px] top-[10px] sm:top-0"
            src="@/assets/media/intro/people.png"
            alt=""
          />
          <div class="relative">
            <div class="relative">
              <input
                type="text"
                class="border-2 border-border-color rounded-full backdrop-filter backdrop-blur-sm bg-blur h-[70px] w-full pl-16 pr-7 text-white text-base placeholder-opacity-50 sm:border-0 sm:bg-transparent sm:backdrop-blur-0 sm:h-[50px]"
                placeholder="Люди"
              />
            </div>
          </div>
        </div>
        <button
          class="border-0 cursor-pointer h-[70px] flex z-1 p-5 bg-button items-center justify-center rounded-[50px] w-full text-white text-[16px] sm:h-[70px] sm:w-[70px] sm:p-3 sm:rounded-[100%] sm:flex z-[1]"
        >
          <img
            class="hidden sm:block"
            src="@/assets/media/navbar/search.png"
            alt=""
          />
          <span class="sm:hidden">Find a tour</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style lang="scss" scoped></style>
