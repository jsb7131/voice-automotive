import React, { useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const appId = 'cb4fed69-c0d6-45f3-9218-bd2f3e381daf';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Dictaphone = ({ panelTrigger, collapsed }) => {
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
    },
    {
      command: 'open',
      callback: collapsed ? ({ resetTranscript }) => { panelTrigger(false); resetTranscript(); } : ({ resetTranscript }) => resetTranscript(),
      matchInterim: true
    },
    {
      command: 'close',
      callback: !collapsed ? ({ resetTranscript }) => { panelTrigger(true); resetTranscript(); } : ({ resetTranscript }) => resetTranscript(),
      matchInterim: true
    }
  ];
  const { listening } = useSpeechRecognition({ commands });
  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  return (
    <div style={{paddingLeft: "20px"}}>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button className="light-btn" onClick={startListening}>Start</button>
      <button className="light-btn" onClick={SpeechRecognition.stopListening}>Stop</button>
      <p style={{color: "green"}}>{message}</p>
    </div>
  );
};
export default Dictaphone;