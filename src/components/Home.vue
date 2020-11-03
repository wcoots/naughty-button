<template>
  <span v-if="clicked === false">
      <button
        class="button"
        v-bind:style="computedPosition"
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
        @click="click">
          Click me
      </button>
  </span>
  <span v-else>
    <p>nice</p>
  </span>

</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      clicked: false,
      mouse_over: false,
      left: 100,
      top: 100,
      max_height: 0,
      max_width: 0,
    }
  },
  created() {
    this.max_width = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    ) - 50

    this.max_height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    ) - 50
  },
  computed: {
    computedPosition() {
      return {
        left: this.left,
        top: this.top,
      }
    }
  },
  methods: {
    mouseOver() {
      this.mouse_over = true
      this.left = `${Math.round(Math.random() * this.max_width)}px`
      this.top = `${Math.round(Math.random() * this.max_height)}px`
    },
    click() {
      if (this.mouse_over) {
        this.clicked = true
      }
    },
    mouseLeave() {
      this.mouse_over = false
    },
  }
}
</script>

<style scoped>
.button {
    height: auto;
    width: 100px;
    float: left;
    display: block;
    position: absolute;
    background-color: #4e9251;
    border-left: solid #186438 2px;
    border-right: solid #186438 2px;
    border-bottom: solid #186438 2px;
    margin-bottom: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
