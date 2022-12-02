import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const [language, setLanguage] = useState("en-IN");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleLang =(e)=>{
    console.log(e.target.value)
    setLanguage(e.target.value)
  }

  return (
    <div>
      <select name="language" onChange={handleLang} >
        <option value="en-IN">Select Language</option>
        <option value="hi-IN">Hindi</option>
        <option value="kn-IN">Kannada</option>
        
      </select>

      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() => SpeechRecognition.startListening({ language: language, continuous:true })}
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default App;
