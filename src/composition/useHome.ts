import { ref, Ref, computed, ComputedRef } from 'vue'

const buttonTextValues = {
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
}

const buttonDefaultStyles = {
    height: 'auto',
    width: '100px',
    float: 'left',
    display: 'block',
    position: 'absolute',
    'font-weight': 'bold',
    color: '#082514',
    'background-color': '#7a9b7c',
    'border-left': 'solid #186438 2px',
    'border-right': 'solid #186438 2px',
    'border-bottom': 'solid #186438 2px',
    'border-radius': '25px',
    'margin-bottom': '50px',
    'padding-top': '10px',
    'padding-bottom': '10px',
}

interface UseHome {
    buttonIsClicked: Ref<boolean>
    buttonText: Ref<string>
    buttonStyles: ComputedRef<{ left: string; top: string; } & typeof buttonDefaultStyles>
    mouseOverButton: () => void
    mouseLeaveButton: () => void
    clickButton: () => void
}

export function useHome(): UseHome {
    const buttonIsClicked = ref(false)
    const mouseIsOver = ref(false)
    const buttonText = ref(buttonTextValues[1])
    const buttonHorizontalOffset = ref(10)
    const buttonVerticalOffset = ref(10)

    const maxHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    ) - 100

    const maxWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    ) - 100

    const buttonStyles = computed(() => {
        return {
            ...buttonDefaultStyles,
            left: `${buttonHorizontalOffset.value}px`,
            top: `${buttonVerticalOffset.value}px`,
        }
    })

    function mouseOverButton() {
        mouseIsOver.value = true
        buttonVerticalOffset.value = Math.round(Math.random() * maxHeight)
        buttonHorizontalOffset.value = Math.round(Math.random() * maxWidth)
        buttonText.value = buttonTextValues[Math.floor(1 + Math.random() * (11))]
    }

    function mouseLeaveButton() {
        mouseIsOver.value = false
    }
    
    function clickButton() {
        if (mouseIsOver.value) {
            buttonIsClicked.value = true
        }
    }

    return {
        buttonIsClicked,
        buttonText,
        buttonStyles,
        mouseOverButton,
        mouseLeaveButton,
        clickButton
    }
}