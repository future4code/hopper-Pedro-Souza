import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToAdminHomePage } from '../routes/coordinator';

function LoginPage() {
    const navigate = useNavigate()

  return (
    <div>
        <p>LoginPage</p>
        <button onClick={() => goToAdminHomePage(navigate)}>Administrador</button>
    </div>
  )
}

export default LoginPage;
