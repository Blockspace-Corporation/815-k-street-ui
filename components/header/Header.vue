<template>
    <div
        class="banner z-20 bg-white md:bg-transparent flex items-center gap-2 justify-between px-4 md:px-10 py-4 fixed w-full top-0 left-0 ease-in-out duration-300"
        :class="{
            'md:py-6': !dense,
            'md:py-4': dense
        }"
    >
        <div class="w-[400px] flex items-center gap-4">
            <a href="#" class="block md:hidden">
                <img src="icons/hamburger.webp" />
            </a>
            <HeaderLogo :dense="dense"/>
        </div>
        <HeaderMainMenu/>
        <HeaderRightSection class="w-[400px]" />
    </div>
</template>

<script>
export default {
    props: {
        dense: false
    }
}
</script>

<style scoped>
.banner:after {
    content: "";
    width: 100%;
    height: 0px;
    box-shadow: 0px 0px 122px 83px #000000;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
}

@media(max-width: 767px) {
    .banner:after {
        content: none
    }
}
</style>