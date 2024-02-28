<template>
    <no-ssr>
        <carousel class="home-slider" items="1" :loop="true" :autoplay="true" :autoHeight="true" :nav="false">
            <BodyImageBanner bg="banners/home-banner.webp" fullHeight>
                <div class="w-3/4">
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
                <div class="w-3/4">
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
                <div class="w-3/4">
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
        </carousel>
    </no-ssr>
</template>