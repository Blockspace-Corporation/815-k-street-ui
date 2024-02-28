<template>
    <div class="relative my-4 h-px w-full bg-stroke-grey">
        <span class="bullet bg-secondary"></span>
    </div> 
</template>

<style scoped>
.bullet {
    position: absolute;
    height: 10px;
    width: 10px;
    top: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    outline: 3px solid #f9f9f9;
    border-radius: 1px;
}
</style>