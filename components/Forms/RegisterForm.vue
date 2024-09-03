<template>
  <div>
    <form @submit.prevent="register">
      <h5><a style="color: red;cursor: pointer;" @click="orderAsGuest">Continue as Guest</a> | Already a member,<a style="color: red;cursor: pointer;" @click="signIn"> Sign In.</a></h5>
      <br>
      <div class="w-full">
        <div class="w-full">
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="first_name">First Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey  leading-tight focus:outline-none focus:shadow-outline"
              id="first_name" type="text" v-model="registration.first_name" required
              :class="{ 'border border-red-500': !registration.first_name }">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="last_name">Last Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey  leading-tight focus:outline-none focus:shadow-outline"
              id="last_name" type="text" v-model="registration.last_name" required
              :class="{ 'border border-red-500': !registration.last_name }">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey  leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" v-model="registration.email" required
              :class="{ 'border border-red-500': !registration.email }">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="phone">Phone</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey  leading-tight focus:outline-none focus:shadow-outline"
              id="phone" type="text" v-model="registration.phone" required
              :class="{ 'border border-red-500': !registration.phone }">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="password">Password</label>
            <div class="relative">
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey  leading-tight focus:outline-none focus:shadow-outline"
                :type="showPassword ? 'text' : 'password'" v-model="registration.password" required
                :class="{ 'border border-red-500': !registration.password }">
              <button
                class="absolute right-0 top-0 mt-2 mr-2 text-grey hover:text-grey-darker"
                @click.prevent="$nextTick(() => showPassword = !showPassword)"
              >
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
          </div>
          <div class="text-[#F0A323]">
          {{ passwordLength }}<br v-if="passwordLength">
          {{ passwordContainAZ }}<br v-if="passwordContainAZ">
          {{ passwordContain09 }}<br v-if="passwordContain09">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="confirm_password">Confirm Password</label>
            <div class="relative">
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey  leading-tight focus:outline-none focus:shadow-outline"
                :type="showConfirmPassword ? 'text' : 'password'"  v-model="registration.confirm_password" required
                :class="{ 'border border-red-500': !registration.confirm_password }">
              <button
                class="absolute right-0 top-0 mt-2 mr-2 text-grey hover:text-grey-darker"
                @click.prevent="$nextTick(() => showConfirmPassword = !showConfirmPassword)"
              >
                {{ showConfirmPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
          </div>
          <div class="text-[#F0A323]">
            {{ matchPassword }}
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="phone">Birthday</label>
            <div class="w-full grid grid-cols-3 gap-4">
              <div>
                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-grey  leading-tight focus:outline-none focus:shadow-outline"
                id="year" v-model="registration.birthdayYear" required
                :class="{ 'border border-red-500': !registration.birthdayYear }">
                  <option value="" disabled selected>Year</option>
                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
              </div>
              <div>
                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-grey  leading-tight focus:outline-none focus:shadow-outline"
                  id="month" v-model="registration.birthdayMonth" required
                  :class="{ 'border border-red-500': !registration.birthdayMonth }">
                  <option value="" disabled selected>Month</option>
                  <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                </select>
              </div>
              <div>
                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-grey  leading-tight focus:outline-none focus:shadow-outline"
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
  </div>
</template>

<script>
import { mapState, mapActions,mapGetters } from 'vuex'
export default {
  data() {
    const currentYear = new Date().getFullYear();
    return {
      showPassword:false,
      showConfirmPassword:false,
      password_format:'',
      create_account: false,
      guest:false,
      sign_in:false,
      registration: {
        last_name: '',
        first_name:'',
        email: '',
        phone: '',
        password: '',
        confirm_password:'',
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
    },
    passwordLength() {
      if(this.registration.password.length){
        if (this.registration.password.length < 8) {
          this.password_format = 'Password must be at least 8 characters long'
          return 'Password must be at least 8 characters long';
        }
        this.password_format ='';
        return null;
      }
    },
    passwordContainAZ() {
      if(this.registration.password.length){
        if (!this.registration.password.match(/[a-z]/)) {
          this.password_format = 'Password must contain at least one uppercase letter'
          return 'Password must contain at least one uppercase letter';
        }
        if (!this.registration.password.match(/[A-Z]/)) {
          this.password_format = 'Password must contain at least one uppercase letter'
          return 'Password must contain at least one uppercase letter';
        }
        this.password_format ='';
        return null;
      }
    },
    passwordContain09() {
      if(this.registration.password.length){
        if (!this.registration.password.match(/[0-9]/)) {
          this.password_format = 'Password must contain at least one number'
          return 'Password must contain at least one number';
        }
        this.password_format ='';
        return null;
      }
    },
    matchPassword(){
      if(this.registration.password.length && this.registration.confirm_password.length){
          if (this.registration.password !== this.registration.confirm_password) {
          this.password_format = 'Passwords do not match'
          return 'Passwords do not match';
        }
      }
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
    orderAsGuest(){
      console.log("Guest clicked!")
      this.guest = true;
      this.create_account = false;
      this.sign_in = false;
      this.$emit('guest');
    },
    signIn(){
      console.log("signIn clicked!")
      this.sign_in = true;
      this.guest = false;
      this.create_account = false;
      this.$emit('sign-in');
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
        this.$router.push('/verify-email')
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          this.$toast.error(error.response.data.message);
        } else {
          this.$toast.error("Error during customer registration: " + error.message);
        }
      }
    },
  }
}
</script>
