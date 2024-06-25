<template>
    <div v-if="data && data.images && data.images.length">
        <no-ssr>
            <carousel class="w-full" :items="1">
                <img
                    v-for="(img, k) in data.images"
                    :key="`main-img-${k}`"
                    :src="getimage(img.filename)"
                    class="bg-[#F9F9F9] rounded-xl p-6"
                >
            </carousel>
            <carousel class="w-full" :items="4">
                <img
                    v-for="(img, k) in data.images"
                    :key="`main-img-${k}`"
                    :src="getimage(img.filename)"
                    class="bg-[#F9F9F9] rounded-xl mt-4 p-2"
                >
            </carousel>
        </no-ssr>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    // components: { carousel },
    computed: {
        ...mapGetters({
            data: 'product/SINGLE',
        }),
    },
    methods: {
        getimage(path) {
            return process.env.STORAGE_URL + path
        }
    }
}
</script>