import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import CVupload from './components/CVupload';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cv-uplaod" element={<CVupload/>}/>
      </Routes>
    </div>
  );
}

export default App;