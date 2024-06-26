<template>
    <div class="flex gap-4 items-center justify-end">
        <div
            class="hidden text-white md:flex gap-2 items-center p-2 px-4 rounded-xl ease-in-out duration-300"
            :class="{
                'bg-[#2f2f2f69]': openSearch,
                'bg-transparent': !openSearch,
                'backdrop-blur-lg': openSearch
            }"
        >
            <input 
                type="text" 
                class="bg-transparent outline-none text-xs w-[200px] ease-in-out duration-300" 
                v-show="openSearch" 
                ref="mainSearch"
            />
            <a href="#" @click.prevent="openSearch = !openSearch">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </a>
        </div>
        <Button class="font-bold text-sm px-8">Reservations</Button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openSearch: false
        }
    },
    watch: {
        openSearch(val) {
            if (val) {
                this.$refs.mainSearch.focus()
            }
        }
    }
}
</script>