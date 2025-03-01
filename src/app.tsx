import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.tsx";
import Content from "./pages/content.tsx";
import Login from "./pages/login.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/login/home" element={<Content />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;