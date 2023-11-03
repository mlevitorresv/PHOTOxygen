import { Route, Routes, BrowserRouter } from "react-router-dom"
import MyPhotos from "../pages/MyPhotos"
import Search from "../pages/Search"

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/my-photos" element={<MyPhotos />} />
        </Routes>
    </BrowserRouter>
);