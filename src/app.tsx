import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.tsx";
import Content from "./pages/content.tsx";
import Login from "./pages/login.tsx";
import SignIn from "./pages/signin.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Content />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;