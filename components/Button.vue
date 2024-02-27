<template>
    <button v-if="!to" class="text-white bg-secondary hover:bg-secondary-hover p-3 uppercase">
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
        }
    }
}
</script>