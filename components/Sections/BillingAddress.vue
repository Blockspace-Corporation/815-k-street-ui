<template>
  <div>
      <div>
        <ul v-if="addresses">
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
        <ul v-if="!addresses || addresses.length === 0" >
          <form @submit.prevent="submitOrder">
            <div class="w-full">
              <div class="p-4">
                <div class="w-full">
                  <h2 class="text-lg font-bold">Address</h2>
                  <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="address">Title</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="title" type="text" v-model="billing.title" required
                      :class="{ 'border border-red-500': !billing.title }">
                  </div>
                  <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="address">Name</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="name" type="text" v-model="billing.name" required
                      :class="{ 'border border-red-500': !billing.name }">
                  </div>
                  <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="address">Room no. | House no. | Block</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="address" type="text" v-model="billing.address" required
                      :class="{ 'border border-red-500': !billing.address }">
                  </div>
                  <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="address">Street Address</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="street_address" type="text" v-model="billing.street_address" required
                      :class="{ 'border border-red-500': !billing.street_address }">
                  </div>
                  <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="city">Company</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="company" type="text" v-model="billing.company" required
                      :class="{ 'border border-red-500': !billing.company }">
                  </div>
                  <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="city">City</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="city" type="text" v-model="billing.city" required
                      :class="{ 'border border-red-500': !billing.city }">
                  </div>
                  <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="state">Province or State</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="state_province" type="text" v-model="billing.state_province" required
                      :class="{ 'border border-red-500': !billing.state_province }">
                  </div>
                  <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="zip">Postal Code</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="postal_code" type="text" v-model="billing.postal_code" required
                      :class="{ 'border border-red-500': !billing.postal_code }">
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="flex justify-between mt-4">
              <button class="w-full bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="submit">CONTINUE</button>
            </div> -->
          </form>

        </ul>
        <div class="flex justify-between mt-4">
          <button class="w-full bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" @click="submitOrder">CONTINUE</button>
        </div>
      </div>

      <!-- <div>
        <button class="w-full bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" @click="prevTick">Previous</button>
        <button class="w-full bg-[#F4B618] hover:bg-yellow-500 text-white font-bold py-2 px-4 " @click="nextTick">Next</button>
      </div> -->
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
        customer_id:0,
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
    let customer_id = this.user ? this.user.customer.id : this.customer ? this.customer.id : 0;
    console.log('Cutomer ID: ', customer_id)
    let url = this.user ? `/address` : `/guest/address`;
    try{
      const response = await this.$axios.get(url,{
        params: {
          customer_id,
        }
      })
      if (response.status == 200) {
        this.addresses = response.data.addresses
      }
    }catch{
    }
  },
  computed: {
    ...mapState('auth', {
      user: state => state.user
    }),
    ...mapState('customer', {
      customer: state => state.single
    })
  },
  methods: {
    async prevTick(){
      this.$emit('next-step', 1);
    },
    async nextTick(){
      this.$emit('next-step', 3);
    },
    async submitOrder() {
      try{
        if(this.billing && Object.values(this.billing).every(val => val !== null && val !== undefined)){
          this.billing.customer_id = this.user ? this.user.customer.id : this.customer ? this.customer.id : 0;
          let response = await this.$axios.post('/guest/address', this.billing);
          if (response.status == 201) {
            // await this.set(this.billing);
            this.$toast.success("Guest Customer Address created successfully")
          }else{
            this.$toast.error("Error during adding guest customer address")
          }
        }else{
          this.$toast.info("Please fill in all the required fields")
        }
      }catch{
        this.$toast.error("Error during adding guest customer address:")
      }finally{
        this.$emit('next-step', 3);
      }

    }
  }
}
</script>
