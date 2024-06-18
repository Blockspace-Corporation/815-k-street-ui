<template>
    <div v-if="products && products.length">
        <div class="flex flex-wrap mb-6">
            <BodyMenuItem
                class="w-3/12"
                v-for="(product, k) in products" :key="`menu-item-${k}`"
                :images="product.images"
                :name="product.name"
                :price="product.price"
                :rating="product.rating"
                :slug="product.id"
            />
        </div>
        <div class="flex justify-end items-center">
            <Pagination :links="pagination" store_module="product" />
        </div>
    </div>
    <div v-else class="flex justify-center h-40 items-center">
        <p>No result on this category.</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Pagination from '../Pagination.vue'
export default {
  components: { Pagination },
    computed: {
        ...mapGetters({
            products: 'product/DATA',
            total_items: 'product/total',
            pagination: 'product/pagination'
        })
    },
}
</script>