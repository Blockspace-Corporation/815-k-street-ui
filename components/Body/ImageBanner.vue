<template>
    <div
        class="relative overflow-hidden flex p-4 md:p-32 text-white bg-cover bg-center items-center" 
        :class="{
            'min-h-screen': fullHeight,
            'min-h-almost': !fullHeight,
            'shadowed': shadowed,
            'md:px-4': smallGutter
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
        shadowed: {
            default: false,
            type: Boolean
        },
        smallGutter: {
            default: false,
            type: Boolean
        },
    }
}
</script>

<style scoped>
.shadowed:before {
    content: "";
    width: 0px;
    height: 100%;
    box-shadow: 1px 0px 75vw 75vw #00000054;
    position: absolute;
    left: 0px;
    top: 0px;
}
</style>