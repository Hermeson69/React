import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sober";
import Projeto from "./pages/Projetos";

function AppRountes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/projetos" element={<Projeto />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRountes