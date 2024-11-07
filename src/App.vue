<template>
  <div class="max-w-7xl mx-auto mt-36">
    <h1 class="text-3xl">Hello World</h1>
    <Navbar />
    <Physician />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Physician from "./components/physician.vue";

export default {
  name: "App",
  components: { Navbar,Physician },
};
</script>

<style>
</style>