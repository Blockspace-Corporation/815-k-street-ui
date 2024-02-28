<template>
    <button
        v-if="!to" :type="submit ? 'submit' : 'button'" 
        @click="handleClick" 
        class="text-white bg-secondary hover:bg-secondary-hover p-3 uppercase">
        <slot></slot>
    </button>
    <router-link v-else :to="to" class="text-white bg-secondary hover:bg-secondary-hover p-3 uppercase">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        to: {
            default:null,
            type: String
        },
        submit: {
            default:false,
            type: Boolean
        },
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
}
</script>