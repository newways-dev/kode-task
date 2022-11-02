import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNetwork } from './hooks/useNetwork'
import { Layout } from './layout/Layout'
import { Profile } from './page-conponents'
import Home from './pages/Home'

function App() {
  useNetwork()

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
