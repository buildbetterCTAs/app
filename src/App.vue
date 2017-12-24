<template>
  <div class="app" id="app">
    <!-- NAVIGATION & NOT AUTHENTICATED UI -->
    <section class="hero">
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a href="/" class="nav-item is-brand">
                <img src="./assets/logo.svg" alt="Responsive CTA Builder logo">
              </a>
            </div>
            <div class="nav-right">
              <div class="nav-item" v-if="!authenticated">
                <div class="field is-grouped">
                  <p class="control">
                    <a class="button is-primary" @click="login()">Login</a>
                  </p>
                </div>
              </div>
              <a class="nav-item" @click="logout()" v-if="authenticated">Logout</a>
            </div>
          </div>
        </header>
      </div>
    </section>

    <router-view :auth="auth" :authenticated="authenticated" />

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>Made with <span class="icon is-small is-danger"><i class="fa fa-heart"></i></span> by <a href="https://www.reiner.io">Jeff Reiner</a> and <a href="https://twitter.com/_danieljmurphy">Daniel Murphy</a>.</p>
          <p><small>© 2017 Daniel J. Murphy and Jeff Reiner</small></p>
          <div class="nav-center">
            <a class="nav-item" href="https://twitter.com/buildBetterCTAs" target="_blank">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
            </a>
            <a class="nav-item" href="https://www.facebook.com/BuildBetterCTAs" target="_blank">
              <span class="icon">
                <i class="fa fa-facebook"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import builder from './components/builder'
  import AuthService from './auth/AuthService'

  const auth = new AuthService()
  const { login, logout, authenticated, authNotifier } = auth

  export default {
    name: 'app',
    data: function () {
      authNotifier.on('authChange', authState => {
        this.authenticated = authState.authenticated
      })
      return {
        auth,
        authenticated
      }
    },
    methods: {
      login,
      logout
    },
    components: {
      builder
    }
  }
</script>

<style lang="sass">

// VARS
$picton: #48a7f9
$dodger: #1385e8
$yale: #0e589a
$red: #ff1744

$white: #fff
$black: #000
$grey50: #fafafa
$grey100: #f5f5f5
$grey300: #e0e0e0
$grey400: #bdbdbd
$grey500: #9e9e9e

// BULMA VARS
$primary: $dodger
$danger: $red
$grid: 1136px
$widescreen: $grid
$fullhd: $grid

@import "~bulma"

@import "~buefy/src/scss/buefy"

//*****************
// Main App Styles
//*****************

.app
  display: flex
  min-height: 100vh
  flex-direction: column

.app-content
  flex: 1

.footer
  background-color: $white

</style>
