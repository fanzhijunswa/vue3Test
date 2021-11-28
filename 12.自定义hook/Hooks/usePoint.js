import { reactive, onMounted, onBeforeUnmount } from 'vue'

export default () => {
    const point = reactive({
        x: 0,
        y: 0
    })
    const savePoint = e => {
        Object.assign(point,{x:e.x,y:e.y})
    }
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })
    return point
}