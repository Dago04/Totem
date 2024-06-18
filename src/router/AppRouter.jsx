import { Navigate, Route, Routes } from "react-router-dom";
import { TotemRoutes } from "../totem";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../ui";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/slices/auth";
export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        return dispatch(logout());
      }
      const { uid, email, displayName, photoUrl } = user;
      dispatch(login({ uid, email, displayName, photoUrl }));
    });
  }, []);

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <div className="bg-slate-200 h-full">
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<TotemRoutes />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}

        <Route path='/*' element={<Navigate to='/auth/login' />} />
      </Routes>
    </div>
  );
};
