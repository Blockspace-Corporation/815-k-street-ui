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

        <div>
          <button v-if="selectedDelivery" class="w-full bg-[#F4B618] hover:bg-yellow-500 text-white font-bold py-2 px-4 " @click="nextTick">Next</button>
        </div>
        <button class="w-full text-grey font-bold py-2 px-4 rounded" @click="open_form = !open_form">{{ open_form ? 'Close Form' : 'Add New Address' }}</button>
        <div  v-if="open_form">
          <FormsAddressForm @form-submitted="fetchGuestAddressList"/>
        </div>
        <div>
          <button class="w-full bg-[#F4B618] hover:bg-yellow-500 text-white font-bold py-2 px-4 " @click="nextTick">Next</button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      selectedDelivery: null,
      open_form:false,
      addresses: [],
    }
  },
  async fetch() {
    let customer_id = this.user ? this.user.customer.id : this.customer ? this.customer.id : 0;
    console.log('Cutomer ID: ', customer_id)
    let url = this.user ? `/address` : `/guest/address/list`;
    console.log('URL: ', url)
    try{
      const response = await this.$axios.get(url,{
        params: {
          customer_id,
        }
      })
      if (response.status == 200) {
        console.log('response: ', response.data.addresses)
        this.addresses = response.data.addresses
      }
    }catch{
      console.log('Error')
    }
  },
  mounted() {
      // this.fetchData();
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
    ...mapGetters({
        address: 'customer_address/ADDRESS',
        guest_address: 'customer_address/GUEST_ADDRESS',
    }),
    // ...mapActions({
      //   fetchGuestAddressList:'customer_address/fetchGuestAddressList'
    // }),
    // fetchData() {
    //     this.fetchAddressList(this.customer.id);
    //     this.fetchGuestAddressList(this.customer.id);
    // },
    async fetchGuestAddressList() {
      let customer_id = this.user ? this.user.customer.id : this.customer ? this.customer.id : 0;
      console.log('Cutomer ID: ', customer_id)
      let url = this.user ? `/address` : `/guest/address/list`;
      console.log('URL: ', url)
      try{
        const response = await this.$axios.get(url,{
          params: {
            customer_id,
          }
        })
        if (response.status == 200) {
          console.log('response: ', response.data.addresses)
          this.addresses = response.data.addresses
        }
      }catch{
        console.log('Error')
      }
    },
    async nextTick(){
      this.$emit('next-step', 2);
    },
  }
}
</script>
