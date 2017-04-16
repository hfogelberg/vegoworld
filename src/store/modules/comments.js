const state = {
  comments: [
    {text: 'Vilket bra tips! Det hade jag aldrig tänkt på', author: 'Trögtina'},
    {text: 'Morötter är gott', author: 'gramse'},
    {text: 'Jag gillar inte morötter. Jag tycker om korv', author: 'Zepp'},
    {text: 'Korv är inte en grönsak!', author: 'bossebesserwisser'}
  ]
}

const getters = {
  comments: state => {
    return state.comments
  }
}

const actions = {

}

export default {
  state,
  getters,
  actions
}
