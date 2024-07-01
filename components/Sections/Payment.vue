<template>
  <div>
    <ul>
      <li v-for="(item, index) in paymentOptions" :key="index" class="mb-4 " >
        <div class="bg-gray-100 rounded shadow-md p-4 flex flex-wrap border "
        :class="[selectedPayment === item.id? 'border border-red-500' : '']">
          <div class="w-full  p-4">
            <label>
              <input type="radio" :id="`payment-${index}`" :value="item.id" v-model="selectedPayment"  class="mr-2">
              <span class="text-lg font-bold md:inline-block sm:block" style="display: inline-block;">{{ item.name }}</span>
            </label>
          </div>
          <div v-if="item.name==='GCASH'" class="w-full  p-4">
            <form v-show="selectedPayment === 1"  @submit.prevent="submitOrder">
              <div class="w-full">
                <h2 class="text-lg font-bold">09000000000</h2>
                <h2 class="text-lg font-bold">Name</h2>
                <br>
                <div class="mb-4">
                  <label class="block text-sm font-bold mb-2" for="card-number">Reference Number</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="card-number" type="text" v-model="payment.cardNumber">
                </div>
              </div>
            </form>
          </div>
          <div v-if="item.name==='CREDIT/DEBIT CARD'" class="w-full  p-4">
            <form v-show="selectedPayment === 2"  @submit.prevent="submitOrder">
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
        </div>
      </li>
    </ul>
    <div class="flex justify-between mt-4">
      <div class="w-full grid grid-cols-3 gap-4">
        <div></div>
        <div class="col-span-2">
          <button class="w-full bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4" type="submit">PLACE ORDER</button>
        </div>
      </div>
    </div>
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
        address: '',
        city: '',
        state: '',
        zip: ''
      },
      payment: {
        cardNumber: '',
        expiration: '',
        cvv: ''
      }
    }
  },
  methods: {
    submitOrder() {
      // Implement order submission logic here
      console.log("Order submitted!")
    }
  }
}
</script>
