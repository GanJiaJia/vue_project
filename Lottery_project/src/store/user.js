import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNOUT = 'USER_SIGNOUT'
export const OF_CARD_NAME = 'OF_CARD_NAME'
export const OF_CARD_NUMMBER = 'OF_CARD_NUMMBER'
export const OF_AVATE = 'OF_AVATE'
export const OF_CASH = 'OF_CASH'
export const TAB_STATUS = 'TAB_STATUS'
export const PAY_LIST = 'PAY_LIST'
export const PAY_LIST_ID = 'PAY_LIST_ID'
export const ORDER_LIST = 'ORDER_LIST'
export const ORDER_POS_KEY = 'ORDER_POS_KEY'
export const DEL_FLAG = 'DEL_FLAG'

export default {
  state: {
    user: JSON.parse(sessionStorage.getItem('user')) || {},
    of_name: sessionStorage.getItem('of_name') || '',
    of_card: sessionStorage.getItem('of_card') || '',
    of_avate: sessionStorage.getItem('of_avate') || '',
    cash: '',
    tab_status: '',
    pay_list_id: [],
    order_list: {},
    order_pos_key: '',
    del_flag: false
  },
  mutations: {
    [USER_SIGNIN](state, user) {
      sessionStorage.setItem('user',JSON.stringify(user))
      Object.assign(state, user)
    },
    [USER_SIGNOUT](state) {
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('of_name')
      sessionStorage.removeItem('of_card')
      sessionStorage.removeItem('of_avate')
      Object.keys(state).forEach(k => Vue.delete(state, k))
      Vue.delete(state,'of_name')
      Vue.delete(state,'of_card')
      Vue.delete(state,'of_avate')
    },
    [OF_CARD_NAME](state,of_name) {
      sessionStorage.setItem('of_name',of_name)
    },
    [OF_CARD_NUMMBER](state,of_card) {
      sessionStorage.setItem('of_card',of_card)
    },
    [OF_AVATE](state,of_avate) {
      sessionStorage.setItem('of_avate',of_avate)
    },
    [OF_CASH](state, cash) {
      state.cash = cash
    },
    [TAB_STATUS](state, tab_status) {
      state.tab_status = tab_status
    },
    [PAY_LIST](state, list) {
      state.pay_list = list
    },
    [PAY_LIST_ID](state, id) {
      state.pay_list_id = id
    },
    [ORDER_LIST](state, obj) {
      state.order_list = obj
    },
    [ORDER_POS_KEY](state, key) {
      state.order_pos_key = key
    },
    [DEL_FLAG](state, bool) {
      state.del_flag = bool
    }

  },
  actions: {
    [USER_SIGNIN]({commit}, user) {
      commit(USER_SIGNIN, user)
    },
    [USER_SIGNOUT]({commit}) {
      commit(USER_SIGNOUT)
    },
    [OF_CARD_NAME]({commit}, of_name) {
      commit(OF_CARD_NAME, of_name)
    },
    [OF_CARD_NUMMBER]({commit}, of_card) {
      commit(OF_CARD_NUMMBER, of_card)
    },
    [OF_AVATE]({commit}, of_avate) {
      commit(OF_AVATE, of_avate)
    },
    [OF_CASH]({commit}, cash) {
      commit(OF_CASH, cash)
    },
    [TAB_STATUS]({commit}, flag) {
      commit(TAB_STATUS, flag)
    },
    [PAY_LIST]({commit}, list) {
      commit(PAY_LIST, list)
    },
    [PAY_LIST_ID]({commit}, id) {
      commit(PAY_LIST_ID, id)
    },
    [ORDER_LIST]({commit}, obj) {
      commit(ORDER_LIST, obj)
    },
    [ORDER_POS_KEY]({commit}, key) {
      commit(ORDER_POS_KEY, key)
    },
    [DEL_FLAG]({commit}, bool) {
      commit(DEL_FLAG, bool)
    }
  }
}
