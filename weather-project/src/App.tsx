// App.tsx
import { getWeather } from './api';
import { useQuery } from '@tanstack/react-query';

function App() {
  const { data } = useQuery({
    queryKey: ['weather', 50, 50], // Beispielkoordinaten
    queryFn: () => getWeather({ lat: 50, lon: 50 }),
  });
  return (
    <div>
      <h1>Weather App</h1>
      <h2>Current Weather:</h2>
      <pre>{JSON.stringify(data, null, 3)}</pre>

    </div >
  )
}

export default App;