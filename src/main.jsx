import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ExpFormProvider } from './context/ExpFormContext.jsx'
import { ExpenseObjProvider } from './context/ExpenseObjContext.jsx'
import { ExpArrayProvider } from './context/ExpArrayContext.jsx'
import { GetExpMessageProvider } from './context/GetExpMessage.jsx'
import { UpdateContextProvider } from './context/UpdateContext.jsx'
import { YearProvider } from './context/YearsContext.jsx'
import { SelecterProvider } from './context/SelecterContext.jsx'
import { LoadingcontextProvider } from './context/LoadingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <ExpFormProvider>
  <ExpenseObjProvider>
  <ExpArrayProvider>
  <GetExpMessageProvider>
  <UpdateContextProvider>
  <SelecterProvider>
  <LoadingcontextProvider>
    <App />
  </LoadingcontextProvider>
  </SelecterProvider>
  </UpdateContextProvider>
  </GetExpMessageProvider>
  </ExpArrayProvider>
  </ExpenseObjProvider>
  </ExpFormProvider>
  </BrowserRouter>
  </StrictMode>,
)
