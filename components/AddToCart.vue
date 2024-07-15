<template>
  <div>
    <Button  @click="addToCart">
      <span class="hidden md:inline">Add to Cart</span>
      <i class="fas fa-cart-plus md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </i>
    </Button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    quantity: {
      default: '',
      type: Number
    },
    menu: {
      default: () => ({}),
      type: Object
    },
    combinations: {
      default: () => ({}),
      type: Object
    }
  },
  data() {
    return {
      cart:{
        cart_id:0,
        product_id:0,
        product_combination_id:0,
        customer_id:0,
        quantity:0
      },
      carts:[]
    }
  },
  computed: {
    ...mapState('auth', {
      user: state => state.user
    }),
  },
  methods: {
    ...mapActions({
      set: 'cart/storeTemporaryCartObject',
    }),
    async addToCart() {
      const productJson = { ...this.menu };
      let combination = null;
      let combination_id = 0;
      if (this.combinations) {
        combination = { ...this.combinations };
        combination_id = combination.id
      }

      if(this.user){
        console.log('add to cart Clicked :',  combination ? combination.id : 0)
        try {
          this.cart.product_id = productJson.id;
          this.cart.customer_id = this.user.customer.id;
          this.cart.quantity = this.quantity;
          this.cart.cart_id = 0;
          this.cart.product_combination_id = combination ? combination.id : 0;

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
        this.carts = { quantity: this.quantity, product: productJson, product_combination_id:combination_id, product_combination:combination }
        console.log(this.carts)
        this.set(this.carts);
        this.$toast.success('Item added to cart!')
      }
    },
  },
}
</script>
