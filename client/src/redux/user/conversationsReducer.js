const initialState = {
    conversations: [],
  };
  
  const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CONVERSATIONS':
        return { ...state, conversations: action.conversations };
        case 'UPDATE_CONVERSATION':
          return {
            ...state,
            conversations: state.conversations.map((conversation) => {
              if (conversation._id === action.conversationId) {
                return {
                  ...conversation,
                  lastMessage: action.lastMessage,
                };
              }
              return conversation;
            }),
          };





      default:
        return state;
    }
  };
  
  export default conversationsReducer;



  //prev
  // const initialState = {
  //   conversations: [],
  // };
  
  // const conversationsReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case 'SET_CONVERSATIONS':
  //       return { ...state, conversations: action.conversations };
  //     default:
  //       return state;
  //   }
  // };
  
  // export default conversationsReducer;