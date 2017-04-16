const state = {
  comments: [
    {text: 'Vilket bra tips! Det hade jag aldrig tänkt på', user: 'Trögtina'},
    {text: 'Morötter är gott', user: 'gramse'},
    {text: 'Jag gillar inte morötter. Jag tycker om korv', user: 'Zepp'},
    {text: 'Korv är inte en grönsak!', user: 'bossebesserwisser'}
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
