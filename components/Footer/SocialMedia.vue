<template>
    <div class="flex gap-6 items-center">
        <a v-for="(social, k) in socials" :key="`social-${k}`" :href="social.url">
            <img :src="social.img" alt=""  class="w-6"/>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socials: [
                {
                    img: 'icons/fb.png',
                    url: 'www.facebook.com'
                },
                {
                    img: 'icons/twitter.png',
                    url: 'www.twitter.com'
                },
                {
                    img: 'icons/instagram.png',
                    url: 'www.instagram.com'
                }
            ]
        }
    }
}
</script>
