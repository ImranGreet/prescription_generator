<script setup lang="ts">
import { reactive } from "vue";
import { Patient } from "../scripts/interfaces";
import HospitalDetails from "./HospitalDetails.vue";

const PatientInfo = reactive<Patient>({
  name: "",
  age: 0,
  sex: "",
});


</script>

<template>
  <p>{{ PatientInfo.name }}</p>
  <input
    type="text"
    v-model="PatientInfo.name"
    class="border border-red-100"
    placeholder="Enter name"
  />

  <HospitalDetails/>
</template>

<style scoped>
</style>
