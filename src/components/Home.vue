<template>
    <div v-if="buttonIsClicked !== true">
        <div
            v-bind:style="buttonStyles"
            @mouseover="mouseOverButton"
            @mouseleave="mouseLeaveButton"
            @click="clickButton">
                {{ buttonText }}
        </div>
    </div>
    <div v-else>
        <p>nicely done</p>
    </div>
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
