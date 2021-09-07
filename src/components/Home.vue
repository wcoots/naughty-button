<template>
    <span v-if="buttonIsClicked !== true">
        <button
            v-bind:style="buttonStyles"
            @mouseover="mouseOverButton"
            @mouseleave="mouseLeaveButton"
            @click="clickButton">
                {{ buttonText }}
        </button>
    </span>
    <span v-else>
        <p>nicely done</p>
    </span>
</template>

<script lang="ts">
import { useHome } from '../composition/useHome'

export default {
    name: 'Home',
    setup() {
        return useHome()
    },
}
</script>
