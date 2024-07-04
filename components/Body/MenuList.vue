<template>
    <div>
        <div v-if="category?.id" class="mt-8 text-center flex flex-col items-center gap-4">
            <h3 class="border py-2 px-4 inline-block dm-serif uppercase">{{ category.name }}</h3>
            <h4 class="text-2xl">{{ category.korean_name }}</h4>
        </div>
        <div v-if="products && products.length">
            <div class="flex flex-wrap mb-6">
                <BodyMenuItem
                    class="w-1/2 md:w-4/12 lg:w-3/12 xl:w-[20%]"
                    v-for="(product, k) in products" :key="`menu-item-${k}`"
                    :images="product.images"
                    :name="product.name"
                    :korean="product.korean_name"
                    :price="product.price"
                    :summary="product.summary"
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
            pagination: 'product/pagination',
            category: 'category/SINGLE'
        })
    },
}
</script>