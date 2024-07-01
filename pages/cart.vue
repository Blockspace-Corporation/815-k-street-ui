<template>
  <div class="bg-white">
    <BodyImageBanner bg="banners/about-banner.webp">
    </BodyImageBanner>

    <BodyPaperField>
      <div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 style="font-size: x-large; font-weight: bolder;">Placed Order</h1>
        <SectionsCartPlacedOrder />
      </div>
    </BodyPaperField>

  </div>
</template>

<script>
export default {
  auth: false
}
</script>
