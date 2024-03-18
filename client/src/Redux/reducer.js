// reducers/chatReducer.js
const initialState = {
  id: "",
  messages: [],
  user: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ID":
      return {
        ...state,
        id: action.payload,
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
