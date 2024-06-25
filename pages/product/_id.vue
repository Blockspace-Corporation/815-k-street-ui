<template>
    <div>
        <BodyImageBanner bg="/banners/menu-banner.webp">
        </BodyImageBanner>
        <BodyPaperField>
          <div class="flex gap-6">
            <SectionsProductImage class="w-1/2" />
            <SectionsProductInformation class="w-1/2" />
          </div>
          <SectionsProductExtra class="mt-6" />
        </BodyPaperField>
    </div>
</template>

<script>
export default {
  auth: false,
  async fetch() {
    let url = '/products/' + parseInt(this.$route.params.id) || 0

    const response = await this.$axios.get(url)
    
    if (response.status == 200) {
      this.$store.commit('product/setProduct', response.data)
    }
  },
}
</script>