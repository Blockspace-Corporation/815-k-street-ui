<template>
    <ul class="flex gap-2 items-center">
        <li
            v-for="(link, k) in links"
            :key="`pagination-link-${k}`"
        >
            <a
                class="block min-w-0 py-3 px-5 break-words border-0 shadow-soft-xl bg-clip-border"
                v-if="k == 0"
                href="#" 
                @click.prevent="goTo(link.url)"
                :class="{'bg-secondary': link.active, 'text-white': link.active, 'font-bold': link.active, 'opacity-30': !link.url}"
            >
                <
            </a>
            <a
                class="block min-w-0 py-3 px-5 break-words border-0 shadow-soft-xl bg-clip-border"
                v-else-if="k == links.length - 1"
                href="#" 
                @click.prevent="goTo(link.url)"
                :class="{'bg-secondary': link.active, 'text-white': link.active, 'font-bold': link.active, 'opacity-30': !link.url}"
            >
                >
            </a>
            <a
                class="min-w-0 py-3 px-5 break-words border-0 shadow-soft-xl bg-clip-border"
                v-else
                href="#" 
                @click.prevent="goTo(link.url)"
                :class="{'bg-secondary': link.active, 'text-white': link.active, 'font-bold': link.active}"
            >
                {{ link.label }}
            </a>
        </li>
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