<template>
    <ul v-if="!open_search" class="fixed top-0 left-0 w-full md:w-auto h-screen md:h-auto md:static hidden md:flex flex-col md:flex-row items-center justify-center gap-2 bg-black md:bg-transparent">
        <li v-for="(link, k) in links" :key="`nav-${k}`" class="flex items-center">
            <HeaderMenuLinkItem :url="link.url">{{ link.label }}</HeaderMenuLinkItem>
            <span v-if="k < links.length - 1" class="border border-1 border-[#F0A323] w-1.5 h-1.5 block ml-2 rotate-45"></span>
        </li>
    </ul>
    <div v-else class="w-full flex items-center gap-4 max-w-[700px]">
        <div class="flex gap-2 bg-white items-center py-3 px-6 rounded-3xl w-full">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.25 8.625C16.25 10.4219 15.6641 12.1016 14.6875 13.4297L19.6094 18.3906C20.1172 18.8594 20.1172 19.6797 19.6094 20.1484C19.1406 20.6562 18.3203 20.6562 17.8516 20.1484L12.8906 15.1875C11.5625 16.2031 9.88281 16.75 8.125 16.75C3.63281 16.75 0 13.1172 0 8.625C0 4.17188 3.63281 0.5 8.125 0.5C12.5781 0.5 16.25 4.17188 16.25 8.625ZM8.125 14.25C10.1172 14.25 11.9531 13.1953 12.9688 11.4375C13.9844 9.71875 13.9844 7.57031 12.9688 5.8125C11.9531 4.09375 10.1172 3 8.125 3C6.09375 3 4.25781 4.09375 3.24219 5.8125C2.22656 7.57031 2.22656 9.71875 3.24219 11.4375C4.25781 13.1953 6.09375 14.25 8.125 14.25Z" fill="black"/>
            </svg>
            <input
                type="text" 
                v-model="searchform.search_key" 
                class="outline-none flex-1 text-grey-500 text-sm py-1"
                placeholder="What are you craving?"
            />
            <a href="#" @click.prevent="searchform.search_key = ''">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.7266 2.10156L14.4141 7.41406L14.8828 7.92188C15.7031 8.74219 15.8594 9.95312 15.3125 10.9297L10.3516 19.875C10.1172 20.2656 9.6875 20.5 9.25781 20.5C8.90625 20.5 8.59375 20.3828 8.35938 20.1484L0.351562 12.1406C0.117188 11.9062 0 11.5938 0 11.2422C0 10.8125 0.234375 10.3828 0.625 10.1484L9.57031 5.1875C10.5469 4.64062 11.7578 4.79688 12.5781 5.61719L13.0859 6.08594L18.3984 0.8125C18.75 0.421875 19.3359 0.421875 19.7266 0.8125C20.0781 1.16406 20.0781 1.75 19.7266 2.10156ZM12.6172 11.9062L8.59375 7.88281L2.26562 11.3984L3.51562 12.6484L5.625 11.9844C5.89844 11.8672 6.13281 12.1016 6.05469 12.375L5.35156 14.4844L9.10156 18.2344L12.6172 11.9062Z" fill="black"/>
                </svg>
            </a>
        </div>
        <a href="#" class="flex items-center justify-center rounded-full bg-black w-[45px] h-[45px] p-0 overflow-hidden" @click.prevent="$emit('closeSearch')">
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9766 1.85156L8.28906 6.53906L12.9375 11.1875C13.3281 11.5391 13.3281 12.125 12.9375 12.4766C12.5859 12.8672 12 12.8672 11.6484 12.4766L6.96094 7.82812L2.3125 12.4766C1.96094 12.8672 1.375 12.8672 1.02344 12.4766C0.632812 12.125 0.632812 11.5391 1.02344 11.1484L5.67188 6.5L1.02344 1.85156C0.632812 1.5 0.632812 0.914062 1.02344 0.523438C1.375 0.171875 1.96094 0.171875 2.35156 0.523438L7 5.21094L11.6484 0.5625C12 0.171875 12.5859 0.171875 12.9766 0.5625C13.3281 0.914062 13.3281 1.5 12.9766 1.85156Z" fill="white"/>
            </svg>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        open_search: false
    },
    data() {
        return {
            searchform: {
                search_key: ''
            },
            links: [
                { url: '/', label: 'Home'},
                { url: '/about', label: 'About'},
                { url: '/menu', label: 'Menu'},
                { url: '/contact', label: 'Contact Us'},
            ]
        }
    }
}
</script>