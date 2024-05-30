<template>
    <ul class="flex items-center justify-center gap-1">
        <li>
            <BodyMenuTabItem :active="!$route.query.category" @click="getProducts(null)">All</BodyMenuTabItem>
        </li>
        <li v-for="(category, k) in categories" :key="`categogry-${k}`">
            <BodyMenuTabItem
                :active="parseInt($route.query.category) == category.id"
                @click="getProducts(category)"
            >
                {{ category.name }}
            </BodyMenuTabItem>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            categories: 'category/DATA',
            total_items: 'category/total'
        })
    },
    methods: {
        ...mapActions({
            filterProducts: 'product/fetchList'
        }),
        getProducts(category) {
            
            if (category) {
                this.filterProducts({
                    category: category.id
                });

                this.$router.push({
                    name: "menu",
                    query: {
                        category: `${category.id}-${category.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`
                    }
                })
            } else {
                this.filterProducts();
                this.$router.push({name: "menu"})
            }
        }
    }
}
</script>