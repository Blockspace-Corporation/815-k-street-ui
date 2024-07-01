<template>
  <div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-2/3 xl:w-2/3 p-4">
        <ul>
          <li v-for="(item, index) in cart" :key="index" class="mb-4">
            <div class="bg-white rounded shadow-md p-4 flex flex-wrap">
              <div class="w-full md:w-1/5 xl:w-1/5" align="center">
                <img src="../../static/images/collection-2.png" alt="Product Image" class="object-cover rounded-md w-full md:w-1/2 xl:w-1/2">
              </div>
              <div class="w-full md:w-2/5 xl:w-2/5 p-4">
                <h2 class="text-lg font-bold">{{ item.name }}</h2>
                <p class="text-gray-600">{{ item.description }}</p>
              </div>
              <div class="w-full md:w-2/5 xl:w-2/5 p-4">
                <!-- <button class="bg-red-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" @click="removeItem(item)">Remove</button>&nbsp; -->
                 <div class="grid grid-cols-3 gap-1 grid-auto-flow">
                    <div class="p-4 col-span-2">
                      <div>
                        <a class="bg-gray-200 font-bold py-2 px-4 rounded">
                        <button class="font-bold py-2 px-4 rounded" @click="incrementQuantity(item)">+</button>
                         {{ item.quantity }}
                        <button class="hover:text-orange font-bold py-2 px-4 rounded" @click="decrementQuantity(item)">-</button></a>
                      </div>
                    </div>
                    <div class="p-4">
                      <p class="text-lg font-bold">{{ item.price }}&nbsp;PHP</p>
                    </div>
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/3 xl:w-1/3 p-4">

        <div class="bg-white rounded shadow-md p-4 flex flex-wrap">
          <!-- Order Summary -->
          <div class="w-full">
            <div class="w-full bg-white rounded p-4 flex flex-wrap">
              <div class="grid  gap-4">
                <h2 class="text-lg font-bold mb-4">Order Summary</h2>
              </div>
              <div class="w-full grid grid-cols-2 gap-4">
                <div>
                  <p class="text-lg ">Subtotal:</p>
                  <p class="text-lg ">Discount (20%):</p>
                  <p class="text-lg  border-b border-gray-900/10 pb-12">Tax (12%):</p>
                  <p class="text-lg ">Total:</p>
                </div>
                <div align="right">
                  <p class="text-lg font-bold">{{ subtotal }}&nbsp;PHP</p>
                  <p class="text-lg font-bold">{{ discount }}&nbsp;PHP</p>
                  <p class="text-lg font-bold border-b border-gray-900/10 pb-12">{{ tax }}&nbsp;PHP</p>
                  <p class="text-lg font-bold ">{{ total }}&nbsp;PHP</p>
                </div>
              </div>
            </div>
          </div>

          <button class="w-full bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 " @click="checkout">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      form:{
        sub_total:0,
        discount: 20,
        shipping:0,
        tax:0,
        total:0
      },
      cart: [
        {
          id: 1,
          name: "Product 1",
          description: "This is a product description",
          price: 19.99,
          image: "https://via.placeholder.com/300",
          quantity: 1
        },
        {
          id: 2,
          name: "Product 2",
          description: "This is another product description",
          price: 9.99,
          image: "https://via.placeholder.com/300",
          quantity: 2
        }, {
          id: 3,
          name: "Product 2",
          description: "This is another product description",
          price: 9.99,
          image: "https://via.placeholder.com/300",
          quantity: 2
        },
        // ...
      ],
    }
  },
  computed: {
    ...mapGetters({
        data: 'cart/DATA',
    }),
    subtotal() {
      return parseFloat(this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2)
    },
    tax() {
      return parseFloat(this.subtotal * 0.12).toFixed(2)
    },
    discount() {
      return parseFloat(this.subtotal * 0.20).toFixed(2)
    },
    total() {
      return parseFloat((this.subtotal - this.discount) + this.tax + this.shipping).toFixed(2)
    },
    formData() {
      return {
        sub_total: this.subtotal,
        shipping: this.shipping,
        tax: this.tax,
        total: this.total
      }
    }
  },
  mounted() {
    Object.assign(this.form, this.formData)
  },
  methods: {
    ...mapActions({
      set: 'order_summary/storeOrderSummaryObject',
    }),
    removeItem(item) {
      this.cart = this.cart.filter(i => i.id !== item.id)
    },
    incrementQuantity(item) {
      item.quantity++
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--
      }else{
        this.removeItem(item)
      }
    },
    async checkout() {
      // Implement checkout logic here
      this.form.sub_total = this.subtotal;
      this.form.shipping = 0;
      this.form.discount = this.discount;
      this.form.tax = this.tax;
      this.form.total = this.total;
      const setData = await this.set(this.form);
      // console.log("Checkout clicked!")
      // this.$router.push('/checkout')
      try {
        await this.set(this.form);
        console.log("Checkout clicked!")
        this.$router.push('/checkout')
      } catch (error) {
        console.error("Error during checkout:", error)
      }
    }
  }
}
</script>
