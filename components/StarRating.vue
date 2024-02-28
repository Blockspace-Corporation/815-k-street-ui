<template>
    <div class="flex gap-1 justify-center items-center">
        <span class="text-grey-lighter" :class="{'text-primary': value >= 1}">★</span>
        <span class="text-grey-lighter" :class="{'text-primary': value >= 2}">★</span>
        <span class="text-grey-lighter" :class="{'text-primary': value >= 3}">★</span>
        <span class="text-grey-lighter" :class="{'text-primary': value >= 4}">★</span>
        <span class="text-grey-lighter" :class="{'text-primary': value >= 5}">★</span>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            default: 0,
            type: Number
        }
    }
}
</script>