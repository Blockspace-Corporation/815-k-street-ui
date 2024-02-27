<template>
    <div>
        <h4 class="text-lg font-bold mb-3">{{ title }}</h4>
        <ul class="flex flex-col gap-3 text-sm">
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