import AnimalCard from "./components/animalCard/AnimalCard";
import animals from './data/data';

function App() {

  return (
    <div className="wrapper">
      {animals.map((animal)=> {
        return(
          <AnimalCard 
             key = {animal.name}
             name = {animal.name}
             scientificName = {animal.scientificName}
             size = {animal.size}
             diet = {animal.diet}
          />
        )
      })}
      
    </div>
  );
}

export default App;
