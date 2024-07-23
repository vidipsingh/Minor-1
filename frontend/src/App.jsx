import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'; 


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
