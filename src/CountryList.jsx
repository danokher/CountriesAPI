// Importa las bibliotecas necesarias de React
import React from 'react';

// Componente funcional que representa la lista de países
function CountryList({ countries }) {
  // Renderiza la lista de países
  return (
    <ul>
      {/* Mapea sobre la lista de países y muestra cada nombre en un elemento de lista */}
      {countries.map((country) => (
        <li key={country.name.common}>{country.name.common}</li>
      ))}
    </ul>
  );
}

// Exporta el componente de la lista de países
export default CountryList;
