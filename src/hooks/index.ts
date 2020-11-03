import { ref, Ref, computed } from 'vue'

const button_text_values = ref({
    1: 'click me',
    2: 'too slow',
    3: 'nice try',
    4: 'you missed',
    5: 'nope',
    6: 'almost',
    7: 'so close',
    8: 'try again',
    9: 'click here',
    10: 'over here',
    11: 'naughty',
})
const clicked: Ref<boolean> = ref(false)
const mouse_over: Ref<boolean> = ref(false)
const button_text: Ref<string> = ref(button_text_values.value[1])
const left: Ref<number> = ref(10)
const top: Ref<number> = ref(10)
const max_height: Ref<number> = ref(0)
const max_width: Ref<number> = ref(0)

export const declareInitialValues = () => {
    max_height.value = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    ) - 100

    max_width.value = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    ) - 100

    return { clicked, button_text }
}

export const computedPosition = computed(() => {
    return {
        left: `${left.value}px`,
        top: `${top.value}px`,
    }
})

export const mouseOver = () => {
    mouse_over.value = true
    top.value = Math.round(Math.random() * max_height.value)
    left.value = Math.round(Math.random() * max_width.value)
    button_text.value = button_text_values.value[Math.floor(1 + Math.random() * (11))]
}

export const mouseLeave = () => {
    mouse_over.value = false
}

export const click = () => {
    if (mouse_over.value) {
        clicked.value = true
    }
}