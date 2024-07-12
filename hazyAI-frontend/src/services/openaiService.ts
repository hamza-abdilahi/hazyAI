import axios from 'axios';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const openaiService = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    },
});

export const generateText = async (prompt: string) => {
    try {
        console.log('Sending request to OpenAI API with prompt:', prompt);
        const response = await openaiService.post('/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            max_tokens: 100,
        });
        console.log('Received response from OpenAI API:', response.data);
        return response.data.choices[0].message.content;
    } catch (error: any) {
        console.error('Error generating text:', error.response ? error.response.data : error.message);
        throw error;
    }
};