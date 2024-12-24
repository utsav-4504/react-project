// src/redux/counterSlice.js
const initialState = {
    count: 0,
  };
  
  // Reducer function
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  // Action creators
  export const increment = () => ({ type: "INCREMENT" });
  export const decrement = () => ({ type: "DECREMENT" });
  