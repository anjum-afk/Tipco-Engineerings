import { BrowserRouter } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <>
      <LoadingScreen />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
