<template>
    <div
        class="z-10 relative bg-white px-32 py-12 text-grey"
        :class="{
            'tear-before': tearBefore,
            'tear-after': tearAfter,
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
        }
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
    top: -30px;
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
    bottom: -30px;
    position: absolute;
    display: block;
    background-image: url('/tear-end.webp');
    background-position: top;
    background-size: contain;
    background-repeat: repeat-x;
}
</style>