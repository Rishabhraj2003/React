import "./App.css";
import UncontrolledComponent from "./UncontrolledComponent";
import UseRef from "./UseRef";
import UseTransition from "./UseTranstion";
import DerivedState from "./DerivedState";
import UpdateObject from "./UpdateObject";
import UseActionState from "./UseActionState";
import UseID from "./UseID";
function App() {
  return (
    <>
      <UseRef></UseRef>
      <UncontrolledComponent/>
      <UseTransition></UseTransition>
      <DerivedState></DerivedState>
      <UpdateObject></UpdateObject>
      <UseActionState></UseActionState>
      <UseID></UseID>
    </>
  );
}

export default App;
