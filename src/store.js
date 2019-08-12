import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: '...', done: 1 },
      {id: 2, text: '...', done: 0 }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: ( state, getters ) => {
      return getters.doneTodos.length;
    },
    getTodoById: ( state ) => ( id ) => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {

  },
});

export default store;

store.commit('increment');
console.log(store);
console.log(store.state.count);
console.log(store.getters.doneTodos);
console.log(store.getters.doneTodosCount);
console.log(store.getters.getTodoById(1));
