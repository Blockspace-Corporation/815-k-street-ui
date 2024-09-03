<template>
  <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
    <div ></div>
    <div v-if="Object.keys(customer).length > 0" class="col-span-3">

      <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border rounded-2xl">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-[#F0A323]">One Time Pin</h2>
          <p>Please enter your one-time-pin (OTP) that we sent to <b>{{ email }}</b></p>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST"  @submit.prevent="verify">

            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900">One-Time Password (OTP)</label>
              <div class="mt-2 flex justify-between text-grey">
                <input ref="field1" inputmode="numeric" pattern="[0-9]" maxlength="1" required="" placeholder="-" v-model="field1"
                  @input="moveToNext($event, 'field2')" @paste="onPaste($event, 'field2')"
                  class="w-1/6 h-12 text-center text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> &nbsp;
                <input ref="field2" inputmode="numeric" pattern="[0-9]" maxlength="1" required="" placeholder="-" v-model="field2"
                  @input="moveToNext($event, 'field3')" @paste="onPaste($event, 'field3')"
                  class="w-1/6 text-center text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> &nbsp;
                <input ref="field3" inputmode="numeric" pattern="[0-9]" maxlength="1" required="" placeholder="-" v-model="field3"
                  @input="moveToNext($event, 'field4')" @paste="onPaste($event, 'field4')"
                  class="w-1/6 text-center text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> &nbsp;
                <input ref="field4" inputmode="numeric" pattern="[0-9]" maxlength="1" required="" placeholder="-" v-model="field4"
                  @input="moveToNext($event, 'field5')" @paste="onPaste($event, 'field5')"
                  class="w-1/6 text-center text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> &nbsp;
                <input ref="field5" inputmode="numeric" pattern="[0-9]" maxlength="1" required="" placeholder="-" v-model="field5"
                  @input="moveToNext($event, 'field6')" @paste="onPaste($event, 'field6')"
                  class="w-1/6 text-center text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> &nbsp;
                <input ref="field6" inputmode="numeric" pattern="[0-9]" maxlength="1" required="" placeholder="-" v-model="field6"
                  class="w-1/6 text-center text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> &nbsp;
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Verify</button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Didn't receive code? <br>
            <a href="#" class="font-semibold leading-6 text-[#F0A323] ">Resend</a>
          </p>

        </div>
      </div>

    </div>
    <div v-else class="col-span-3">
      <InvalidRequest/>
    </div>
    <div ></div>
  </div>
</template>



<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      email:'test@example.com',
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
      field6: '',
      local_customer: null,
    }
  },
  created() {
    if (JSON.stringify(this.customer) === '{}') {
      // this.$router.push('/')
    } else {
      if(this.customer.otp == null){
        this.$router.push('/menu')
      }
      this.email = this.customer.email;
    }
  },
  computed: {
    ...mapState('customer', {
      customer: state => state.single
    })
  },
  methods: {
    ...mapActions({
      set: 'customer/storeCustomerObject',
    }),
    moveToNext(event, nextField) {
      // Move focus to the next input field if the current one is filled
      if (event.target.value.length === event.target.maxLength) {
        this.$refs[nextField].focus();
      }
    },
    onPaste(event, nextField) {
      event.preventDefault();
      let pastedText = event.clipboardData.getData('text');

      for (let i = 0; i < pastedText.length; i++) {
        if (this.hasOwnProperty(`field${i + 1}`)) {
          this[`field${i + 1}`] = pastedText.charAt(i);
        }
      }
      if (this.$refs[nextField]) {
        this.$refs[nextField].focus();
      }
    },
    async verify() {
      this.loading = true
      try {
        this.customer.otp = this.field1 + this.field2 + this.field3 + this.field4 + this.field5 + this.field6;
        console.log( this.customer.otp )
        let response = await this.$axios.post(`/verify-email/${this.customer.id}`, this.customer);
        if (response.status == 201) {
          await this.set(response.data);
          this.$router.push('/order-summary')
        }
        this.$toast.success("OTP submitted successfully")
      } catch (error) {
        this.$toast.error("An error has occured:", error)
      }
    }
  }
}
</script>
