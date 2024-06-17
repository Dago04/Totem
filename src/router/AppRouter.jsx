import { Route, Routes } from 'react-router-dom';
import { TotemRoutes } from '../totem';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useSelector } from 'react-redux';
import { CheckingAuth } from '../ui';
export const AppRouter = () => {

  const { status } = useSelector((state) => state.auth);

  if (status === 'checking') {
    return (
      <CheckingAuth />
    );
  }
  return (
    <div className='bg-slate-200 h-full'>
      <Routes>
        <Route path='/auth/*' element={<AuthRoutes />} />
        <Route path='/*' element={<TotemRoutes />} />
      </Routes>
    </div>
  );
};
