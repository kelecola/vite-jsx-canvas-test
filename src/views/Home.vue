<template lang="pug">
.home 123
  canvas(
    id="myCanvas",
    class="myCanvas"
  )
</template>

<script>
import lightTarvel from './lightTarvel'

export default {
  name: "Home",
  data() {
    return {
      myContext: null,
      intervalId: null,
      intervalIdout: null
    }
  },
  mounted() {
    if (this.intervalIdout) {
      clearInterval(this.intervalIdout)
    }
    this.intervalIdout = setInterval(() => {
      const myContext = document.getElementById('myCanvas').getContext('2d');
      this.myContext = myContext
      var c = new lightTarvel({
        ctx: myContext,
        path: '',
        lineColor: '',
        lineWidth: '',
        lightColor: '',
        lightWidth: '',
        beginX: 0,
        beginY: 0
      })
      c.draw()
      if (this.intervalId) {
        clearInterval(this.intervalId)
      }
      this.intervalId = setInterval(() => {
        c.clear()
        c.move()
      }, 1000 / 60)
    }, 3000)
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
.myCanvas {
  width: 100%;
  height: 100%;
}
</style>
