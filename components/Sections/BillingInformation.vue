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
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                id="first_name" type="text" v-model="billing.first_name" required
                :class="{ 'border border-red-500': !billing.first_name }">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="last_name">Last Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                id="namlast_namee" type="text" v-model="billing.last_name" required
                :class="{ 'border border-red-500': !billing.last_name }">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="email">Email</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" v-model="billing.email" required
                :class="{ 'border border-red-500': !billing.email }">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="phone">Phone</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="text" v-model="billing.phone" required
                :class="{ 'border border-red-500': !billing.phone }">
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
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                id="first_name" type="text" v-model="registration.first_name" required
                :class="{ 'border border-red-500': !registration.first_name }">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="last_name">Last Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                id="namlast_namee" type="text" v-model="registration.last_name" required
                :class="{ 'border border-red-500': !registration.last_name }">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="email">Email</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" v-model="registration.email" required
                :class="{ 'border border-red-500': !registration.email }">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="phone">Phone</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="text" v-model="registration.phone" required
                :class="{ 'border border-red-500': !registration.phone }">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="phone">Password</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="text" v-model="registration.password" required
                :class="{ 'border border-red-500': !registration.password }">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="phone">Confirm Password</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="text" v-model="registration.confirmPassword" required
                :class="{ 'border border-red-500': !registration.confirmPassword }">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="phone">Birthday</label>
              <div class="w-full grid grid-cols-3 gap-4">
                <div>
                  <select class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="year" v-model="registration.birthdayYear" required
                  :class="{ 'border border-red-500': !registration.birthdayYear }">
                    <option value="" disabled selected>Year</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                  </select>
                </div>
                <div>
                  <select class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                    id="month" v-model="registration.birthdayMonth" required
                    :class="{ 'border border-red-500': !registration.birthdayMonth }">
                    <option value="" disabled selected>Month</option>
                    <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                  </select>
                </div>
                <div>
                  <select class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline"
                    id="day" v-model="registration.birthdayDay" required
                    :class="{ 'border border-red-500': !registration.birthdayDay }">
                    <option value="" disabled selected>Day</option>
                    <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                  </select>
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
            <br>
            <FormsLoginForm class=""/>
          </div>
        </div>
      </form>

      <!-- <div>
        <button class="w-full bg-[#F4B618] hover:bg-yellow-500 text-white font-bold py-2 px-4 " @click="nextTick">Next</button>
      </div> -->

  </div>
</template>

<script>
import { mapState, mapActions,mapGetters } from 'vuex'
export default {
  data() {
    const currentYear = new Date().getFullYear();
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
        confirmPassword:'',
        birthday: '',
        birthdayYear:'',
        birthdayMonth:'',
        birthdayDay:''
      },
      years: Array.from({ length: 100 }, (_, i) => currentYear - i),
      months: Array.from({ length: 12 }, (_, i) => i + 1),
      days: Array.from({ length: 31 }, (_, i) => i + 1),
    }
  },
  computed: {
    ...mapState('auth', {
      user: state => state.user
    }),
    ...mapGetters({
        temporary_cart: 'cart/CART',
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
    async prevTick(){
      this.$emit('next-step', 1);
    },
    async nextTick(){
      this.$emit('next-step', 2);
    },
    async submitOrder() {
      try{
        await this.continue_as_guest();
      }catch{

      }finally{
        this.$emit('next-step', 2);
      }
    },
    createAccount(){
      console.log("Create account clicked!")
      this.create_account = true;
      this.sign_in = false;
      this.guest = false;
    },
    orderAsGuest(){
      console.log("Guest clicked!")
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
    async register() {
      console.log("register submitted!")
      this.registration.birthday = `${this.registration.birthdayYear}-${String(this.registration.birthdayMonth).padStart(2, '0')}-${String(this.registration.birthdayDay).padStart(2, '0')}`;
      try {
          let response = await this.$axios.post('/register', this.registration);
          if (response.status == 201) {
            await this.set(response.data);
          }
          this.$toast.success("Customer registration successfull!")
        // this.$router.push('/checkout')
      } catch (error) {
        this.$toast.error("Error during customer registration:", error)
      }finally{
        this.$emit('next-step', 2);
      }

    },
    async continue_as_guest() {
      try {
          let response = await this.$axios.post('/guest', this.billing);
          if (response.status == 201) {
            await this.set(response.data);
            this.addToCart(response.data.id);
          }
          this.$toast.success("Guest Customer created successfully")
        // this.$router.push('/checkout')
      } catch (error) {
        this.$toast.error("Error during adding guest customer:", error)
      }
    },
    async addToCart(customerId) {
      console.log('Add to cart function');
      try {
        this.temporary_cart.forEach(item => {
          item.customer_id = customerId;
        });
        console.log(this.temporary_cart)
        let response = await this.$axios.post('/cart/bulk', this.temporary_cart);
        if (response.status == 201) {
          this.$toast.success("Items added to cart!");
        } else {
          this.$toast.error("Add to cart failed!");
        }
      } catch (error) {
        this.$toast.error("Add to cart failed! " + error.message);
      }
    },
  }
}
</script>
