<template>
  <div class="fixed inset-0 overflow-hidden" :class="{ 'opacity-0': !open }">
    <div class="absolute inset-0  transition-opacity" @click="open = false"></div>

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div class="pointer-events-auto w-screen max-w-md transition transform" :class="{ 'translate-x-full': !open, 'translate-x-0': open }">
            <div class="flex h-full flex-col overflow-y-scroll bg-black shadow-xl">
              <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2 class="text-lg font-medium text-gray-900">Meal in cart</h2>
                  <div class="ml-3 flex h-7 items-center">
                    <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" @click="open = false">
                      <span class="absolute -inset-0.5" />
                      <span class="sr-only">Close panel</span>
                    </button>
                  </div>
                </div>

                <div class="mt-8">
                  <div class="flow-root">
                    <ul role="list" class="-my-6 divide-y divide-gray-200 menu-item rounded">
                      <li v-for="(item, index) in carts" :key="index" class="mb-4">
                        <br>
                        <div class="grid grid-cols-5 gap-4">
                          <div>
                            <div class="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 ml-1">
                              <div v-if="item.product && item.product.images" v-for="image in item.product.images" :key="image.id">
                                <img :src=" image_dir + image.filename" alt="Product image"  class="h-full w-full object-cover object-center">
                              </div>
                            </div>
                          </div>
                          <div class="col-span-3">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a >{{ item.product.name }}</a>
                                </h3>
                              </div>
                              <p class="mt-1 text-sm text-gray-500">{{ item.product.summary }}</p>
                              <br>
                              <!-- <p class="ml-1">PHP&nbsp;{{ item.combination.price }}</p> -->
                              <p class="ml-1 text-[#F0A323]">PHP {{ getPrice(item) }}</p>
                            </div>
                          </div>
                          <div>
                            <div >
                              <div>
                                <a class="flex justify-center items-center w-full font-bold py-2 px-4 rounded">
                                  <button class="font-bold py-2 px-4 rounded hover:border hover:border-gray-100" @click.stop="incrementQuantity(item)">+</button>
                                  {{ item.quantity }}
                                  <button class="hover:text-orange font-bold py-2 px-4 rounded hover:border hover:border-gray-100" @click.stop="decrementQuantity(item)">-</button>
                                </a>
                              </div>
                              <div class="flex">
                                <!-- <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button> -->
                                <button class="justify-center w-full bg-red-600 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded " @click.stop="removeItemFromCart(item)">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <div class="w-full">
                    <div class="w-full rounded p-4 flex flex-wrap">
                      <div class="grid  gap-4">
                        <h2 class="text-lg font-bold mb-4">Summary</h2>
                      </div>
                      <div class="w-full grid grid-cols-2 gap-4">
                        <div>
                          <p class="text-lg ">Subtotal:</p>
                        </div>
                        <div align="right">
                          <p class="text-lg font-bold">{{ subtotal }}&nbsp;PHP</p>
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
                </div>
                <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div class="mt-6">
                  <a @click.stop="checkout" class="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-900">Place Order</a>
                </div>
                <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{{ ' ' }}
                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="open = false">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
      open: true,
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

        const item_images = []
        this.carts.forEach(item => {
          item.product.images.forEach(image => {
            item_images.push(image.filename)
          })
        })
        this.images = item_images
      }
    }else{
      this.carts = this.temporary_cart
    }
    // console.log(this.carts)
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
      return this.carts && this.carts.length > 0
      // ? parseFloat(this.carts.reduce((acc, item) => acc + item.product.price * item.quantity, 0)).toFixed(2)
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
      return parseFloat(this.subtotal * 0.20).toFixed(2)
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
      if(this.user){
        try {
          let response = await this.$axios.delete(`/cart/${item.id}`);
          if (response.status == 201) {
            await this.set(response.data);
            this.$toast.success("Item remove successfull!")
            this.carts = this.carts.filter(cartItem => cartItem.id !== item.id);
          }
        } catch (error) {
          console.log(error);
          this.$toast.error("Removing item failed! ")
        }
      }
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
      if(this.subtotal != 0){
        try {
          await this.set(this.form);
          console.log("Checkout clicked!")
          this.$router.push('/order-summary')
        } catch (error) {
          console.error("Error during checkout:", error)
        }
      }else{
        this.$toast.error("There are currently no items in your cart.")
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
