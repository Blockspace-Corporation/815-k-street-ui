<template>
    <div class="flex flex-col gap-1 items-center">
        <img :src="img" alt="">
        <br />
        <h3 class="font-bold text-lg">{{ name }}</h3>
        <p>{{ label }}</p>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            default: '',
            type: String
        },
        name: {
            default: '',
            type: String
        },
        label: {
            default: '',
            type: String
        },
    }
}
</script>p