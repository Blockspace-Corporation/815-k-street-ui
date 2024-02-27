<template>
    <carousel items="5" :nav="false">
      <slide v-for="(record, k) in records" :key="`statistic-${k}`">
        <div class="flex flex-col gap-1 items-center">
          <img :src="record.icon" class="w-40">
        </div>
      </slide>
    </carousel>
  </template>

<script>
export default {
    data() {
        return {
            records: [
                { icon: 'icons/healthyfood.png' },
                { icon: 'icons/niceresto.png' },
                { icon: 'icons/goodfood.png' },
                { icon: 'icons/seasonfood.png' },
                { icon: 'icons/speedyfork.png' },
                { icon: 'icons/healthyfood.png' },
                { icon: 'icons/niceresto.png' },
                { icon: 'icons/goodfood.png' },
                { icon: 'icons/seasonfood.png' },
            ]
        }
    }
}
</script>