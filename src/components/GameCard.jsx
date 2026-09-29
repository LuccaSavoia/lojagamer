import { Router } from "react-router-dom"
import Contato from "../pages/Contato"
import Jogos from "../pages/Jogos"
import Login from "../pages/Login"


const GameCard = () => {
  return (
    <Router>
        <div classname="min-h-screen flex flex-col justify-between bg-[#141414] p-1">
            <Header/>
             <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/contato" element={<Contato />} />
                  <Route path="/jogos" element={<Jogos/>} />
                  <Route path="*" element={<Error/>} />
             </Routes>
            <footer/>
        </div>
    </Router>
  )
}

export default GameCard
