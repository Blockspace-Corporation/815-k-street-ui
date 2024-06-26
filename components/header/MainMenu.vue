<template>
    <ul class="fixed top-0 left-0 w-full md:w-auto h-screen md:h-auto md:static hidden md:flex flex-col md:flex-row items-center justify-center gap-2 bg-black md:bg-transparent">
        <li v-for="(link, k) in links" :key="`nav-${k}`" class="flex items-center">
            <HeaderMenuLinkItem :url="link.url">{{ link.label }}</HeaderMenuLinkItem>
            <span v-if="k < links.length - 1" class="border border-1 border-[#F0A323] w-1.5 h-1.5 block ml-2 rotate-45"></span>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { url: '/', label: 'Home'},
                { url: '/about', label: 'About Us'},
                { url: '/menu', label: 'Menu'},
                { url: '/gallery', label: 'Gallery'},
                { url: '/contact', label: 'Contact Us'},
            ]
        }
    }
}
</script>