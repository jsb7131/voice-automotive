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

  // Reset these values when the length of the array changes e.g. adding, removing, clearing, resetting
  useEffect(() => {
    index = 0;
    initialSelect = false;
  }, [vehiclesLength]);
  
  const commands = [
    {
      command: 'select',
      callback: ({ resetTranscript }) => {
        // Select, don't deselect
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
          // Deselect current selected
          selectVehicle(vehicles.selection[index].element.id);
          // Select next
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
          // Check if array is empty to prevent vehicles.selection[index].selected from throwing error
          if (vehicles.selection[index].selected) {
            removeVehicle(vehicles.selection[index].element.id);
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
        resetTranscript();
      },
      matchInterim: true
    },
    {
      command: 'reset',
      callback: ({ resetTranscript }) => {
        if (initialSelect) {
          // resetVehicles() doesn't call setState in VehiclesContext if current vehicles are same as initial vehicles, for optimization
          // In that case there is no re-render, so call selectVehicle to deselect something that may be selected, to emulate full reset
          selectVehicle(vehicles.selection[index].element.id);
          index = 0;
          initialSelect = false;
        };
        resetVehicles();
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