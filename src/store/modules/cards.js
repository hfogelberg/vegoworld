const state = {
  cardItem: {
    title: 'Riven morot',
    comment: 'Ta en morot. Skala den och riv den. Man kan äta den till stekt palsternacka eller blanda i en sallad.',
    img: 'carrot.gif',
    typeImg: 'light-bulb.svg',
    user: 'veraveg',
    likes: 79
  },
  cards: [
    {id: 1, title: 'Morot', img: 'carrot.gif', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'vegputte', likes: 5, comments: 3},

      {id: 2, title: 'Äpple', img: 'apple.jpg', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'vegfia', likes: 7, comments: 7},

        {id: 3, title: 'Banan', img: 'banana.jpeg', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'humusharry', likes: 2, comments: 4},

        {id: 4, title: 'Bönor', img: 'beans.jpeg', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'morotsmia', likes: 59, comments: 12},

          {id: 5, title: 'Tomat', img: 'tomato.jpg', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'yogijanne', likes: 761, comments: 2},

          {id: 6, title: 'Gröt', img: 'porridge.jpeg', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', typeImg: 'light-bulb.svg', user:'humusharry', likes: 4, comments: 3}
      ]
}

const getters = {
  cards: state => {
    return state.cards
  },

  cardItem: state => {
    return state.cardItem
  }
}

const actions = {

}

export default {
  state,
  getters,
  actions
}
