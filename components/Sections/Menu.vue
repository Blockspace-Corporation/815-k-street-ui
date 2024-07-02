<template>
  <div>
    <div class="py-52 sm:min-h-screen container mx-auto px-4 text-center text-white">
      <div class="w-full">
        <p class="uppercase">Menu</p>
        <h1 class="mt-2 dm-serif text-[#F0A323] font-bold leading-none text-3xl lg:text-[64px]">
          Discover the Best of Korean x Chinese Cuisine
        </h1>
        <BodyMenuTabs class="mt-20" />
        <br />
        <BodyMenuList />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    let url = '/products'
    if (this.$route.query.category) {
        url += '?category=' + parseInt(this.$route.query.category) || null
    }

    const response = await this.$axios.get(url)
    
    if (response.status == 200) {
      this.$store.commit('product/setProducts', response.data)
    }

    const response_cat = await this.$axios.get('/categories')
    if (response_cat.status == 200) {
      this.$store.commit('category/setCategories', response_cat.data)
    }
  },
}
</script>