<template>
  <section class="w-full bg-gray-50 min-h-screen">
    <div class="w-full flex gap-10 h-full">
      <div
        class="bg-gray-800/35 w-72 flex flex-col justify-center items-center h-screen shadow-xl shadow-gray-600/20 fixed top-0 bottom-0 left-0"
      >
        <Navbar />
      </div>
      <div class="flex-1 ml-72 p-4">
        <physician></physician>
      </div>
      
    </div>
    <Medication/>
  </section>
</template>

<script>
import HospitalDetails from "./components/HospitalDetails.vue";
import Medication from "./components/Medication.vue";
import Navbar from "./components/Navbar.vue";
import Physician from "./components/physician.vue";


export default {
  name: "App",
  components: { Navbar, Physician, HospitalDetails ,Medication},
};
</script>

<style>
</style>