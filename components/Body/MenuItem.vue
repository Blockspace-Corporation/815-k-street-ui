<template>
    <div class="p-2">
        <nuxt-link :to="`product/${slug}`" class="flex flex-col gap-1 items-center bg-shadowed-white px-2 py-6">
            <img :src="img.filename" alt="">
            <StarRating :value="rating" />
            <span class="font-bold text-lg">{{ name }}</span>
            <Divider />
            <span class="text-grey-lighter">
                {{ price }}
                <span class="text-xs">PHP</span>
            </span>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            default: [],
            type: Array
        },
        name: {
            default: '',
            type: String
        },
        rating: {
            default: 0,
            type: Number
        },
        price: {
            default: '',
            type: Number
        },
        slug: {
            default: '',
            type: String
        }
    },
    computed: {
        img() {
            return this.images.find( (item) => item.cover == true )
        }
    }
}
</script>