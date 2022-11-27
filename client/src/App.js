import './App.css';

//components
import Intro from './components/Intro';
import ChildrenPassengers from './components/ChildrenPassengers';
import AllChildren from './components/AllChildren';
import ChildrenByClass from './components/ChildrenByClass';
import SurvivalComparison from './components/SurvivalComparison';
import NoFamily from './components/NoFamily';

function App() {
  return (
    <div className="App">
      <Intro />
      <AllChildren />
      <ChildrenByClass />
      <SurvivalComparison />
      <NoFamily />
      <ChildrenPassengers />
    </div>
  );
}

export default App;
