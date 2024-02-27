<template>
    <div
        class="flex p-32 text-white bg-cover bg-center items-center" 
        :class="{
            'h-screen': fullHeight,
            'h-almost': !fullHeight,
        }"
        :style="'background-image:url(' + bg + ')'"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        bg: null,
        fullHeight: {
            default: false,
            type: Boolean
        },
    }
}
</script>