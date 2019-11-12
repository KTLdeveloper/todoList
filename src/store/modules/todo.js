import SparkMD5 from 'spark-md5'

export const state = {
  todoStorage: []
}

export const mutations = {
  setItem (state, payload) {
    state.todoStorage = payload
  },
  addTodo (state, payload) {
    if (payload.content.length) {
      state.todoStorage.push({
        key: SparkMD5.hash(`${payload.content}${payload.index}`),
        isDone: false,
        text: payload.content
      })
    }
  },
  removeTodo (state, payload) {
    let index = state.todoStorage.findIndex(item => {
      return item.key === payload
    })
    state.todoStorage.splice(index, 1)
  },
  editTodo (state, payload) {
    if (payload.content) {
      let index = state.todoStorage.findIndex(item => {
        return item.key === payload.target
      })
      state.todoStorage[index].text = payload.content
    }
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