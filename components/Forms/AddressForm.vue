<template>
  <div>
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
      <div class="flex justify-between mt-4">
        <button class="w-full bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="submit">CONTINUE</button>
      </div>
    </form>
  </div>
</template>


<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
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
  computed: {
    ...mapState('auth', {
      user: state => state.user
    }),
    ...mapState('customer', {
      customer: state => state.single
    })
  },
  methods: {
    async submitOrder() {
      try{
        if(this.billing && Object.values(this.billing).every(val => val !== null && val !== undefined)){
          this.billing.customer_id = this.user ? this.user.customer.id : this.customer ? this.customer.id : 0;
          let response = await this.$axios.post('/guest/address', this.billing);
          if (response.status == 201) {
            console.log(response)
            console.log(response.data)
            // this.addresses.push(response.data)
            console.log(this.addresses)
            this.$toast.success("Guest Customer Address created successfully")
            await this.empty_form()
            this.$emit('form-submitted');
          }else{
            this.$toast.error("Error during adding guest customer address")
          }
        }else{
          this.$toast.info("Please fill in all the required fields")
        }
      }catch{
        this.$toast.error("Error during adding guest customer address:")
      }
    },
    async empty_form(){
        this.customer_id=0;
        this.title='';
        this.name='';
        this.address='';
        this.street_address='';
        this.company='';
        this.city='';
        this.state_province='';
        this.postal_code='';
    }
  }
}
</script>
