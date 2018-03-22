<template>
  <div>
    <h1>{{count}}</h1>
    <div>
      <button @click="add(10)">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import {mapState, mapMutations} from 'vuex'
export default {
  store,
  // 学习状态对象赋值给内部对象，也就是把store.js中的值，赋值给我们模板里data中的值。有三种赋值方式
  // computed: {// 1、通过Computed的计算属性直接赋值
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  computed: mapState({// 2、通过mapstate的对象来赋值
    count: state => state.count// 理解为传入state对象，修改state.count属性
  }),
  // computed: mapState(['count'])// 3、通过mapState的数组来赋值
  // computed: {
  //   count: function () {
  //     return this.$store.state.count
  //   }
  // },
  methods: mapMutations([
    'add', 'reduce'
  ])
}
</script>

<style lang="scss">

</style>
