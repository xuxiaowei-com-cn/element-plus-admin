import { createStore } from 'vuex'

/**
 * 获取本地储存
 * @param key
 * @returns {string}
 */
function getItem(key) {
    return window.localStorage.getItem(key)
}

/**
 * 设置本地储存与vuex
 * @param state
 * @param key
 * @param value
 */
function setItem(state, key, value) {
    state[key] = value;
    window.localStorage.setItem(key, value)
}

const store = createStore({
  state: {
    isCollapse: getItem('isCollapse')
  },
  mutations: {
    setIsCollapse(state, value) {
        setItem(state, 'isCollapse', value)
    },
  },
  actions: {
  },
  modules: {
  }
})

export default store
