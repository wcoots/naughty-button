<template>
  <span v-if="clicked === false">
      <button
        class="button"
        v-bind:style="computedPosition"
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
        @click="click">
          {{ button_text }}
      </button>
  </span>
  <span v-else>
    <p>nice</p>
  </span>

</template>

<script lang="ts">
import { declareInitialValues, getPageDimensions, computedPosition, mouseOver, mouseLeave, click } from '../hooks'

export default {
  name: 'Home',
  setup() {
    const { clicked, button_text } = declareInitialValues()
    getPageDimensions()

    return { clicked, button_text, computedPosition, mouseOver, mouseLeave, click }
  },
}
</script>

<style scoped>
.button {
    height: auto;
    width: 100px;
    float: left;
    display: block;
    position: absolute;
    font-weight: bold;
    color: #082514;
    background-color: #7a9b7c;
    border-left: solid #186438 2px;
    border-right: solid #186438 2px;
    border-bottom: solid #186438 2px;
    border-radius: 25px;
    margin-bottom: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
