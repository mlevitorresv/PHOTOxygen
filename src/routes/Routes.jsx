import { Route, Routes, createBrowserRouter } from "react-router-dom"
import MyPhotos from "../pages/MyPhotos"
import Search from "../pages/Search"

export const Router = createBrowserRouter([
    <Routes>
        <Route path="/search" element={<Search/>} />
        <Route path="/my-photos" element={<MyPhotos />} />
    </Routes>
]);