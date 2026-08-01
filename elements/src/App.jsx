import './App.css'
import Checkboxes from './checkbox'
import ControlledComponent from './ControlledComponent'
import ForEachLoop from './ForEachLoop'
import InputFeild from './InputFeild'
import RadioAndDropdown from './RadioAndDropdown'
import Toggle from './Toggle'

function App() {
  return (
    <>
    <h1>Elements</h1>
    <InputFeild />
    <Checkboxes></Checkboxes>
    <ForEachLoop></ForEachLoop>
    <RadioAndDropdown></RadioAndDropdown>
    <ControlledComponent></ControlledComponent>
    <Toggle></Toggle>
    </>
  )
}

export default App
