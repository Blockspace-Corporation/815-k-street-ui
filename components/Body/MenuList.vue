<template>
    <div class="flex flex-wrap" v-if="products.length">
        <BodyMenuItem
            class="w-3/12"
            v-for="(product, k) in products" :key="`menu-item-${k}`"
            :images="product.images"
            :name="product.name"
            :price="product.price"
            :rating="product.rating"
        />
    </div>
    <div v-else class="flex justify-center h-40 items-center">
        <p>No result on this category.</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            products: 'product/DATA',
            total_items: 'product/total'
        })
    },
}
</script>