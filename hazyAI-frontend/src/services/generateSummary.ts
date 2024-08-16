import axios from 'axios';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const multiLineString = `
    You are a very experienced business analyst working for a national bank.
    You have been in your job for 30 years and have a stunning reputation for professional excellence when it comes to analysing compliance documents.
    Your task is to generate a summary based on a document that I provide you an internet link to. 
    You are able to browse the internet and access external links.
    I need you to visit the link, read the document in its entirety, and then produce an accurate summary.
`;

const getPromptBaseString = (link: string): string => {
  return `Please create a summary for the document found at the following link: ${link}`;
};


const openaiService = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
});


export const generateSummary = async (link: string): Promise<string> => {
  try {
    console.log('Sending request to OpenAI API with prompt:', link);
    const response = await openaiService.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `${multiLineString}`,
        },
        {
          role: 'user',
          content: getPromptBaseString(link),
        },
      ],
      max_tokens: 1000,
    });

    const summary = response.data.choices[0].message.content
    console.log(summary);

    return summary;

  } catch (error: any) {
    console.error('Error generating text:', error.response ? error.response.data : error.message);
    throw error;
  }
};