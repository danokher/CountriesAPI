// Importa las bibliotecas necesarias de React
import React, { useState } from 'react';
// Importa Axios para hacer solicitudes HTTP
import axios from 'axios';
// Importa los componentes personalizados
import SearchBar from './SearchBar';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

// Función principal del componente App
function App() {
  // Estado para almacenar los países y el país seleccionado
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Función para manejar la búsqueda de países
  const handleSearch = async (query) => {
    try {
      // Hace la solicitud a la API usando Axios
      const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
      const data = response.data;

      // Actualiza el estado con los resultados de la búsqueda
      setCountries(data);

      // Muestra los detalles si solo hay un país, de lo contrario, establece el país seleccionado como nulo
      if (data.length === 1) {
        setSelectedCountry(data[0]);
      } else {
        setSelectedCountry(null);
      }
    } catch (error) {
      // Maneja errores en caso de que la solicitud falle
      console.error('Error fetching data:', error);
    }
  };

  // Renderiza el componente principal
  return (
    <div>
      {/* Barra de búsqueda con la función de búsqueda como manejador del evento */}
      <SearchBar onSearch={handleSearch} />
      {/* Muestra un mensaje si hay demasiados resultados */}
      {countries.length > 10 && <p>Demasiados resultados. Por favor, haz tu búsqueda más específica.</p>}
      {/* Muestra la lista de países si hay menos de 10 resultados */}
      {countries.length <= 10 && countries.length > 1 && <CountryList countries={countries} />}
      {/* Muestra los detalles del país si solo hay un resultado */}
      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
}

// Exporta el componente principal
export default App;
