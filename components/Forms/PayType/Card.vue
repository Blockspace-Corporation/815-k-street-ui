<template>
  <div>
    <form @submit.prevent="submitOrder">
      <div class="w-full">
        <h2 class="text-lg font-bold">Payment Information</h2>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="card-number">Card Number</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="card-number" type="text" v-model="payment.cardNumber">
        </div>
        <div class="mb-4">
          <div class="w-full grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold mb-2" for="expiration">Expiration Date</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="expiration" type="text" v-model="payment.expiration">
            </div>
            <div>
              <label class="block text-sm font-bold mb-2" for="cvv">CVV</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="text" v-model="payment.cvv">
            </div>
          </div>
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
      payment: {
        cardNumber: '',
        expiration: '',
        cvv: ''
      }
    }
  },
  methods: {
    async prevTick(){
      this.$emit('next-step', 2);
    },
    submitOrder() {
      // Implement order submission logic here
      console.log("Order submitted!")
      this.$emit('next-step', 3);
    }
  }
}
</script>
