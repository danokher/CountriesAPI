// Importa las bibliotecas necesarias de React
import React from 'react';

// Componente funcional que representa los detalles de un país
function CountryDetails({ country }) {
  // Renderiza los detalles del país
  return (
    <div>
      {/* Muestra el nombre del país */}
      <h2>{country.name.common}</h2>
      {/* Muestra la bandera del país */}
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      {/* Muestra los idiomas del país */}
      <p>Lenguajes: {Object.values(country.languages).join(', ')}</p>
    </div>
  );
}

// Exporta el componente de los detalles del país
export default CountryDetails;
