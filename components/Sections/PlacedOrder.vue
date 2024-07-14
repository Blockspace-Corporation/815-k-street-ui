<template>
  <div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <!-- <SectionsCart /> -->

    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-2/3 xl:w-2/3 p-4">
        <ul>
          <li v-for="(item, index) in carts" :key="index" class="mb-4  text-white">
            <div class="menu-item rounded shadow-md p-4 flex flex-wrap">
              <div class="w-full md:w-1/5 xl:w-1/5" align="center">
                <!-- <img src="../../static/images/collection-2.png" alt="Product Image" class="object-cover rounded-md w-full md:w-1/2 xl:w-1/2"> -->
                <div v-for="image in item.product.images" :key="image.id">
                  <img :src=" image_dir + image.filename" alt="Product image">
                </div>
              </div>
              <div class="w-full md:w-2/5 xl:w-2/5 p-4">
                <h2 class="text-lg font-bold">{{ item.product.name }}</h2>
                <p class="">{{ item.product.summary }}</p>
              </div>
              <div class="w-full md:w-2/5 xl:w-2/5 p-4">
                 <div class="grid grid-cols-3 gap-1 grid-auto-flow">
                    <div class="col-span-2">
                      <div>
                        <a class="flex justify-center items-center w-full font-bold py-2 px-4 rounded ">
                          <button class="font-bold py-2 px-4 rounded flex justify-start" @click="incrementQuantity(item)">+</button>
                          {{ item.quantity }}
                          <button class="hover:text-orange font-bold py-2 px-4 rounded  flex justify-end" @click="decrementQuantity(item)">-</button>
                        </a>
                      </div>
                      <div>
                        <button class="justify-center w-full bg-red-700 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" @click="removeItemFromCart(item)">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>&nbsp;
                      </div>
                    </div>
                    <div class="p-4">
                      <!-- <p class="text-lg font-bold">PHP&nbsp;{{ item.product.price.toFixed(2) }}</p> -->
                      <p class="ml-1 text-[#F0A323]">PHP {{ getPrice(item) }}</p>
                    </div>
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/3 xl:w-1/3 p-4">

        <div class="bg-white rounded shadow-md p-4 flex flex-wrap  mb-2">

          <div class="w-full ">
            <div class="w-full bg-white rounded p-4 flex flex-wrap">
              <div class="grid  gap-4">
                <h2 class="text-lg font-bold mb-4">Discount</h2>
              </div>
              <div class="w-full grid grid-cols-2 gap-4">
                <div>
                  No Discount available
                </div>
                <div align="right">
                  <!-- 100.00 PHP -->
                </div>
              </div>
            </div>
          </div>
        </div>

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
                </div>
                <div align="right">
                  <p class="text-lg font-bold">{{ subtotal }}&nbsp;PHP</p>
                </div>

                <div>
                  <p class="text-lg ">Total Discount:</p>
                </div>
                <div align="right">
                  <p class="text-lg font-bold">{{ discount }}&nbsp;PHP</p>
                </div>

                <div>
                  <p class="text-lg  border-b border-gray-900/10 pb-12">Tax (12%):</p>
                </div>
                <div align="right">
                  <p class="text-lg font-bold border-b border-gray-900/10 pb-12">{{ tax }}&nbsp;PHP</p>
                </div>

                <div>
                  <p class="text-lg ">Total:</p>
                </div>
                <div align="right">
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
      image_dir: process.env.STORAGE_URL,
      form:{
        sub_total:0,
        discount: 20,
        shipping:0,
        tax:0,
        total:0
      },
      carts: [],
    }
  },
  async fetch() {
    if(this.user){
      let customer_id = this.user.customer.id;
      // const response = await this.$axios.get(`/customer/cart?search_key=${this.search_key}`)
      const response = await this.$axios.get('/cart', {
        params: {
          customer_id,
          per_page: 10
        }
      })
      if (response.status == 200) {
        this.carts = response.data.data[0].items
        console.log(response.data.data[0].items)

        const images = []
        this.carts.forEach(item => {
          item.product.images.forEach(image => {
            images.push(image.filename)
          })
        })
      }
    }else{
      this.carts = this.temporary_cart
    }
    console.log(this.carts)
  },
  computed: {
    ...mapState('auth', {
      user: state => state.user
    }),
    ...mapGetters({
        data: 'cart/DATA',
        temporary_cart: 'cart/CART',
    }),
    getPrice() {
      return (item) => {
        return item.product_combination_id  ? item.product_combination.price.toFixed(2) : item.product.price.toFixed(2);
      }
    },
    subtotal() {
      // return this.carts && this.carts.length > 0
      //   ? parseFloat(this.carts.reduce((acc, item) => acc + item.product.price * item.quantity, 0)).toFixed(2)
      //   : 0;
      return this.carts && this.carts.length > 0
        ? parseFloat(this.carts.reduce((acc, item) => {
          const price = item.product_combination_id != 0 ?
            item.product_combination.price :  item.product.price ;
          return acc + price * item.quantity;
        }, 0)).toFixed(2)
        : 0;
    },
    tax() {
      return parseFloat(this.subtotal * 0.12).toFixed(2)
    },
    discount() {
      return 0; // parseFloat(this.subtotal * 0.20).toFixed(2)
    },
    total() {
      return parseFloat((this.subtotal  * 1.12) - this.discount ).toFixed(2)
    },
    formData() {
      return {
        sub_total: this.subtotal,
        shipping: this.shipping,
        tax: this.tax,
        total: this.total
      }
    },
    productImages() {
      return this.carts.map(item => item.product.images)
    }
  },
  mounted() {
    Object.assign(this.form, this.formData)
  },
  methods: {
    ...mapActions({
      set: 'order_summary/storeOrderSummaryObject',
      increaseQty: 'cart/increaseQty',
      decreaseQty: 'cart/decreaseQty',
      removeItem: 'cart/removeItem',
    }),
    async removeItemFromCart(item) {
      await this.removeItem(item);
      this.carts = this.temporary_cart
    },
    async incrementQuantity(item) {
      await this.increaseQty(item);
      this.carts = this.temporary_cart
    },
    async decrementQuantity(item) {
      await this.decreaseQty(item);
      this.carts = this.temporary_cart
    },
    async checkout() {
      this.form.sub_total = this.subtotal;
      this.form.shipping = 0;
      this.form.discount = this.discount;
      this.form.tax = this.tax;
      this.form.total = this.total;
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

<style lang="css" scoped>
.menu-item {
    background-image: linear-gradient(to left, #15191F00, #15191F, #15191F);
}
</style>
