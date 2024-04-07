import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/sidebar/Sidebar';
import { Appbar } from './components/appbar/Appbar';
import { Body } from './components/body/Body';
import { Graybackground } from './components/Graybackground';


function App() {

  const [click,setClick] = useState(false);

  return (
    <div className='flex relative'>
      <Sidebar click={click} />
      {click && <Graybackground setClick={setClick}/> }
      <div className='flex-1'>
        <Appbar setClick={setClick}/>
        <Body />
      </div>
    </div>
  )
}

export default App
