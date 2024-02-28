<template>
    <button
        class="text-white bg-primary hover:bg-secondary p-3 uppercase"
        :class="{
            'bg-secondary-hover': active
        }"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        active: {
            default: false,
            type: Boolean
        }
    }
}
</script>