<template>
    <div class="flex gap-1 items-center justify-end">
        <div
            class="hidden text-white md:flex bg-transparent items-center p-2 px-4 rounded-xl ease-in-out duration-300"
        >
            <a href="#" @click.prevent="$emit('openSearch')">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.375 22.625C28.375 20.3984 27.1641 18.3672 25.25 17.2344C23.2969 16.1016 20.9141 16.1016 19 17.2344C17.0469 18.3672 15.875 20.3984 15.875 22.625C15.875 24.8906 17.0469 26.9219 19 28.0547C20.9141 29.1875 23.2969 29.1875 25.25 28.0547C27.1641 26.9219 28.375 24.8906 28.375 22.625ZM27.1641 29.0312C25.7578 30.125 24 30.75 22.125 30.75C17.6328 30.75 14 27.1172 14 22.625C14 18.1719 17.6328 14.5 22.125 14.5C26.5781 14.5 30.25 18.1719 30.25 22.625C30.25 24.5391 29.5859 26.2969 28.4922 27.7031L33.7266 32.8984C34.0781 33.2891 34.0781 33.875 33.7266 34.2266C33.3359 34.6172 32.75 34.6172 32.3984 34.2266L27.1641 29.0312Z" fill="white"/>
                </svg>
            </a>
            <a>
              <headerAuthorizeSection/>
            </a>
        </div>
        <Button class="font-bold text-sm px-8">Delivery</Button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isDropdownOpen: false,
    }
  },
}
</script>


<style>
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(0); /* remove the -50% translation */
}
</style>
