<template>
    <ul class="flex gap-2 items-center">
        <template v-for="(link, k) in links">
            <li
                :key="`pagination-link-${k}`"
                v-if="(k == 0) || (k == links.length - 1)"
            >
                <a
                    class="flex items-center justify-center min-w-0 py-3 px-5 break-words border-0 shadow-soft-xl bg-clip-border"
                    v-if="k == 0"
                    href="#" 
                    @click.prevent="goTo(link.url)"
                    :class="{
                        'bg-[#171818]': true, 
                        'bg-[#F0A323]': false, 
                        'text-[black]': false, 
                    }"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
    
                </a>
                <a
                    class="block min-w-0 py-3 px-5 break-words border-0 shadow-soft-xl bg-clip-border"
                    v-else-if="k == links.length - 1"
                    href="#" 
                    @click.prevent="goTo(link.url)"
                    :class="{
                        'bg-[#171818]': false, 
                        'bg-[#F0A323]': true, 
                        'text-[black]': true, 
                    }"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </a>
                <!-- <a
                    class="min-w-0 py-3 px-5 break-words border-0 shadow-soft-xl bg-clip-border"
                    v-else
                    href="#" 
                    @click.prevent="goTo(link.url)"
                    :class="{'bg-secondary': link.active, 'text-white': link.active, 'font-bold': link.active}"
                >
                    {{ link.label }}
                </a> -->
            </li>
        </template>
    </ul>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            default: null
        },
        store_module: {
            type: String,
            default: null
        }
    },
    methods: {
        async goTo(api_url) {
            if (api_url) {
                const urlObj = new URL(api_url);
                const urlParams = new URLSearchParams(urlObj.search);
                const defaultPage = urlParams.get('page');
                const page = parseInt(defaultPage) || 0
    
                const response = this.$store.dispatch(`${this.store_module}/fetchList`, {
                    page: page
                });
            }
        }
    }
}
</script>