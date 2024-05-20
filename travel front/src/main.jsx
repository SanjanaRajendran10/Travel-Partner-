// import React from 'react'/
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
// import LogApp from './Login/LogApp.jsx'
import NewApp from './New/NewApp.jsx'
// import Slid from './Slider/Slid.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<NewApp/>
</BrowserRouter>,
)
