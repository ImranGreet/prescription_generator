<script setup lang="ts">
  const tableHead:string[]=["Drug Name","Frequency","Dosages Form","Applied Parts","Adminsitrive Route"];
  const appliedParts:string[]=[];
  const AdminsitriveRoute:string ="";
</script>

<template>
    <div class="max-w-7xl mx-auto">
     <div class="table-container h-96 w-full border border-slate-800/30 p-5 rounded-lg">
        

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 truncate" v-for="th,index in tableHead" :key="index">
                    {{ th }}
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Seclo
                </th>
                <td class="px-6 py-4">
                    0+0+1
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    <span v-for="part,index in appliedParts" :key="index" class="mr-2">{{part}},</span>
                </td>
                <td class="px-6 py-4">
                    {{ AdminsitriveRoute }}
                </td>
               
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AtoZ
                </th>
                <td class="px-6 py-4">
                    1+0+1
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    <span v-for="part,index in appliedParts" :key="index" class="mr-2">{{part}},</span>
                </td>
                <td class="px-6 py-4">
                    {{ AdminsitriveRoute }}
                </td>
               
            </tr>
            
        </tbody>
    </table>
</div>

     </div>
    </div>
</template>


<style></style>