// Importa las bibliotecas necesarias de React
import React, { useState } from 'react';

// Componente funcional que representa la barra de búsqueda
function SearchBar({ onSearch }) {
  // Estado para almacenar el valor de la búsqueda
  const [query, setQuery] = useState('');

  // Manejador de cambios en la entrada de texto
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función de búsqueda pasando el valor actual de la consulta
    onSearch(query);
  };

  // Renderiza la barra de búsqueda
  return (
    <form onSubmit={handleSubmit}>
      {/* Entrada de texto controlada por el estado */}
      <input type="text" value={query} onChange={handleChange} placeholder="Buscar país..." />
      {/* Botón para enviar el formulario */}
      <button type="submit">Buscar</button>
    </form>
  );
}

// Exporta el componente de la barra de búsqueda
export default SearchBar;
