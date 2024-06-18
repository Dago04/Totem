import { Navigate, Route, Routes } from "react-router-dom";
import { TotemRoutes } from "../totem";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks/useCheckAuth";
export const AppRouter = () => {

  const { status } = useCheckAuth();

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
