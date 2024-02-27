
import UpgradeToLatestTaste from '../components/Sections/UpgradeToLatestTaste.vue';
<template>
  <div>
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
    <SectionsKoreanChineseCuisine />
    <SectionsUpgradeToLatestTaste />
    <SectionsWhatMakesOurMenuSpecial />
  </div>
</template>
