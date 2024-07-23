import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.scss";
import AdminPage from "./pages/AdminPage";
import ClientPage from "./pages/ClientPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ClientPage />} />
                <Route path="/admin/area/service" element={<AdminPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
