import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {QueryClientProvider} from 'react-query'
import { queryClient } from './services/queryClient'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
)
