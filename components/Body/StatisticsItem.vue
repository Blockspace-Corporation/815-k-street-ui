<template>
    <div class="flex justify-between">
        <div
            v-for="(record, k) in records" :key="`statistic-${k}`"
            class="flex flex-col gap-2 items-center"
        >
            <img :src="record.icon" class="w-10">
            <span class="font-bold">{{ record.label }}</span>
            <span class="text-lg text-secondary font-bold">{{ record.count }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            records: [
                {
                    icon: 'icons/s-menu-types.png',
                    label: 'Menu Types',
                    count: 200
                },
                {
                    icon: 'icons/s-different-origin.png',
                    label: 'Different Origin',
                    count: 50
                },
                {
                    icon: 'icons/s-pasta-n-noodles.png',
                    label: 'Pasta & Noodles',
                    count: 850
                },
                {
                    icon: 'icons/s-meal-to-go.png',
                    label: 'Meals To Go',
                    count: 580
                },
            ]
        }
    }
}
</script>