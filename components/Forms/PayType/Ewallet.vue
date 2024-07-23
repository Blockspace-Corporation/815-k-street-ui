<template>
  <div>
    <form @submit.prevent="submitOrder">
      <div class="w-full">
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="card-number">Name</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" v-model="billing.name">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="card-number">Email</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" v-model="billing.email">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="card-number">Phone</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" v-model="billing.phone">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPayment:null,
      paymentOptions: [
        {
          id:1,
          name: 'GCASH'
        },
        {
          id:2,
          name: 'CREDIT/DEBIT CARD'
        },
        {
          id:3,
          name: 'BANK TRANSFER'
        },
        {
          id:4,
          name: 'PAY MAYA'
        }
      ],
      billing: {
        name: '',
        email: '',
        phone: '',
      },
    }
  },
  methods: {
    async prevTick(){
      this.$emit('next-step', 1);
    },
    submitOrder() {
      // Implement order submission logic here
      console.log("Order submitted!")
      this.$emit('next-step', 3);
    }
  }
}
</script>
