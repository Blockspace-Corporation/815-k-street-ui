<template>
  <div>
    <form @submit.prevent="nextTick">
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
        <h5><a style="color: red;cursor: pointer;" @click="orderAsGuest">Continue as Guest</a> | <a style="color: red;cursor: pointer;" @click="createAccount">Create account</a></h5>
        <div class="w-full">
          <br>
          <!-- <FormsLoginForm/> -->
          <form class="flex flex-col gap-4" @submit.prevent="login" style="width: 400px;">
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="phone">Email</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline text-grey" id="email" type="text" v-model="form.email">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="password">Password</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700  leading-tight focus:outline-none focus:shadow-outline text-grey" id="password" type="password" v-model="form.password">
            </div>
            <Button type="submit">Login</Button>
        </form>
        </div>
      </div>
    </form>
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
      form:
      {
        email: '',
        password: '',
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
    createAccount(){
      console.log("Create account clicked!")
      this.create_account = true;
      this.sign_in = false;
      this.guest = false;
      this.$emit('create-account');
    },
    orderAsGuest(){
      console.log("Guest clicked!")
      this.guest = true;
      this.create_account = false;
      this.sign_in = false;
      this.$emit('guest');
    },
    async login() {
      this.loading = true
      try {
          await this.$axios.get(
              '../../sanctum/csrf-cookie'
          )

          await this.$auth.loginWith('local', { data: this.form })
          .then(response  => {
              this.$toast.success('Login success')
          })
          .catch(err => {
              console.log(err.response)
              this.$toast.error('Invalid user ID and password')
          })

      } catch (error) {
          console.log(error)
          if(error == 'Failed to execute') {
          this.$toast.error('Please complete the CAPTCHA challenge.')
          } else {
          this.$toast.error('Unable to login with the provided credentials.')
          }
      } finally {
        this.loading = false
        console.log(this.user.customer.id)
        await this.addToCart(this.user.customer.id)
        this.$router.push('/order-summary')
      }
    },
  }
}
</script>
