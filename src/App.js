import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Profilecard from './Profilecard';

function App() {
  
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Form/>}/>
        <Route path='/profile' element = {<Profilecard/>}/>
      </Routes>
       
        
     
     
    </div>
  );
}

export default App;
