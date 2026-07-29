import {useState} from 'react'
 function Inputfeild() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <h1>Input Field</h1>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <p> {inputValue}</p>
      <button onClick={() => setInputValue('')}>Clear</button>
    </div>
  )
}
export default Inputfeild