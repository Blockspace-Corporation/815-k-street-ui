<template>
    <div>
        <Header :dense="isDense"></Header>
        <nuxt />
        <Footer></Footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isDense: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // You can adjust the scroll threshold as needed
      this.isDense = window.scrollY > 50;
    },
  },
};
</script>