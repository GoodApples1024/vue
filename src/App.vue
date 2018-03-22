<template>
  <div id="app">
    <f-header></f-header>
    <home class="main" :tab-list='tabList'>
      <router-view/>
    </home>
    <f-footer></f-footer>
  </div>
</template>

<script>
import FHeader from './components/Header'
import FFooter from './components/Footer'
import HomePage from './components/homepage'
import Home from './components/home'
export default {
  name: 'App',
  data () {
    return {
      tabList: [
        {
          name: '设立',
          path: '/1'
        },
        {
          name: '设立1',
          path: '/2'
        },
        {
          name: '设立2',
          path: '/3'
        },
        {
          name: '设立3',
          path: '/4'
        },
        {
          name: '设立4',
          path: '/5'
        },
        {
          name: '设立5',
          path: '/6'
        },
        {
          name: '设立6',
          path: '/7'
        }
      ]
    }
  },
  components: {
    FHeader,
    FFooter,
    HomePage,
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  .main{
    flex: 1;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
