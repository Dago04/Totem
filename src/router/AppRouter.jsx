import { Route, Routes } from 'react-router-dom';
import { TotemRoutes } from '../totem';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
export const AppRouter = () => {
  return (
    <div className='bg-slate-200 h-full'>
      <Routes>
        <Route path='/auth/*' element={<AuthRoutes />} />
        <Route path='/*' element={<TotemRoutes />} />
      </Routes>
    </div>
  );
};
