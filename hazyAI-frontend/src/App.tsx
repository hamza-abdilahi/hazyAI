import { useState } from 'react'
import './App.css'
import { generateSummary } from './services/generateSummary';
import { generateImpactAssessment, ImpactAssessment } from './services/generateImpactAssessment';
import Dropdown from '../src/components/dropdown/index';
import Response from './components/response';
import TextInput from './components/textInput';
import Logo from './components/logo';

export type Action = "summarize" | "impact assessment" | "find" | "question" | "filter" | null

function App() {
  const [action, setAction] = useState<Action | null>(null)
  const [link, setLink] = useState('');
  const [response, setResponse] = useState<ImpactAssessment | string | null>(null);

  const retrieveOpenAiResponse: any = async (action: Action, prompt: string) => {
    let response: ImpactAssessment | string
    if (action === 'impact assessment') {
      response = await generateImpactAssessment(prompt);
    }
    else if (action === 'summarize') {
      const IA = await generateImpactAssessment(prompt);
      response = IA.summary
      console.log("response: ", response);

    } else {
      response = 'Sorry, currently we only support summary and impact assessment functionalities.'
    }
    return response
  }

  const handleGenerate = async () => {
    try {
      const result = await retrieveOpenAiResponse(action, link)
      setResponse(result);
    } catch (error) {
      console.error('Error generating text: ', error);
    }
  };

  return (
    <div className='content'>
      <Logo />
      <h1>HazyAI</h1>
      <Dropdown setAction={setAction} />
      {action &&
        <TextInput
          value={link}
          setPrompt={setLink}
          placeholder="Enter link to document"
          handleGenerate={handleGenerate}
        />
      }
      < Response response={response} />
    </div>

  )
}

export default App
