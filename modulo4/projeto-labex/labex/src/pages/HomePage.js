import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator';

function HomePage() {
    const navigate = useNavigate()
    return (
        <div>
            <p>HomePage</p>
            <button onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</button>
            <button onClick={() => goToLoginPage(navigate)}>Login</button>
        </div>
    )
}

export default HomePage;
