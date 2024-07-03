<template>
    <ul class="flex items-center justify-center gap-1">
        Filter:
        <li>
            <BodyMenuTabItem :active="!$route.query.category" @click="getProducts(null); setCategory(null)">All</BodyMenuTabItem>
        </li>
        <template v-if="categories && categories.length" >
            <li v-for="(category, k) in categories" :key="`categogry-${k}`">
                <BodyMenuTabItem
                    :active="parseInt($route.query.category) == category.id"
                    @click="getProducts(category)"
                >
                    {{ category.name }}
                </BodyMenuTabItem>
            </li>
        </template>
    </ul>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
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
        ...mapMutations({
            setCategory: 'category/setCategory'
        }),
        getProducts(category) {
            
            if (category) {
                this.setCategory(category)

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