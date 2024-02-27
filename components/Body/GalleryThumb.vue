<template>
    <div>
        <img v-if="img != 'empty'" :src="img" alt="">
        <div v-else></div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            default: '',
            type: String
        }
    }
}
</script>