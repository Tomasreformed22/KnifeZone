import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import './App.css';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a KnifeZone, el mejor lugar para cuchillos CS 2!" />
    </>
  );
}

export default App;

