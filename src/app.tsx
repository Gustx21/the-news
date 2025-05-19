import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.tsx";
import Content from "./pages/content.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Content />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;