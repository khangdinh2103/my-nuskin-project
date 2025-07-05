import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Fixed Header */}
          <div className="fixed top-0 left-0 right-0 z-50">
            <Header />
          </div>
          
          {/* Main content with padding-top to account for fixed header */}
          <main className="flex-grow pt-30">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:slug" element={<Detail />} />
              <Route path="/detail/:slug" element={<Detail />} />
              <Route path="/search/:slug" element={<Detail />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
