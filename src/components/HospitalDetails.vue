<template>
<section>
    <div>
        <h2>{{hospitalName}}</h2>
        <p>{{hospitalAddress}}</p>
        <div class="flex gap-3">
          <p v-for="phoneNumber,index in hospitalPhone" :key=index>{{phoneNumber}}</p>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
const  hospitalName:string ="Xenmesh Medical College and Hospital";
const hospitalAddress:string ="Gazipur Model school and collge road";
const hospitalPhone:string[] = ["0147863241","2313146784","14236874"];
</script>

<style>
</style>