import './App.css'
import Level2Icon from './assets/level2.svg'

function App() {



  return (
    <>
      <Level2Icon onClick={() => console.log(Level2Icon['id'])} />
    </>
  )
}

export default App
