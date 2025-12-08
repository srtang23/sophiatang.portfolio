import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Spring from './pages/work/Spring'
import Sprout from './pages/work/Sprout'
import TurtlUp from './pages/work/TurtlUp'
import HCDE351 from './pages/work/HCDE351'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/work/spring" element={<Layout><Spring /></Layout>} />
      <Route path="/work/sprout" element={<Layout><Sprout /></Layout>} />
      <Route path="/work/turtlup" element={<Layout><TurtlUp /></Layout>} />
      <Route path="/work/hcde351" element={<Layout><HCDE351 /></Layout>} />
    </Routes>
  )
}

export default App

