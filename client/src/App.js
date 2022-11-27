import './App.css';
import Intro from './components/Intro';
import AllPassengers from './components/AllPassengers';

//components
import TestChart from './components/TestChart';
import AllChildren from './components/AllChildren';

function App() {
  return (
    <div className="App">
      <Intro />
      <AllChildren />
      <TestChart />
      <AllPassengers />
    </div>
  );
}

export default App;
