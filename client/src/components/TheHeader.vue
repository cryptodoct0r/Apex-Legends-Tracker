<template>
  <header>
    <img
      :src="image"
      alt="apex log"
    >
  </header>
</template>

<script>
export default {
  name: "Header",
  data () {

    return {
      image: require('@/assets/logo.png')
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 300px;
}

@media (max-width: 700px) {
  img {
    display: block;
    margin: auto;
  }
}
</style>