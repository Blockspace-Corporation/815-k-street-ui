<template>
    <div>
      <div class="bg-cover bg-no-repeat bg-center" style="background-image: url('/gallery-cover.webp');">
          <div class="py-32 sm:h-screen container mx-auto px-4 flex items-center justify-center text-center text-white">
              <div>
                  <p class="uppercase">About Us</p>
                  <h1 class="mt-2 dm-serif text-[#F0A323] font-bold leading-none text-3xl lg:text-[64px]">
                    A fusion of Korean and Chinese Culinary Deslights at Hwang Geum Seong
                  </h1>
                  <div class="mt-8 sm:mt-2 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
                    <Button class="sm:mt-4 font-bold text-lg px-8 flex gap-2 items-center justify-center max-w-full w-full sm:max-w-[200px]">
                      See Our Menu
                    </Button>
                    <Button class="sm:mt-4 font-bold text-lg px-8 flex gap-2 items-center justify-center max-w-full w-full  sm:max-w-[200px]">
                      Reserve a Table
                    </Button>
                  </div>
              </div>
          </div>
      </div>
      <div class="container mx-auto px-4 text-white py-20 md:py-32">
        <div class="flex flex-col md:flex-row gap-8 md:gap-0">
          <img src="~/static/about/about-thumb-1.webp" class="md:w-1/2 flex-1 md:mr-16" alt="">
          <div class="md:w-1/2 flex-1">
            <h3 class="dm-serif text-2xl">Our Story Begins</h3>
            <p class="mt-4">
              Welcome to Hwang Geum Seong, where Korean and Chinese culinary traditions blend to create an exceptional dining experience. Our expert chefs fuse the robust flavors of Korean cuisine with the delicate intricacies of Chinese cooking, offering innovative dishes like Jajangmyeon, Tangsuyuk, and Sichuan-style Tteokbokki. With a warm, inviting ambiance and a commitment to exceptional service, Hwang Geum Seong is the perfect setting for family gatherings, intimate dinners, and celebrations. Join us to explore and savor the harmonious fusion of Korean and Chinese flavors.
              <br />
              <br />
              Nestled in the heart of Cebu City, we pride ourselves on offering authentic flavors that tantalize your taste buds and transport you to the bustling streets of Seoul and the vibrant markets of Beijing.
            </p>
          </div>
        </div>
        <div class="flex flex-col-reverse md:flex-row gap-8 mt-20">
          <div class="md:w-1/2 flex-1">
            <h3 class="dm-serif text-2xl">Our Cuisine</h3>
            <p class="mt-4">
              At Hwang Geum Seong, we offer a diverse menu that celebrates the culinary diversity of Korea and China. From savory Korean BBQ dishes bursting with smoky flavors to classic Chinese stir-fries that showcase fresh, locally-sourced ingredients, every bite is a celebration of authenticity and innovation.
              <br />
              <br />
              We are committed to providing our guests with an unforgettable dining experience marked by exceptional service, warm hospitality, and a commitment to quality. Whether you're joining us for a quick lunch, a family dinner, or a special celebration, we strive to exceed your expectations and leave you craving more.
            </p>
            <h3 class="dm-serif text-2xl mt-8">Visit Us</h3>
            <p class="mt-4">
              Located conveniently at Cebu IT Park, our restaurant invites you to savor the rich tapestry of Korean-Chinese cuisine in a cozy and inviting atmosphere. Join us and discover why [Restaurant Name] is not just a place to eat, but a destination for food lovers seeking the best of both worlds.
            </p>
          </div>
          <div class="md:w-1/2 flex-1 md:pl-32">
            <img src="~/static/about/about-thumb-2.webp" class="w-full"  alt="">
          </div>
        </div>
      </div>
      <div>
        <img src="~/static/about/about-bg.webp" alt="">
      </div>
    </div>
</template>

<script>
export default {
  auth: false
}
</script>