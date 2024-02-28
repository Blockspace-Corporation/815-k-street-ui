<template>
    <div class="flex flex-wrap">
        <BodyMenuItem
            class="w-3/12"
            v-for="(product, k) in products" :key="`menu-item-${k}`"
            :img="product.img"
            :name="product.name"
            :price="product.price"
            :rating="product.rating"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    img: 'images/product-1.png',
                    rating: 4,
                    name: 'Salisbury Steak',
                    price: '$350.00',
                    category: 1,
                },
                {
                    img: 'images/product-2.png',
                    rating: 5,
                    name: 'English Breakfast',
                    price: '$350.00',
                    category: 1,
                },
                {
                    img: 'images/product-3.png',
                    rating: 5,
                    name: 'Buldak',
                    price: '$286.00',
                    category: 1,
                },
                {
                    img: 'images/product-4.png',
                    rating: 5,
                    name: 'Greek Salad',
                    price: '$350.00',
                    category: 1,
                },
                {
                    img: 'images/product-5.png',
                    rating: 5,
                    name: 'Creamed Chipped Prawn',
                    price: '$350.00',
                    category: 1,
                },
                {
                    img: 'images/product-6.png',
                    rating: 4,
                    name: 'Mexican Bean Salad',
                    price: '$370.00',
                    category: 1,
                },
                {
                    img: 'images/product-7.png',
                    rating: 5,
                    name: 'Scrambled Eggs',
                    price: '$270.00',
                    category: 1,
                },
                {
                    img: 'images/product-8.png',
                    rating: 5,
                    name: 'Thai Tom Yum Soup',
                    price: '$270.00',
                    category: 1,
                }
            ]
        }
    }
}
</script>