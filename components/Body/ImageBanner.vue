<template>
    <div
        class="img-banner flex p-32 text-white bg-cover bg-center items-center" 
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

<style scoped>
.img-banner:after {
    content: "";
    width: 100%;
    height: 0px;
    box-shadow: 0px 0px 199px 127px #000000;
    position: absolute;
    left: 0px;
    top: 0px;
}
</style>