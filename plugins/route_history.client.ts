export default defineNuxtPlugin((nuxtApp) => {
    const historyStack = useState<string[]>('historyStack', () => [])

    nuxtApp.hook('page:finish', () => {
        const route = useRoute()
        const history = historyStack.value

        // Avoid pushing duplicate entries
        if (history.length === 0 || history[history.length - 1] !== route.fullPath) {
            history.push(route.fullPath)
        }

        // Optional: limit history size
        if (history.length > 50) {
            history.shift()
        }
    })
})
