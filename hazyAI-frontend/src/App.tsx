import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generateText } from './services/openaiService';
import Dropdown from '../src/components/dropdown/index';
import Response from './components/response';


function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerate = async () => {
    try {
      const result = await generateText(prompt);
      setResponse(result);
    } catch (error) {
      console.error('Error generating text:', error);
    }
  };

  return (
    <div>
      <Dropdown functionality={undefined}/>
      <Response response='test'/>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>OpenAI Text Generator</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
      />
      <button onClick={handleGenerate}>Generate Text</button>
      <div>
        <h2>Response</h2>
        <p>{response}</p>
      </div>
    </div>

  )
}

export default App
