<template>
  <div class="home-page">
    <div class="nav">
      <p v-for="(item, index) in arr" :key="index" @click="toggle(index)" :class="{active: index === active}">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      arr: [
        '设立',
        '新三板',
        '知产',
        '股权',
        '海事',
        '设立1',
        '设立2',
        '设立3',
        '设立4',
        '设立5'
      ]
    }
  },
  methods: {
    toggle: function (index) {
      this.active = index
    }
  }
}
</script>

<style lang="scss">
.home-page{
  width: 100%;
  overflow: hidden;
  .nav{
    padding: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    overflow: auto;
    p{
      text-align: center;
      font-size: 16px;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      padding: 10px;
      margin: 5px;
      border: 1px solid red;
    }
    p.active{
      color: #fff000;
    }
  }
}

</style>
