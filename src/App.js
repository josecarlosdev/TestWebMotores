import Header from './components/Header/index'
import Body from './components/Body/index'
import './App.css';
import CarMotors from './components/CarMotors/index'
const App = ()=>{
  return (
    <div className ="app">
      <Header />
      <CarMotors />
      <Body/>
    </div>
  );
}

export default App;
