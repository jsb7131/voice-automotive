import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const appId = 'cb4fed69-c0d6-45f3-9218-bd2f3e381daf';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

let index = 0;

// type SelectableVehicles = {vehicle: ObjWithID, selected: boolean};
// type SelectFunc = (id: string) => void;
// export const useVoiceVehicles = (vehicles: SelectableVehicles[], selectVehicle: SelectFunc) => {

export const useVoiceVehicles = (vehicles, selectVehicle, removeVehicle, clearVehicles, resetVehicles) => {
    const commands = [
        {
          command: 'select',
          callback: ({ resetTranscript }) => {
            selectVehicle(vehicles.selection[0].element.id);
            index = 0;
            resetTranscript();
          },
          matchInterim: true
        },
        {
          command: 'next',
          callback: ({ resetTranscript }) => {
            selectVehicle(vehicles.selection[index].element.id);
            if (index < vehicles.length - 1) {
              selectVehicle(vehicles.selection[index+1].element.id);
            };
            index++;
            resetTranscript();
          },
          matchInterim: true
        },
        {
          command: 'remove',
          callback: ({ resetTranscript }) => { removeVehicle(vehicles.selection[index].element.id); resetTranscript(); },
          matchInterim: true
        },
        {
          command: 'clear',
          callback: ({ resetTranscript }) => { clearVehicles(); index = 0; resetTranscript(); },
          matchInterim: true
        },
        {
          command: 'reset',
          callback: ({ resetTranscript }) => { resetVehicles(); index = 0; resetTranscript(); },
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