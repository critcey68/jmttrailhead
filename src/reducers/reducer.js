const initialState = {
  counter: 0,
  results: [],
  packingList: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
        return {
          ...state,
          counter: state.counter + 1

        }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value
      }
    case 'STORE_RESULT':
      return {
        ...state,
        counter: 0,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      }
    case 'DELETE_RESULT':
      return {
        ...state,
        results: state.results.splice(2),
      }
    case 'BUILD_PACKING_LIST':
      return {
        ...state,
        packingList: state.packingList,
      }
    default: return state;
  }
};

export default reducer;