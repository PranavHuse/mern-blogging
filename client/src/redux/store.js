import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import themeReducer from './theme/themeSlice';
import conversationsReducer from './user/conversationsReducer';
import selectedConversationReducer from './user/selectedConversationReducer';

const rootReducer = combineReducers({
  user: userReducer, 
   theme: themeReducer,
   //new states
   conversations: conversationsReducer,
   selectedConversation: selectedConversationReducer,

});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);