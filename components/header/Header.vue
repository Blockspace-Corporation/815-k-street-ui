<template>
    <div class="banner z-10 bg-transparent flex items-center gap-2 justify-between px-8 py-4 fixed w-full top-0 left-0">
        <div class="w-4/12">
            <HeaderLogo/>
        </div>
        <HeaderMainMenu />
        <HeaderRightSection class="w-4/12" />
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.banner:after {
    content: "";
    width: 100%;
    height: 0px;
    box-shadow: 0px 0px 199px 127px #000000;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
}
</style>