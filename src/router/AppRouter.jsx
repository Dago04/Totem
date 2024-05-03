import { Route, Routes } from 'react-router-dom';
import { TotemRoutes } from '../totem';
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<TotemRoutes />} />
            </Routes >
        </>
    )
}
