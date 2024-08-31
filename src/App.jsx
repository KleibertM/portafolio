import './App.css'
import { LengProvider } from './context/leng'
import Home from './components/home/Home'

function App() {

  return (
    <>
      <LengProvider>
        <Home />
      </LengProvider>
    </>
  )
}

export default App
