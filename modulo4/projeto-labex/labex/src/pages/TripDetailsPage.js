import React from 'react';
import { useParams } from 'react-router-dom';

function TripDetailsPage() {
    const {id} = useParams()
  return <p>TripDetailsPage</p>
}

export default TripDetailsPage;
