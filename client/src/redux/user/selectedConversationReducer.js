const initialState = {
  selectedConversation: {
    _id: "",
    userId: "",
    username: "",
    userProfilePic: "",
  },
};

const selectedConversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CONVERSATION':
      return { ...state, selectedConversation: action.selectedConversation };
    default:
      return state;
  }
};

export default selectedConversationReducer;
// const handleSetSelectedConversation = (newSelectedConversation) => {
//     dispatch({ type: 'SET_SELECTED_CONVERSATION', selectedConversation: newSelectedConversation });
//   };


// const handleSetConversations = (newConversations) => {
//     dispatch({ type: 'SET_CONVERSATIONS', conversations: newConversations });
//   };