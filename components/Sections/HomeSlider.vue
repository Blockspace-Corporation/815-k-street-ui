<template>
    <div class="h-screen w-full bg-cover bg-no-repeat bg-center" style="background-image: url('home-slider-bg.webp');">
        <div class="container mx-auto relative h-full">
            <div class="absolute top-1/2 w-1/4 -translate-y-[50%]">
                <h1 class="text-[#F0A323] text-[64px] dm-serif leading-none">Savory flavors of Korean & Chinese cuisine</h1>
                <p class="text-white my-4">Experience Korean x Chinese Fusion</p>
                <a href="#" class="inline-block py-3 px-6 border border-red-500 font-bold text-white">See Our Menu</a>
            </div>
        </div>
        <no-ssr>
            <!-- <carousel class="home-slider" items="1" :loop="true" :autoplay="true" :autoHeight="true" :nav="false">
                <BodyImageBanner bg="banners/home-banner.webp" fullHeight>
                    <div class="w-full md:w-3/4">
                        <span>Mega Discount on</span>
                        <br />
                        <br />
                        <SectionTitle>Tasty Bites<br />Healthy Foods</SectionTitle>
                        <br />
                        <p class="text-2xl">10 - 50% OFF</p>
                        <br />
                        <Button to="menu">View Menu</Button>
                    </div>
                </BodyImageBanner>
                <BodyImageBanner bg="banners/home-banner.webp" fullHeight>
                    <div class="w-full md:w-3/4">
                        <span>Mega Discount on</span>
                        <br />
                        <br />
                        <SectionTitle>Tasty Bites<br />Healthy Foods</SectionTitle>
                        <br />
                        <p class="text-2xl">10 - 50% OFF</p>
                        <br />
                        <Button to="menu">View Menu</Button>
                    </div>
                </BodyImageBanner>
                <BodyImageBanner bg="banners/home-banner.webp" fullHeight>
                    <div class="w-full md:w-3/4">
                        <span>Mega Discount on</span>
                        <br />
                        <br />
                        <SectionTitle>Tasty Bites<br />Healthy Foods</SectionTitle>
                        <br />
                        <p class="text-2xl">10 - 50% OFF</p>
                        <br />
                        <Button to="menu">View Menu</Button>
                    </div>
                </BodyImageBanner>
            </carousel> -->
        </no-ssr>
    </div>
</template>