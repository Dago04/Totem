import { Route, Routes, Navigate } from 'react-router-dom';
import { Footer, Navbar } from '../../ui';
import {
  TotemHomePage,
  CategoriesPage,
  ShirtsPage,
  ContactPage,
  ShirtDetailPage,
} from '../pages';


export const TotemRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='home' element={<TotemHomePage />} />
        <Route path='categories' element={<CategoriesPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='shirts/:category' element={<ShirtsPage />} />
        <Route path='shirts/:category/:id' element={<ShirtDetailPage />} />
        <Route path='/*' element={<Navigate to='/home' />} />

      </Routes>
      <Footer />
    </>
  );
};
