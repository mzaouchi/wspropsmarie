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

  var voiture = ["VW", "RENAULT", "BMW", "FORD"]

  var student = "Marie"

  const SayHello=()=> alert("Hello Marie")

  const HelloHello =(name)=> alert(`Hello ${name}`)

  var show = false

  return (
    <div>
      <h1>Workshop React Props</h1>

      <Profil name={name} age={age} pays={pays} bootcamp={bootcamp} voiture={voiture} student={student} SayHello={SayHello} HelloHello={HelloHello} show={show}>
          <div>
            <h2>Test passage contenu html</h2>
            <h3>Groupe mornning</h3>
            <h4>2026</h4>
          </div>
      </Profil>
    
      
    </div>
  );
}

export default App;
