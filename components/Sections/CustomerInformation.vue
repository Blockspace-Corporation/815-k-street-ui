<template>
  <div>
      <h2 class="text-lg font-bold">Billing Information</h2>
      <FormsGuestForm v-show="guest" @sign-in="signIn" @create-account="createAccount" />
      <FormsRegisterForm v-show="create_account" @sign-in="signIn" @guest="orderAsGuest" />
      <FormsCustomLoginForm v-show="sign_in" @create-account="createAccount" @guest="orderAsGuest" />

      <!-- <div>
        <button class="w-full bg-[#F4B618] hover:bg-yellow-500 text-white font-bold py-2 px-4 " @click="nextTick">Next</button>
      </div> -->

  </div>
</template>

<script>
import { mapState, mapActions,mapGetters } from 'vuex'
export default {
  data() {
    return {
      create_account: false,
      guest:false,
      sign_in:false,
    }
  },
  computed: {
    ...mapState('auth', {
      user: state => state.user
    }),
    ...mapGetters({
        temporary_cart: 'cart/CART',
    }),
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
  }
}
</script>
