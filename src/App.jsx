import { useState } from 'react'
import './App.css'
import Search from './pages/Search'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './app/store.js'
import {Router} from './routes/Routes.jsx'


function App() {

  return (
    <>
      {/* <Search /> */}
      <Provider store={store}>
        <Router /> {/* Renderiza el componente Router aquí */}
      </Provider>
    </>
  )
}

export default App
