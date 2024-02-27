<template>
    <div>
        <div class="flex flex-col gap-2 items-center justify-center text-grey">
            <h1 class="text-2xl font-bold">Korean + Chinese Cuisines</h1>
            <p>Incredibly Authentic Tasty Dish</p>
        </div>
        <br />
        <div class="flex gap-6 items-between">
            <div class="flex flex-col gap-4 w-4/12">
                <BodyImageListItem icon="icons/c-korean.png" title="Korean Cuisines" reversed>
                    Korean cuisine, renowned for vibrant flavors and communal dining, weaves a rich tapestry of cultural history through iconic dishes like kimchi, barbecue, and soul-warming stews.
                </BodyImageListItem>
                <BodyImageListItem icon="icons/c-american.png" title="American Cuisines" reversed>
                    American cuisine, a dynamic blend of regional influences, showcases innovation and adaptability with classics like burgers, hot dogs, and barbecue alongside diverse regional specialties, reflecting a rich culinary tapestry.
                </BodyImageListItem>
                <BodyImageListItem icon="icons/c-asian.png" title="Asian Cuisines" reversed>
                    Asian cuisine, diverse and rich, spans a spectrum of flavors from Chinese dim sum to Japanese sushi, Thai curries, and vibrant Indian street food, reflecting the continent's cultural diversity.
                </BodyImageListItem>
            </div>
            <div class="w-3/12 flex-1 flex items-center justify-center p-6">
                <img src="images/middle-img.webp" class="h-auto">
            </div>
            <div class="flex flex-col gap-4 w-4/12">
                <BodyImageListItem icon="icons/c-chinese.png" title="Chinese Cuisines">
                    Facilisis mauris sit amet massa vitae tortor condimentum. Sit amet nisl purus in mollis nunc sed id eu mi bibendum.
                </BodyImageListItem>
                <BodyImageListItem icon="icons/c-oceanic.png" title="Oceanic Cuisines">
                    Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Montes nascetur ridiculus mus mauris egestas integer.
                </BodyImageListItem>
                <BodyImageListItem icon="icons/c-indian.png" title="Indian Cuisines">
                    Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nec feugiat in fermentum posuere urna nec consequat semper.
                </BodyImageListItem>
            </div>
        </div>
    </div>
</template>