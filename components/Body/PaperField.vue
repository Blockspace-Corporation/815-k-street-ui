<template>
    <div
        class="z-10 relative bg-white p-4 md:px-32 md:py-12 text-grey"
        :class="{
            'tear-before': tearBefore,
            'tear-after': tearAfter,
            'md:px-4': smallGutter
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        tearBefore: {
            default: true,
            type: Boolean
        },
        tearAfter: {
            default: true,
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
.tear-before:before {
    content: '';
    width: 100%;
    height: 30px;
    background-color: transparent;
    left: 0px;
    top: -29px;
    position: absolute;
    display: block;
    background-image: url('/tear-start.webp');
    background-position: bottom;
    background-size: contain;
    background-repeat: repeat-x;
}
.tear-after:after {
    content: '';
    width: 100%;
    height: 30px;
    background-color: transparent;
    left: 0px;
    bottom: -29px;
    position: absolute;
    display: block;
    background-image: url('/tear-end.webp');
    background-position: top;
    background-size: contain;
    background-repeat: repeat-x;
}
</style>