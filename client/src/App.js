import './App.css';
import Intro from './components/Intro';
import AllPassengers from './components/AllPassengers';

//components
import TestChart from './components/TestChart';

function App() {
  return (
    <div className="App">
      <Intro />
      <TestChart />
      <AllPassengers />
    </div>
  );
}

export default App;
