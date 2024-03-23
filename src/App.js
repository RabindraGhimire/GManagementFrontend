import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Userspage from './Pages/Userspage';

function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/Users' element={<Userspage/>}></Route>
    </Routes>
</Router>
  );
}

export default App;
