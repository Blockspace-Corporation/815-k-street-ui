<template>
    <ul class="fixed top-0 left-0 w-full md:w-auto h-screen md:h-auto md:static hidden md:flex flex-col md:flex-row items-center justify-center gap-2 bg-black md:bg-transparent">
        <li>
            <HeaderMenuLinkItem url="/">Home</HeaderMenuLinkItem>
        </li>
        <li>
            <HeaderMenuLinkItem url="/about">About</HeaderMenuLinkItem>
        </li>
        <li>
            <HeaderMenuLinkItem url="/menu">Menu</HeaderMenuLinkItem>
        </li>
        <li>
            <HeaderMenuLinkItem url="/reviews">Reviews</HeaderMenuLinkItem>
        </li>
        <li>
            <HeaderMenuLinkItem url="/contact">Contact</HeaderMenuLinkItem>
        </li>
    </ul>
</template>