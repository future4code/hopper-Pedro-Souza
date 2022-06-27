import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToCreateTripPage, goToTripDetailsPage } from '../routes/coordinator';

function AdminHomePage() {
    const navigate = useNavigate()
  return (
    <div>
        <p>AdminHomePage</p>
        <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
        <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes das viagens</button>
    </div>
  )
}

export default AdminHomePage;
