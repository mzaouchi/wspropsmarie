import './App.css';
import Profil from './Components/Profil';

function App() {
  var name = "Youssef"
  var age = 22
  var pays = ["Tunisie", "France", "Cote d'ivoire","Italie","USA"]
  var bootcamp = {
    title : "Software",
    loc : "Lac"
  }
  return (
    <div>
      <h1>Workshop React Props</h1>

      <Profil name={name} age={age} pays={pays} bootcamp={bootcamp}/>
    </div>
  );
}

export default App;
