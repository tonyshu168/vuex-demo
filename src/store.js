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
    },
    incrementBy(state, payload) {
      state.count += payload.amount;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    actionA({ commit }) {
      return Promise((resolve, reject) => {
        setTimeout(() => {
          commit('someMutation');
          resolve();
        }, 1000);
      });
    },
    actionB({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('someOtherMutation');
      });
    },
    async actionC({ commit }) {
      commit('gotData', await getData());
    },
    async actionD({ commit }) {
      awati dispatch('actionC');
      commit('gotOtherData', await getOtherData());
    }
  },
});

export default store;

store.commit('increment');
// store.commit('incrementBy', { amount: 29 });
store.commit({
  type: 'incrementBy',
  amount: 40
})
console.log(store);
console.log(store.state.count);
console.log(store.getters.doneTodos);
console.log(store.getters.doneTodosCount);
console.log(store.getters.getTodoById(1));
