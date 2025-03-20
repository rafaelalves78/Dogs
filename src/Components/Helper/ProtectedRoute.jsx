import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const ProtectedRoute = ({ children }) => {
  const { login, loading } = useContext(UserContext);

  if (loading) return <p>Carregando...</p>;
  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
