// App.jsx
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'; 
import Home from './components/Home Page/Home';
import { useState } from 'react';

function App() {
    const [colorBlindness, setColorBlindness] = useState(null);

    return (
        <div className={`app ${colorBlindness}`}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<SignIn setColorBlindness={setColorBlindness} />} />
                    <Route path="/sign-up" element={<SignUp setColorBlindness={setColorBlindness} />} />
                    <Route path="/" element={<Home setColorBlindness={setColorBlindness} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;