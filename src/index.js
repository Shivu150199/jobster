import React from 'react'
import { createRoot } from 'react-dom/client'

import 'normalize.css'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
)
