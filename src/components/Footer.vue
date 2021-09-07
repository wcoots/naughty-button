<template>
    <span class="footer">
        <a href="https://github.com/WillCooter/naughty-button">v{{ version }}</a>
    </span>
</template>

<script lang="ts">
import { ref, Ref } from 'vue'
// @ts-expect-error
import pjson from '../../package.json'

export default {
    name: 'Footer',
    setup() {
        const version: Ref<string> = ref(pjson.version)
        return { version }
    }
}
</script>

<style scoped>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 25px;
    background-color: rgb(243, 233, 233);
}
a {
    color: #000000;
    float: right;
    padding-right: 10px;
}
</style>
