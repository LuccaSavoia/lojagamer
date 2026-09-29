import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Jogos from "./pages/Jogos"
import Login from "./pages/Login"
import Contato from "./pages/Contato"
import Error from "./pages/Error"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414] p-1">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <footer />
      </div>
    </Router>
  )
}

export default App

