
import './App.css';
import Select from 'react-select'
import { useEffect, useState } from 'react';



function App() {
  
  const [datas, setData] = useState([])
  const[userSelect, setUserSelect] = useState ("")
  const [isSHow, setIsShow] = useState(false)
  
  const getBerry = async() => {
    const berries = await fetch("https://pokeapi.co/api/v2/berry/ ")
    const value = await berries.json()
    let result = value.results.map(data => {
      return {
        label: data.name,
        value: data.name
      }
    })
  
    setData(result.sort((a,b) => a.label.localeCompare(b.label)))
  }

 useEffect(() => {
    getBerry()
 }, [])

 const handleSubmit = () => {
    setIsShow(state => !state)
 }

 const handleChange = (value) => {
    setUserSelect(value)
 }


  return (
    <div className="App">
      <h1>{isSHow ? userSelect : ""}</h1>
      <button onClick={() => handleSubmit()} disabled={!userSelect}> {isSHow ? "Hide Button" : "Show Values"}</button>
      <br/>
      <br/>
      <Select options={datas} onChange={(e) => handleChange(e.value)}></Select>
    </div>
  );
}

export default App;
