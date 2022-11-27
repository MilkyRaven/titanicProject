import './App.css';

//components
import Intro from './components/Intro';
import ChildrenPassengers from './components/ChildrenPassengers';
import ChildrenByClass from './components/ChildrenByClass';
import SurvivalComparison from './components/SurvivalComparison';
import NoFamily from './components/NoFamily';

function App() {
  return (
    <div className="App">
      <Intro />
      <h2>How Many Children were Based on Passenger Class?</h2>
      <ChildrenByClass />
      <h2>Survival Comparison</h2>
      <SurvivalComparison />
      <h2>Children who died on Titanic with no family onboard</h2>
      <NoFamily />
      <ChildrenPassengers />
    </div>
  );
}

export default App;
