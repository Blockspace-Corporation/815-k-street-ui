<template>
    <div>
        <div class="flex flex-col gap-2 items-start justify-start text-left text-grey">
            <h1 class="text-2xl font-bold">{{ name }}</h1>
            <p>{{ summary }}</p>
            <StarRating :value="4" class="text-xl my-4"/>
            <div class="text-3xl font-bold flex items-start gap-2 text-[#F4B618]">
                {{ price }}
                <span class="text-xs">PHP</span>
            </div>
            <div class="my-4 flex flex-col gap-2">
                <div class="flex gap-2 items-center w-60">
                    <span class="flex-1">Quantity</span>
                    <div class="bg-[#E4E4E4] flex gap-2 px-4 py-1 rounded">
                        <button @click="quantity--">-</button>
                        <input type="text" v-model="quantity" class="bg-[#E4E4E4] text-center flex-1 w-16">
                        <button @click="quantity++">+</button>
                    </div>
                </div>
                <Button class="rounded" @click="$router.push({ name: 'cart' })">Add to Cart</Button>
            </div>
            <div class="opacity-70">Preparation time : {{ preparation_time }}</div>
            <!-- <div class="opacity-70">Preparation time : {{ data.preparation_time }}</div> -->


        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
          isOpen: false,
          preparation_time: '20 Mins',
          price: 100,
          name:'',
          summary:'',
          quantity: 0
        }
    },
    computed: {
        ...mapGetters({
            data: 'product/SINGLE',
        })
    },
}
</script>
