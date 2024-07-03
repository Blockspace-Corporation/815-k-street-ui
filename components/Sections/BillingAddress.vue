<template>
  <div>
      <form v-if="user==null" @submit.prevent="submitOrder">
        <div class="w-full">
          <div class="p-4">
            <div class="w-full">
              <h2 class="text-lg font-bold">Billing Address</h2>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="address">Title</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" v-model="billing.address">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="address">Name</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" v-model="billing.address">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="address">Room no. | House no. | Block</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" v-model="billing.address">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="address">Street Address</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" v-model="billing.address">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="city">Company</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" v-model="billing.city">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="city">City</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" v-model="billing.city">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="state">Province or State</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="state" type="text" v-model="billing.state">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="zip">Postal Code</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="zip" type="text" v-model="billing.zip">
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-4">
          <button class="w-full bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="submit">CONTINUE</button>
        </div>
      </form>
      <div v-else>
        <ul>
          <li v-for="(item, index) in addresses" :key="index" class="mb-4">
            <div class="bg-gray-100 rounded shadow-md p-4 flex flex-wrap"
            :class="[selectedDelivery === item.id? 'border border-red-500' : '']">
              <div class="w-full  p-4">
                  <label>
                    <input type="radio" :id="`delivery-${index}`" :value="item.id" v-model="selectedDelivery"  class="mr-2">
                    <span class="text-lg font-bold" style="display: inline-block;">{{ item.title }}</span>
                    <p class="text-gray-600">{{ item.name }} </p>
                    <p class="text-gray-600">{{item.address}}  {{item.street_address}} {{item.city}} {{item.state_province}} {{ item.postal_code }}</p>
                  </label>
              </div>
            </div>
          </li>
        </ul>
        <div class="flex justify-between mt-4">
          <button class="w-full bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" @click="submitOrder">CONTINUE</button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selectedDelivery: null,
      addresses: [],
      billing: {
        title:'',
        name: '',
        address: '',
        street_address:'',
        company:'',
        city: '',
        state_province: '',
        postal_code: ''
      },
    }
  },

  async fetch() {
    let customer_id= this.user.customer.id;
    const response = await this.$axios.get(`/customer/address`,{
      params: {
        customer_id,
      }
    })
    if (response.status == 200) {
      this.addresses = response.data.addresses
    }
  },
  computed: {
    ...mapState('auth', {
      user: state => state.user
    }),
  },
  methods: {
    submitOrder() {
      console.log("Order submitted!");
      this.$emit('next-step', 3);
    }
  }
}
</script>
