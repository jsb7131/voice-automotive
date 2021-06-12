import React, { useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const appId = 'cb4fed69-c0d6-45f3-9218-bd2f3e381daf';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Dictaphone = () => {
  const [message, setMessage] = useState('');
  const commands = [
    {
      command: '* is my name',
      callback: (name) => setMessage(`Hi ${name}!`),
      matchInterim: true
    },
    {
      command: 'My top sports are * and *',
      callback: (sport1, sport2) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
    },
    {
      command: 'Goodbye',
      callback: () => setMessage('So long!'),
      matchInterim: true
    },
    {
      command: 'Pass the salt (please)',
      callback: () => setMessage('My pleasure')
    }
  ];
  const { transcript, listening, resetTranscript } = useSpeechRecognition({ commands });
  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <p style={{color: "green"}}>{message}</p>
    </div>
  );
};
export default Dictaphone;