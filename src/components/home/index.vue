<template>
  <div class="nav-box">
    <div class="nav-wrapper swiper-container">
      <div class="nav swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in tabList" :key="index" :class="nowPath === item.path ? 'active' : ''">
          <router-link model="out-in" :to="item.path">{{item.name}}</router-link>
        </div>
      </div>
    </div>
    <transition :name="slideDirection">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../static/swiper-4.1.6.min.css'
export default {
  data () {
    return {
      startX: '',
      slideDirection: 'slideforward',
      nowPath: ''
    }
  },
  props: {
    tabList: {
      type: Array,
      required: true
    }
  },
  mounted () {
    var swiper1 = new Swiper('.nav-wrapper', {
      slidesPerView: 4.5,
      paginationClickable: true,
      spaceBetween: 20,
      freeMode: true,
      loop: false,
      onTab: function (swiper) { // 返回最后点击slide的索引
        var n = swiper1.clickedIndex
        alert(n)
      }
    })
    this.nowPath = this.$route.path
    this.initTouchedEvent()
  },
  methods: {
    touchedstartHandler: function (e) {
      this.startX = e.changedTouches[0].pageX
    },
    touchendHandler: function (e) {
      let direction = this.startX - e.changedTouches[0].pageX
      let nowRouteIndex = 0
      this.tabList.forEach((v, index) => {
        if (v.path === this.nowPath) {
          nowRouteIndex = index
        }
      })
      if (direction >= 0 && nowRouteIndex < this.tabList.length - 1) {
        // 设置向前动画
        this.slideDirection = 'slideforward'
        this.$router.push({'path': this.tabList[nowRouteIndex + 1].path})
      }
      if (direction < 0 && nowRouteIndex > 0) {
        // 设置向后动画
        this.slideDirection = 'slideback'
        this.$router.push({'path': this.tabList[nowRouteIndex - 1].path})
      }
    },
    initTouchedEvent: function () {
      this.$el.addEventListener('touchstart', this.touchedstartHandler.bind(this))
      this.$el.addEventListener('touchend', this.touchendHandler.bind(this))
    }
  },
  watch: {
    '$route' (to, from) {
      this.nowPath = to.path
    }
  }
}
</script>

<style lang="scss">
.nav-box{
  .nav-wrapper{
    overflow: hidden;
    .nav{
      width: 100%;
      font-size: 0px;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      a{
        font-size: 16px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        color: #000000;
      }
      .active{
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
