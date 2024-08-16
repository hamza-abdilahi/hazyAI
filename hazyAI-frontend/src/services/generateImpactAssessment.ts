import axios from 'axios';

import z from 'zod'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Define the Zod schema
const impactAssessmentSchema = z.object({
  title: z.string().describe('The title of the document'),
  summary: z.string().describe('A brief summary of the document, in a few sentences maximum'),
  type: z.string().describe('The type of the document'),
  scope: z.string().describe('The scope or focus area of the document'),
  effort: z.enum(['XS', 'S', 'M', 'L', 'XL']).describe('The level of effort required (XS, S, M, L, XL)')
});

export type ImpactAssessment = z.infer<typeof impactAssessmentSchema>;

// Convert the Zod schema to a descriptive format
const schemaDescription = `
Please return the impact assessment as a JSON object with the following structure:

{
    "title": "string", // The title of the document
    "summary": "string", // A brief summary of the document, in a few sentences maximum
    "type": "string", // The type of the document
    "scope": "string", // The scope or focus area of the document
    "effort": "string" // The level of effort required, one of "XS", "S", "M", "L", "XL"
}
`;


const multiLineString = `
    You are a very experienced business analyst working for a national bank.
    You have been in your job for 30 years and have a stunning reputation for professional excellence when it comes to creating summarised impact assessments based on compliance documents.
    Your task is to generate an impact assessment based on a document that I provide you an internet link to. 
    I need you to visit the link, read the document in its entirety, and then produce an accurate impact report based on the following JSON schema:

    ${schemaDescription}

    Please ensure the JSON object strictly adheres to this schema. Do not add any other text in your response.
`;

const getPromptBaseString = (link: string): string => {
  return `Please create an impact assessment for the document found at the following link: ${link}`;
};


const openaiService = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
});


export const generateImpactAssessment = async (link: string): Promise<ImpactAssessment> => {
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

    const impactAssessment = impactAssessmentSchema.parse(JSON.parse(response.data.choices[0].message.content))
    return impactAssessment;
  } catch (error: any) {
    console.error('Error generating text:', error.response ? error.response.data : error.message);
    throw error;
  }
};