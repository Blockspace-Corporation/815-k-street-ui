<template>
    <div v-if="data">
        <p>
            {{ data.description }}
        </p>
        <div class="mt-6 hidden">
            <h3>Other related dishes you may like</h3>
            <div>
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
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            data: 'product/SINGLE',
        })
    },
}
</script>