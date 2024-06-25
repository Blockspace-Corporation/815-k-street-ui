<template>
    <BodyPaperField>
        <div class="flex flex-col gap-2 items-center justify-center text-grey">
            <h1 class="text-2xl font-bold">Menu</h1>
            <p class="text-center">
                For takeout orders please call the restaurant directly at +63 989 4332 546<br />
                Delivery available through Grab and Food Panda
            </p>
        </div>
        <br />
        <br />
        <BodyMenuTabs />
        <br />
        <BodyMenuList />
    </BodyPaperField>
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