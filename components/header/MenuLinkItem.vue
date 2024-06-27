<template>
    <router-link :to="url" class="p-2 bg-transparent text-white text-sm hover:text-link-hover uppercase relative">
        <slot></slot>
        <span class="line hidden absolute h-1 bg-[#FFB700] mt-1.5 w-[30px] left-[50%] translate-x-[-50%]"></span>
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
    position: relative;
}

.nuxt-link-exact-active .line {
    display: block !important;
}
</style>