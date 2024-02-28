<template>
    <BodyPaperField class="flex gap-6 items-center flex-col-reverse md:flex-row-reverse bg-cover bg-center" :style="'background-image:url(banners/white-bg.webp)'">
        <div class="md:w-1/2">
            <h2 class="text-2xl font-bold">What Makes Our Menus Special ?</h2>
            <br />
            <div class="flex flex-col gap-4">
                <BodyImageListItem icon="icons/ms-pure-ingredients.png" title="Pure Ingredients">
                    Vestibulum morbi blandit cursus risus at ultrices mi. Facilisis<br />
                    gravida neque convallis a.
                </BodyImageListItem>
                <BodyImageListItem icon="icons/ms-sustainability.png" title="Sustainability">
                    Laculis eu non diam phasellus. Dictum non consectetur a erat<br />
                    nam at. Quam adipiscing vitae proin sagittis.
                </BodyImageListItem>
                <BodyImageListItem icon="icons/ms-environmentalist.png" title="Environmentalism">
                    Bibendum est ultricies integer quis auctor elit sed. Accumsan<br />
                    tortor posuere ac ut consequat semper.
                </BodyImageListItem>
                <BodyImageListItem icon="icons/ms-formula-transparency.png" title="Formula Transparency">
                    Facilisi nullam vehicula ipsum a. Ornare massa eget egestas<br />
                    purus viverra accumsan in nisl nisi.
                </BodyImageListItem>
            </div>
        </div>
        <div class="md:w-4/12 flex-1 flex items-center justify-center md:justify-end p-6">
            <img src="images/menu-special.webp" class="w-10/12">
        </div>
    </BodyPaperField>
</template>