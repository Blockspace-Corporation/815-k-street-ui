<template>
    <div class="p-2">
        <nuxt-link :to="`product/${slug}`" class="flex flex-col gap-2 items-center bg-gradient-to-b from-[#15191F00] via-[#15191F] to-[#15191F] hover:to-[#15191F00] px-2 py-6 ease-in-out duration-500">
            <img :src="img.filename" alt="">
            <span class="font-bold text-lg dm-serif">{{ name }}</span>
            <span class="font-bold text-xl">마라 전골</span>
            <p class="text-sm text-center">Spicy beef stew with veggies in aromatic broth</p>
            <span class="text-[#F0A323] dm-serif text-xl">
                ₱ {{ price.toFixed(2) }}
            </span>
            <div class="flex gap-2 items-center w-full">
                <div class="flex gap-2 w-1/2 h-full items-center bg-white p-3 text-[black] flex-1">
                    <button type="button"  @click.prevent.stop="qty--">-</button>
                    <input type="text" class="flex-1 text-center w-full" v-model="qty">
                    <button type="button" @click.prevent.stop="qty++">+</button>
                </div>
                <Button class="flex-1 w-1/2">Add to Cart</Button>
            </div>
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
    data() {
        return {
            qty: 1
        }
    },
    computed: {
        img() {
            return this.images.find( (item) => item.cover == true )
        }
    }
}
</script>