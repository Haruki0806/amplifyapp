// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import SpeechInput from './components/SpeechInput';
import AudioRecorder from './components/AudioRecorder';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/speech-input">文字起こし</Link>
            </li>
            <li>
              <Link to="/audio-recorder">録音</Link>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <Routes>
            <Route path="/speech-input" element={<SpeechInput />} />
            <Route path="/audio-recorder" element={<AudioRecorder />} />
            <Route path="/" element={
              <div>
                <h2>Welcome to the React App</h2>
                <p>Select a feature from the menu.</p>
              </div>
            } />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
