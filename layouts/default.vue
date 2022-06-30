<template>
  <div>
    <Navbar />
    <NavbarMob />
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100%;
  font-family: "Gotham Pro";
}

#__nuxt {
  width: 100%;
  overflow-x: hidden;
}
</style>
