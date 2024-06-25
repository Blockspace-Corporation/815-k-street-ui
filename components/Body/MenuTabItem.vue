<template>
    <button
        class="text-white bg-primary hover:bg-secondary p-3 uppercase"
        :class="{
            'bg-secondary-hover': active
        }"
        @click="handleClick"
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
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
}
</script>