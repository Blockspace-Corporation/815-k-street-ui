<template>
  <div class="flex gap-1 items-center justify-end">
    <a v-if="user" href="#" @click.prevent="$router.push('/cart')">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4375 14.5H15.1953C16.0547 14.5 16.8359 15.0078 17.1875 15.75H33.2422C34.2578 15.75 35 16.7266 34.7266 17.7422L33.125 23.6797C32.8125 24.9297 31.6797 25.75 30.4297 25.75H19.1406L19.375 26.8828C19.4531 27.3125 19.8438 27.625 20.2734 27.625H31.5625C32.0703 27.625 32.5 28.0547 32.5 28.5625C32.5 29.1094 32.0703 29.5 31.5625 29.5H20.2734C18.9453 29.5 17.7734 28.5625 17.5391 27.2344L15.5078 16.6484C15.4688 16.4922 15.3516 16.375 15.1953 16.375H13.4375C12.8906 16.375 12.5 15.9844 12.5 15.4375C12.5 14.9297 12.8906 14.5 13.4375 14.5ZM17.6172 17.625L18.7891 23.875H30.4297C30.8594 23.875 31.2109 23.6016 31.3281 23.2109L32.8125 17.625H17.6172ZM19.375 34.5C18.6719 34.5 18.0859 34.1484 17.7344 33.5625C17.3828 33.0156 17.3828 32.2734 17.7344 31.6875C18.0859 31.1406 18.6719 30.75 19.375 30.75C20.0391 30.75 20.625 31.1406 20.9766 31.6875C21.3281 32.2734 21.3281 33.0156 20.9766 33.5625C20.625 34.1484 20.0391 34.5 19.375 34.5ZM32.5 32.625C32.5 33.3281 32.1094 33.9141 31.5625 34.2656C30.9766 34.6172 30.2344 34.6172 29.6875 34.2656C29.1016 33.9141 28.75 33.3281 28.75 32.625C28.75 31.9609 29.1016 31.375 29.6875 31.0234C30.2344 30.6719 30.9766 30.6719 31.5625 31.0234C32.1094 31.375 32.5 31.9609 32.5 32.625Z" fill="white"/>
      </svg>
    </a>
    <a v-if="!user" href="#" @click.prevent="$router.push('/login')">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.875 19.5C26.875 18.4062 26.25 17.3906 25.3125 16.8047C24.3359 16.2578 23.125 16.2578 22.1875 16.8047C21.2109 17.3906 20.625 18.4062 20.625 19.5C20.625 20.6328 21.2109 21.6484 22.1875 22.2344C23.125 22.7812 24.3359 22.7812 25.3125 22.2344C26.25 21.6484 26.875 20.6328 26.875 19.5ZM18.75 19.5C18.75 17.7422 19.6875 16.1016 21.25 15.2031C22.7734 14.3047 24.6875 14.3047 26.25 15.2031C27.7734 16.1016 28.75 17.7422 28.75 19.5C28.75 21.2969 27.7734 22.9375 26.25 23.8359C24.6875 24.7344 22.7734 24.7344 21.25 23.8359C19.6875 22.9375 18.75 21.2969 18.75 19.5ZM16.9141 32.625H30.5469C30.1953 30.1641 28.0859 28.25 25.5078 28.25H21.9531C19.375 28.25 17.2656 30.1641 16.9141 32.625ZM15 33.3672C15 29.5 18.0859 26.375 21.9531 26.375H25.5078C29.375 26.375 32.5 29.5 32.5 33.3672C32.5 33.9922 31.9531 34.5 31.3281 34.5H16.1328C15.5078 34.5 15 33.9922 15 33.3672Z" fill="white"/>
        </svg>
    </a>
    <a v-else @click="toggleDropdown" @blur="closeDropdown" tabindex="0">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"  width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </span>
        <!-- <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://via.placeholder.com/35" alt="" /> -->
      <ul v-show="isDropdownOpen" class="absolute mt-4 mr-12 shadow-lg rounded-md text-gray-700 w-60 right-1">
        <li>
          <a @click="handleLogout" class="w-full flex inline-flex items-center px-4 py-2 hover:bg-red-600 text-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>&nbsp;
            <label>Sign Out</label>

          </a>
        </li>
      </ul>
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isDropdownOpen: false,
      isSignin:true
    };
  },
  computed: {
    ...mapState('auth', {
      user: state => state.user
    }),
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      setTimeout(() => {
        this.isDropdownOpen = false;
      }, 200);
    },
    async handleLogout() {
        try {
            // await this.$axios.post('/customer/logout');
            await this.$auth.logout();
            this.$toast.success('Logout success');
            this.$router.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    }
  }
};
</script>

<style scoped>
</style>
