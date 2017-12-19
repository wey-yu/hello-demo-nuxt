// store

export const state = () => ({
  animals: [],
  food: [],
  APP_ID: process.env.APP_ID || 'APP_ID',
  INSTANCE_ID: process.env.INSTANCE_ID || 'INSTANCE_ID',
  INSTANCE_TYPE: process.env.INSTANCE_TYPE || 'INSTANCE_TYPE',
  COMMIT_ID: process.env.COMMIT_ID || 'COMMIT_ID',
  INSTANCE_NUMBER: process.env.INSTANCE_NUMBER || 'INSTANCE_NUMBER'
})

export const mutations = {
  setAnimals (state, animals) {
    state.animals = animals
  },
  setFood (state, food) {
    state.food = food
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {
    console.log('=== 👋 Initializing the store ===')

    commit('setAnimals', [
      {id: 0, login: 'tigrou', avatar: `🐯`}
    ])

    commit('setFood', [
      {id: 0, label: '🍎'}
    ])
  }, // end of nuxtServerInit

  async LOAD_ITEMS ({commit}, what) {
    switch (what) {
      case 'food':
        commit('setFood', [
          {id: 0, label: '🍎'},
          {id: 1, label: '🍋'},
          {id: 2, label: '🥑'},
          {id: 3, label: '🍔'}
        ])
        break
      case 'animals':
        commit('setAnimals', [
          {id: 0, login: 'tigrou', avatar: `🐯`},
          {id: 1, login: 'pandy', avatar: `🐼`},
          {id: 2, login: 'winnie', avatar: `🐻`},
          {id: 3, login: 'koala', avatar: `🐨`}
        ])
        break
      default:
        break
    }
  }
}
