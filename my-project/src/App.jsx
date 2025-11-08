import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Maincontent from './components/layout/Maincontent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidebar />

<div>
  <Header />
<main>
  <Maincontent />
</main>

</div>
    </div>

  
  )
}

export default App
