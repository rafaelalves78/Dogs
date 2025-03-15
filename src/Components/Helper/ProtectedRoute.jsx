import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { data, loading } = useContext(UserContext);

  // Se ainda está carregando, exibe uma mensagem ou um loader
  if (loading) {
    return <div>Carregando...</div>; // Você pode adicionar um spinner ou outro componente de loading
  }

  // Se não há dados de usuário (não está autenticado), redireciona para o login
  if (!data) {
    return <Navigate to="/login" />;
  }

  // Se há dados de usuário, exibe o conteúdo protegido
  return children;
};

export default ProtectedRoute;
