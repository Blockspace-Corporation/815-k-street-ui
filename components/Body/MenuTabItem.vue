<template>
    <button
        class="text-white bg-[#15191F] hover:bg-[#15191f99] p-3"
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