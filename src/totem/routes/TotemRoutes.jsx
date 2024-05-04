import { Route, Routes, Navigate } from 'react-router-dom'
import { Footer, Navbar } from '../../ui'
import { TotemHomePage, Camisetas } from '../pages'

export const TotemRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='home' element={<TotemHomePage />} />
                <Route path='camisas' element={<Camisetas />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
        </>
    )
}
