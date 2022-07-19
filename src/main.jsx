import React from 'react'
import ReactDOM from 'react-dom/client'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { FormWithCustomHook } from './02-useEffect/FormwithCustomHook'
//import { HooksApp } from './HooksApp'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MultipleCustomHooks />
  //</React.StrictMode>
)
