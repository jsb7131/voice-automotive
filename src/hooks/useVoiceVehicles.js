import { useEffect } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const appId = 'cb4fed69-c0d6-45f3-9218-bd2f3e381daf';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

let index = 0;
let initialSelect = false;

export const useVoiceVehicles = (vehicles, selectVehicle, removeVehicle, clearVehicles, resetVehicles) => {

  let vehiclesLength = vehicles.selection.length;

  useEffect(() => {
    index = 0;
    initialSelect = false;
  }, [vehiclesLength]);
  
  const commands = [
    {
      command: 'select',
      callback: ({ resetTranscript }) => {
        if (!initialSelect && vehicles.selection.length > 0) {
          selectVehicle(vehicles.selection[0].element.id);
          index = 0;
          initialSelect = true;
        };
        resetTranscript();
      },
      matchInterim: true
    },
    {
      command: 'next',
      callback: ({ resetTranscript }) => {
        if (initialSelect && index < vehicles.selection.length - 1) {
          selectVehicle(vehicles.selection[index].element.id);
          selectVehicle(vehicles.selection[index+1].element.id);
          index++;
        };
        resetTranscript();
      },
      matchInterim: true
    },
    {
      command: 'remove',
      callback: ({ resetTranscript }) => {
        if (vehicles.selection.length > 0) {
          if (vehicles.selection[index].selected) {
            removeVehicle(vehicles.selection[index].element.id);
            index = 0;
            initialSelect = false;
          };
        };
        resetTranscript();
      },
      matchInterim: true
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => {
        clearVehicles();
        index = 0;
        initialSelect = false;
        resetTranscript();
      },
      matchInterim: true
    },
    {
      command: 'reset',
      callback: ({ resetTranscript }) => {
        if (initialSelect) {
          selectVehicle(vehicles.selection[index].element.id);
        };
        resetVehicles();
        index = 0;
        initialSelect = false;
        resetTranscript();
      },
      matchInterim: true
    }
  ];

  const { listening } = useSpeechRecognition({ commands });
  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  return {
    listening,
    startListening,
    stopListening: SpeechRecognition.stopListening
  };
};