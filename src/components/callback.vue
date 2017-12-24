<template>
  <div class="loading">
    <img src="./../assets/logo.svg">
  </div>
</template>

<script>
  export default {
    name: 'callback',
    props: ['auth'],
    data () {
      this.auth.handleAuthentication()
      return {}
    }
  }
</script>

<style lang="sass">
  .loading
    padding: 24px
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    background-color: #fff
    z-index: 999
    display: flex
    justify-content: center
    align-items: center

    & img
      max-width: 240px
      width: 100%
      animation-name: float
      animation-duration: 1s
      animation-iteration-count: infinite
      animation-timing-function: ease-in-out

      @keyframes float
        0%
          transform: translateY(0px)
        50%
          transform: translateY(-8px)
        100%
          transform: translateY(0px)


</style>
