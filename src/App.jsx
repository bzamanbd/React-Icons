import './App.css'
import { FaUserDoctor } from "react-icons/fa6";

const App = ()=>{ 
  return(
    <>
    <h2>Hello Dhaka <span><FaUserDoctor color='orange' size={50} onClick={()=>window.open('https://www.google.com', '_blank')} target='_blank' cursor={'pointer'}/></span></h2> 
    </>
  );
}

export default App
