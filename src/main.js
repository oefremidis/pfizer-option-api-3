import { createApp } from 'vue'
import './style.css'

import LifeCycleHook from './LifeCycleHook.vue'
import ComputedAndWatched from './ComputedAndWatched.vue'
import Forms from './Forms.vue'
import FetchData from './FetchData.vue'

// createApp(LifeCycleHook).mount('#app')
// createApp(ComputedAndWatched).mount('#app')
createApp(Forms).mount('#app')
// createApp(FetchData).mount('#app')
