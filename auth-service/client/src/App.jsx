import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import CVupload from './components/CVupload';
import Editprofile from './components/Editprofile';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cv-upload" element={<CVupload/>}/>
        <Route path="/edit-profile" element={<Editprofile/>}/>
        <Route path='/chat-page' element={<ChatPage/>}/>
      </Routes>
    </div>
  );
}
import EditProfile from './components/Editprofile';

export default App;