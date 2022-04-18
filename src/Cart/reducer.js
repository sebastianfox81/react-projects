const reducer = (state, action) => {

  if (action.type === 'CLEAR_CART') {
    return {...state, cart: []}
  }

  if (action.type === 'REMOVE') {
    return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
  }

  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {...cartItem, amount: cartItem.amount + 1}
      }
      return cartItem
    })
    return {...state, cart: tempCart}
  }

  if (action.type === 'DECREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {...cartItem, amount: cartItem.amount - 1}
      }
      return cartItem
    }).filter((cartItem) => cartItem.amount !== 0);

    return {...state, cart: tempCart}
  }

  if (action.type === 'GET_TOTALS') {
    let { amount, total } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount} = cartItem;
      const itemTotal = price * amount
      cartTotal.amount += amount
      cartTotal.total += itemTotal
      return cartTotal
    }, {
      amount: 0,
      total: 0
    })
    total = parseFloat(total.toFixed(2))
    return {...state, amount, total}
  }

  if (action.type === 'LOADING') {
    return {...state, loading: true}
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return {...state, cart: action.payload, loading: false}
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.type === 'inc') {
          return {...state, amount: item.amount + 1}
        }
        if (action.payload.type === 'dec') {
          return {...state, amount: item.amount - 1}
        }
      }
      return item
    }).filter((item) => item.amount !== 0)

    return {...state, tempCart}
  }

  return state
}

export default reducer;


