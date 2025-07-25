import {Routes, Route, Link} from 'react-router-dom'
import Playground from './pages/Playground'

function Home() {
  return (
    <div>
      <h1>Welcome to your other brain!</h1>
      <Link to="/playground">Playground</Link>
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/playground" element={<Playground/>} />
      </Routes>
    </>
  )
}

export default App
