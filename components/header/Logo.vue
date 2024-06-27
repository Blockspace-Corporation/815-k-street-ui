<template>
    <router-link to="/">
        <img src="~/static/logo.webp" class="hidden md:block ease-in-out duration-300" :class="{'h-20': !dense, 'h-14': dense}" alt="">
        <img src="~/static/logo.webp" class="h-10 md:hidden" alt="">
    </router-link>
</template>

<script>
export default {
    props: {
        dense: false
    }
}
</script>