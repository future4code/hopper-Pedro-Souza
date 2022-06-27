import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToApplicationFormPage } from '../routes/coordinator';

function ListTripsPage() {
    const navigate = useNavigate()

  return (
    <div>
        <p>ListTripsPage</p>
        <button onClick={() => goToApplicationFormPage(navigate)}>Formulário de Inscrição</button>
    </div>
  )
}

export default ListTripsPage;
