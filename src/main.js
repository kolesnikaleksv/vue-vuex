import {createApp} from 'vue'
import  App  from './App.vue'
import components from '@/components/UI'
import router from './router'
// import Vintersection from '@/directives/Vintersection'
import directives from '@/directives'
import store from '@/store'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
});

// app.directive('intersection', Vintersection)
directives.forEach(directive => {
  app.directive(directive.name, directive)
})
app.use(router)

app.use(store)

app.mount('#app')