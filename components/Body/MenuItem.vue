<template>
    <div class="p-2">
        <nuxt-link 
            :to="`product/${slug}`" 
            class="menu-item flex flex-col gap-2 items-center px-4 py-8 ease-in-out duration-500 h-full"
        >
            <img :src="image_dir + img.filename" alt="">
            <div class="flex-1 flex flex-col gap-2 items-center">
                <span class="font-bold text-lg dm-serif">{{ name }}</span>
                <span class="font-bold text-xl -mt-2">{{ korean }}</span>
                <p class="text-sm text-center">{{ summary}}</p>
                <span v-if="!combinations.length" class="text-[#F0A323] dm-serif text-xl">
                    ₱ {{ price.toFixed(2) }}
                </span>
                <div v-else class="flex gap-4">
                    <div v-for="(combination, ck) in combinations" :key="`combination-${ck}`" class="flex gap-2 items-center">
                        <input type="radio" @click.stop/> 
                        <span class="text-[#F0A323] flex flex-col gap-0 items-start">
                            <span class="dm-serif text-lg leading-none">₱ {{ combination.price.toFixed(2) }}</span>
                            <span class="text-xs">{{ combination.combination_values }}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex gap-2 items-center w-full mt-3">
                <div class="flex gap-2 w-1/2 h-10 items-center bg-white p-3 text-[black] flex-1">
                    <button type="button"  @click.prevent.stop="qty--">-</button>
                    <input type="text" class="flex-1 text-center w-full" v-model="qty">
                    <button type="button" @click.prevent.stop="qty++">+</button>
                </div>
                <Button class="flex-1 w-1/2 text-xs h-10">Add to Cart</Button>
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
        combinations: {
            default: [],
            type: Array
        },
        name: {
            default: '',
            type: String
        },
        korean: {
            default: '',
            type: String
        },
        summary: {
            default: '',
            type: String
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
            qty: 1,
            image_dir: process.env.STORAGE_URL
        }
    },
    computed: {
        img() {
            return this.images.find( (item) => item.cover == true )
        }
    }
}
</script>

<style lang="css" scoped>
.menu-item {
    background-image: linear-gradient(to bottom, #15191F00, #15191F, #15191F);
}
.menu-item:hover {
    background-image: linear-gradient(to bottom, #15191F00, #15191F, #15191F00);
}
</style>