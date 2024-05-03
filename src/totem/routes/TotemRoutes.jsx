import { Route, Routes, Navigate } from 'react-router-dom'
import { Navbar } from '../../ui'
import { TotemHomePage, Camisetas } from '../pages'

export const TotemRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='home' element={<TotemHomePage />} />
                <Route path='camisas-mago' element={<Camisetas />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}
