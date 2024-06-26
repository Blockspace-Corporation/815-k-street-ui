<template>
    <router-link :to="url" class="p-2 bg-transparent text-white text-sm hover:text-link-hover uppercase">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        url: null
    }
}
</script>

<style scoped>
.nuxt-link-exact-active {
    color: #FFB700;
}
</style>