<template>
    <div class="p-2">
        <div class="menu-item flex flex-col gap-2 items-center px-4 py-8 ease-in-out duration-500 h-full">
            <img :src="image_dir + img.filename" alt="">
            <nuxt-link :to="`product/${slug}`" class="flex-1 flex flex-col gap-2 items-center">
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
            </nuxt-link>
            <div class="flex gap-2 items-center w-full mt-3">
                <div class="flex gap-2 w-1/2 h-10 items-center bg-white p-3 text-[black] flex-1">
                    <button type="button"  @click.prevent.stop="qty--">-</button>
                    <input type="text" class="flex-1 text-center w-full" v-model="qty">
                    <button type="button" @click.prevent.stop="qty++">+</button>
                </div>
                <!-- <Button class="flex-1 w-1/2 text-xs h-10" @click="addToCart(product, quantity)">Add to Cart</Button> -->
                 <div class="flex-1 w-1/2 text-xs h-10">
                  <AddToCart :menu="product" :quantity="qty"/>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import AddToCartMixin from '../AddToCartMixin.js';
export default {
    // mixins: [addToCartMixin],
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
            type:  [String, Number]
        },
        product: {
          default: () => ({}),
          type: Object
        }
    },
    data() {
        return {
            qty: 1,
            image_dir: process.env.STORAGE_URL,
            cart:{
              cart_id:0,
              product_id:0,
              customer_id:0,
              quantity:0
            },
            carts:[]
        }
    },
    computed: {
        img() {
            return this.images.find( (item) => item.cover == true )
        },
        ...mapState('auth', {
          user: state => state.user
        }),
    },

  methods: {
    ...mapActions({
      set: 'cart/storeTemporaryCartObject',
    }),
    async addToCart() {
      try{
        const productJson = { ...this.product };

        if(this.user){
          console.log('add to cart Clicked')
          try {
            this.cart.product_id = productJson.id;
            this.cart.customer_id = this.user.customer.id;
            this.cart.quantity = this.qty;
            this.cart.cart_id = 0;

            console.log(this.cart)

            let response = await this.$axios.post('/cart', this.cart);
            if (response.status == 201) {
              await this.set(response.data);
              this.$toast.success("Customer registration successfull!")
            }
          } catch (error) {
            console.log(error);
            this.$toast.error("Add to cart failed! ")
          }
        }else{
          this.carts = { quantity: this.qty, product: productJson }
          this.set(this.carts);
          this.$toast.success('Item added to cart!')
        }
      }catch{
        this.$toast.success('Add to cart!')
      }
    },
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
