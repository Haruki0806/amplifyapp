// src/components/SpeechInput.js
import React, { useState } from 'react';

const SpeechInput = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'ja-JP';

  recognition.onresult = (event) => {
    let interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        setTranscript((prev) => prev + event.results[i][0].transcript);
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
    console.log('Interim Transcript:', interimTranscript);
  };

  recognition.onend = () => {
    setIsListening(false);
  };

  const handleStartListening = () => {
    setIsListening(true);
    recognition.start();
  };

  const handleStopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <div>
      <h2>文字起こし</h2>
      <button onClick={isListening ? handleStopListening : handleStartListening}>
        {isListening ? '停止' : '開始'}
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechInput;
