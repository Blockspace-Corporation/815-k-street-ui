<template>
  <div>
    <form @submit.prevent="submitOrder">
      <h5>Continue as Guest | Already a member,<a style="color: red;cursor: pointer;" @click="signIn"> Sign In.</a></h5>
      <br>
      <div class="w-full">
        <div class="w-full">
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="first_name">First Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
              id="first_name" type="text" v-model="billing.first_name" required
              :class="{ 'border border-red-500': !billing.first_name }">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="last_name">Last Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
              id="namlast_namee" type="text" v-model="billing.last_name" required
              :class="{ 'border border-red-500': !billing.last_name }">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" v-model="billing.email" required
              :class="{ 'border border-red-500': !billing.email }">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="phone">Phone</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
              id="phone" type="text" v-model="billing.phone" required
              :class="{ 'border border-red-500': !billing.phone }">
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-4">
        <!-- <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="submit">Continue</button> -->
        <button class="w-full bg-[#F4B618] hover:bg-yellow-500 text-white font-bold py-2 px-4 " @click="createAccount">CREATE ACCOUNT</button>
        <button class="w-full bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 " type="submit">CONTINUE</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
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
    async submitOrder() {
      await this.continue_as_guest();
    },
    createAccount(){
      console.log("Create account clicked!")
      this.create_account = true;
      this.sign_in = false;
      this.guest = false;
      this.$emit('create-account');
    },
    signIn(){
      console.log("signIn clicked!")
      this.sign_in = true;
      this.guest = false;
      this.create_account = false;
      this.$emit('sign-in');
    },
    async continue_as_guest() {
      try {
        let response = await this.$axios.post('/guest', this.billing);
        if (response.status == 201) {
          await this.set(response.data);
          this.$router.push('/verify-email')
        }
        this.$toast.success("Guest Customer created successfully")
      } catch (error) {
        this.$toast.error("Error during adding guest customer:", error)
      }
    },
  }
}
</script>
