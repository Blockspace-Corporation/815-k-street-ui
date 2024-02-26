<template>
    <a :href="url" class="p-2 bg-transparent text-white hover:text-orange-500 uppercase">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: {
        label: null,
        url: null
    }
}
</script>