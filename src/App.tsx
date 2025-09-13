import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { invoke } from '@tauri-apps/api/core';
import NavBar from './components/NavBar';

function Home() {

  function handleClick() {
    invoke('macro_test');
  }

  return (<div>
      <h1 className='font-semibold text-3xl'>Home Page</h1>
      <button onClick={handleClick} className='p-2 border-2 border-black cursor-pointer'>Click me to see magic... heh</button>
    </div>);
}

function About() {
  return <h1 className='font-semibold text-3xl'>About Page</h1>;
}

function Contact() {
  return <h1 className='font-semibold text-3xl'>Contact Page</h1>;
}

function App() {
    return(
        <BrowserRouter>
            <NavBar />

            <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/create-macro" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;