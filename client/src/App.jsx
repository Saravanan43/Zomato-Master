import HomeHOC from "./HOC/Home.HOC";
import Temp from "./Components/temp";
import Master from "./Components/Master";


function App() {
  return (
    <>
     <HomeHOC exact path="/"  component={Temp}/>
     <HomeHOC exact path="/:type" component={Master}/>
    </>
  );
}

export default App;
