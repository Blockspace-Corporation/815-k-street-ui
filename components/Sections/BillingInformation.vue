<template>
  <div>
      <h2 class="text-lg font-bold">Billing Information</h2>
      <form v-if="guest" @submit.prevent="submitOrder">
        <h5>Order as Guest | <a style="color: red;cursor: pointer;" @click="signIn">Sign In</a></h5>
        <br>
        <div class="w-full">
          <div class="w-full">
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="first_name">First Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" v-model="billing.first_name">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="last_name">Last Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="namlast_namee" type="text" v-model="billing.last_name">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="email">Email</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="billing.email">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="phone">Phone</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" v-model="billing.phone">
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-4">
          <!-- <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="submit">Continue</button> -->
          <button class="w-full bg-[#F4B618] hover:bg-yellow-500 text-white font-bold py-2 px-4 " @click="createAccount">CREATE ACCOUNT</button>
          <button class="w-full mx-4 bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 " type="submit">CONTINUE</button>
        </div>
      </form>

      <form v-if="create_account" @submit.prevent="register">
        <h5><a style="color: red;cursor: pointer;" @click="orderAsGuest">Order as Guest</a> | Sign In</h5>
        <br>
        <div class="w-full">
          <div class="w-full">
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="first_name">First Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" v-model="registration.first_name">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="last_name">Last Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="namlast_namee" type="text" v-model="registration.last_name">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="email">Email</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="registration.email">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="phone">Phone</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" v-model="registration.phone">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="phone">Password</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" v-model="registration.password">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="phone">Birthday</label>
              <div class="w-full grid grid-cols-3 gap-4">
                <div>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="year" type="text" v-model="registration.password" placeholder="YYYY">
                </div>
                <div>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="month" type="text" v-model="registration.password" placeholder="MM">
                </div>
                <div>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="day" type="text" v-model="registration.password" placeholder="DD">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-4">
          <button class="w-full bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="submit">SUBMIT</button>
          <!-- <button class="w-full bg-[#F4B618] hover:bg-yellow-500 text-white font-bold py-2 px-4 ">CREATE ACCOUNT</button> -->
        </div>
      </form>

      <form v-if="sign_in" @submit.prevent="register">
        <div v-if="user">
          <h5><a style="color: red;cursor: pointer;" @click="orderAsGuest">Order as Guest</a></h5>
          <br>
          <div class="w-full">
            <div class="w-full">
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="email">Name</label>
                <input readonly class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="year" type="text" v-model="name" placeholder="First Name">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="phone">Email</label>
                <input readonly class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" v-model="user.email">
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-4">
            <button class="w-full bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="submit">Continue</button>
          </div>
        </div>
        <div v-else>
          <h5><a style="color: red;cursor: pointer;" @click="orderAsGuest">Order as Guest</a> | Sign In</h5>
          <div class="w-full">
            <div class="w-full">
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="email">Email</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="login.email">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="phone">Password</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" v-model="login.password">
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-4">
            <button class="w-full bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="submit">SUBMIT</button>
            <!-- <button class="w-full bg-[#F4B618] hover:bg-yellow-500 text-white font-bold py-2 px-4 ">CREATE ACCOUNT</button> -->
          </div>
        </div>
      </form>

  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  data() {
    return {
      create_account: false,
      guest:false,
      sign_in:false,
      billing: {
        last_name: '',
        first_name:'',
        email: '',
        phone: '',
      },
      registration: {
        last_name: '',
        first_name:'',
        email: '',
        phone: '',
        password: '',
        birthday: '',
      },
      login:{
        email:'',
        password:''
      }
    }
  },
  computed: {
    ...mapState('auth', {
      user: state => state.user
    }),
    name() {
      let _name='';
      if(this.user){
        _name = this.user.first_name + ' ' + this.user.last_name;
      }else{
        _name = '';
      }
      return _name;
    },
    email_address(){
      return this.user ?  this.user.email : ''
    }
  },
  mounted() {
    console.log(this.user);
    if(this.user){
      this.guest = false;
      this.sign_in = true;
    }else{
      this.guest=true;
      this.sign_in = false;
    }
  },
  methods: {
    ...mapActions({
      set: 'customer/storeCustomerObject',
    }),
    submitOrder() {
      // Implement order submission logic here
      console.log("Order submitted!")
      this.continue_as_guest();
      this.$emit('next-step', 2);
    },
    createAccount(){
      console.log("create account clicked!")
      this.create_account = true;
      this.sign_in = false;
      this.guest = false;
    },
    orderAsGuest(){
      this.guest = true;
      this.create_account = false;
      this.sign_in = false;
    },
    signIn(){
      console.log("signIn clicked!")
      this.sign_in = true;
      this.guest = false;
      this.create_account = false;
    },
    register() {
      // Implement order submission logic here
      console.log("register submitted!")
      this.$emit('next-step', 2);
    },
    async continue_as_guest() {
      // Implement checkout logic here
      // this.billing.first_name = this.first_name;
      // this.billing.last_name = this.first_name;
      // this.billing.email = this.email;
      // this.billing.phone = this.phone;
      // this.billing.total = this.total;
      try {
        console.log(this.billing)
        await this.set(this.billing);
        console.log("Checkout clicked!")
        this.$router.push('/checkout')
      } catch (error) {
        console.error("Error during checkout:", error)
      }
    }
  }
}
</script>
