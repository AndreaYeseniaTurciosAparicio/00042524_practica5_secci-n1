import CardScientist from 'c:/Users/turci/00042524_practica5_secci-n1/Ejercicio_final/src/components/CardScientist'
import { scientists } from './Data/scientists';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Luchadores Profesionales</h1>
      {scientists.map((scientist, index) => (
        <CardScientist
          key={index}
          name={scientist.name}
          image={scientist.image}
          profession={scientist.profession}
          awards={scientist.awards}
          discoveries={scientist.discoveries}
        />
      ))}
    </div>
  );
}

export default App;