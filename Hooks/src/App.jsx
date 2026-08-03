import "./App.css";
import UncontrolledComponent from "./UncontrolledComponent";
import UseRef from "./UseRef";
import UseTransition from "./UseTranstion";
import DerivedState from "./DerivedState";
import UpdateObject from "./UpdateObject";
function App() {
  return (
    <>
      <UseRef></UseRef>
      <UncontrolledComponent/>
      <UseTransition></UseTransition>
      <DerivedState></DerivedState>
      <UpdateObject></UpdateObject>
    </>
  );
}

export default App;
