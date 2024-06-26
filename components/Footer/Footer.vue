<template>
    <div class="bg-[#0A0D10] flex justify-center items-center py-12 lg:py-0 px-2 md:px-0">
        <div class="flex-1 md:pl-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <img src="~/static/logo-greyscale.webp" class="grayscale h-[83px]">
            <div class="flex flex-col gap-4 text-white text-xs">
                <ul class="flex gap-2 sm:gap-4 items-center flex-col sm:flex-row justify-center md:justify-start">
                    <li v-for="(link, k) in links" :key="`footer-link-${k}`">
                        <a :href="link.url">{{ link.label }}</a>
                    </li>
                </ul>
                <p class="text-center md:text-left">Copyright © 2024  Hwang Geum Seong. Last updated June 14, 2024</p>
            </div>
        </div>
        <img src="~/static/footer-img.webp" class="hidden lg:block h-[230px]">
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { url: '#', label: 'Terms of Service' },
                { url: '#', label: 'Privacy Policy' },
                { url: '#', label: 'Cookie Policies' },
                { url: '#', label: 'FAQs' },
                { url: '#', label: 'Reservations' },
            ],
        }
    }
}
</script>