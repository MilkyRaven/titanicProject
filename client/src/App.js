import './App.css';
import Intro from './components/Intro';
import AllPassengers from './components/AllPassengers';

//components
import AllChildren from './components/AllChildren';
import ChildrenByClass from './components/ChildrenByClass';
import SurvivalComparison from './components/SurvivalComparison';

function App() {
  return (
    <div className="App">
      <Intro />
      <AllChildren />
      <ChildrenByClass />
      <SurvivalComparison />
      <AllPassengers />
    </div>
  );
}

export default App;
