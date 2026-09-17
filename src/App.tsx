import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import TournamentPath from './pages/TournamentPath/TournamentPath'
import Players from './pages/Players/Players'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournament" element={<TournamentPath />} />
          <Route path="/players" element={<Players />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
