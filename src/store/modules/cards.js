const state = {
  cards: [
    {title: 'Morot', img: 'carrot.gif', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'vegputte'},

      {title: 'Äpple', img: 'apple.jpg', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'vegfia'},

        {title: 'Banan', img: 'banana.jpeg', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'humusharry'},

        {title: 'Bönor', img: 'beans.jpeg', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'vegputte'},

          {title: 'Tomat', img: 'tomato.jpg', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'vegfia'},

            {title: 'Gröt', img: 'porridge.jpeg', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'humusharry'}
]
}

const getters = {
  cards: state => {
    return state.cards
  }
}

const actions = {

}

export default {
  state,
  getters,
  actions
}
