<template>
    <div>
        <h4 class="text-lg text-center md:text-left font-bold mb-3">{{ title }}</h4>
        <ul class="flex flex-col items-center md:items-start gap-3 md:text-sm">
            <li v-for="(link, k) in links" :key="`${title}-${k}`">
                <router-link to="link.url">{{ link.label }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            default: '',
            type: String
        },
        links: {
            default: [],
            type: Array
        }
    }
}
</script>