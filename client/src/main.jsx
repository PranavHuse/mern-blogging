//ssimport { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store, persistor} from './redux/store.js';
//import { RecoilRoot } from "recoil";
import React from 'react';
React.strictMode = false;
//import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';
import { SocketContextProvider } from "./context/SocketContext.jsx";
createRoot(document.getElementById('root')).render(
//<React.StrictMode>
//<RecoilRoot>

  <PersistGate persistor={persistor}>
  <Provider store={store}>
  <ThemeProvider>
  <SocketContextProvider>
					<App />
				</SocketContextProvider>
      </ThemeProvider>
    </Provider>
      </PersistGate>

//</RecoilRoot>


//</React.StrictMode>
   
)
