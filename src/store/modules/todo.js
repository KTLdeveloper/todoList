export const state = {
  todoStorage: []
}

export const mutations = {
  setItem (state, payload) {
    state.todoStorage = payload
  },
  addTodo (state, payload) {
    if (payload.length) {
      state.todoStorage.push({
        isDone: false,
        text: payload
      })
    }
  },
  removeTodo (state, payload) {
    state.todoStorage.splice(payload, 1)
  },
  editTodo (state, payload) {
    if (payload.content) state.todoStorage[payload.target].text = payload.content
  },
}

export const getters = {
  undoneTodo: state => {
    return state.todoStorage.filter(item => {
      return !item.isDone
    })
  },
  doneTodo: state => {
    return state.todoStorage.filter(item => {
      return item.isDone
    })
  }
}

export default {
  state,
  mutations,
  getters
}