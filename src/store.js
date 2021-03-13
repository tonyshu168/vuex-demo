import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*
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
*/
/* eslint-disable */
const moduleA = {
  namespaced: true,
  state: {
    count: 3
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  actions: {
    incrementIfOdd({ state, commit }) {
      if ( state.count % 2 === 1 ) {
        commit('increment');
      }
    }
  }
};

const moduleB = {
  namespaced: true,
  modules: {
    subModule: {
      namespaced: true,
      state: {},
      mutations: {
        login() {}
      },
      getters: {
        login() {}
      },
      actions: {
        login() {}
      }
    }
  },
  state: {
    count: 8
  },
  mutations: {

  },
  getters: {
    someGetter( state, getters, rootState, rootGetters ) {
      rootState.count;
      state.count;

      getters.someOtherGetter;
      rootGetters.someOtherGetter;
    }
  },
  actions: {
    someAction({ dispatch, commit, getters, rootGetters }) {
      getters.someGetter;
      rootGetters.someGetter;

      dispatch('someOtherAction');
      dispatch('someOtherAction', null, { root: true });

      commit('someMutation');
      commit('someMutation', null, { root: true });
    }
  }
};

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state: {
    count: 2
  },
  mutations: {

  },
  getters: {

  },
  actions: {

  }
})

// console.log(store.state.a.count);
// // console.log(store.state.b.count);
// store.commit('a/increment');
// console.log(store.state.a.count);

store.commit('b/subModule/login');
store.dispatch('b/subModule/login');
store.getters['b/subModule/login'];

export default store;
