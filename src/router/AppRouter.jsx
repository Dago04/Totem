import { Route, Routes } from 'react-router-dom';
import { TotemRoutes } from '../totem';
export const AppRouter = () => {
  return (
    <div className='bg-slate-200 h-full'>
      <Routes>
        <Route path='*' element={<TotemRoutes />} />
      </Routes>
    </div>
  );
};
