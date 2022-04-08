import { createStore } from 'vuex'
import Global from './global'
import Config from './config'

export default createStore({
  modules: {
    Global,
    Config
  }
})
