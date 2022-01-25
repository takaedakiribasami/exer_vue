import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            tasks: [
                {
                    id: 1,
                    name: '牛乳を買う',
                    done: false
                },
                {
                    id: 2,
                    name: 'Vue.jsの本を買う',
                    done: true
                },
            ]
        }
    }
})

export default store
