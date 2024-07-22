import axios from 'axios';

const apiKey = process.env.API_KEY;
const API_URL = 'https://api.openai.com/v1/completions';  // Ajusta la URL a la correcta

export const getOpenAIResponse = async (prompt: string) => {
  console.log(apiKey, API_URL);
  
  try {
    const response = await axios.post(API_URL, {
      model: 'text-davinci-003',  // Asegúrate de especificar el modelo si es necesario
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    return {
      status: response.status,
      data: response.data.choices[0].text
    };
  } catch (error: any) {

    if (error.response) {
      // La solicitud se hizo y el servidor respondió con un código de estado
      // que está fuera del rango de 2xx
      console.error('Error fetching data from OpenAI 1:', {
        status: error.response.status,
        data: error.response.data
      });
      return {
        status: error.response.status,
        data: error.response.data
      };
    } else if (error.request) {
      // La solicitud se hizo pero no se recibió respuesta
      console.error('Error fetching data from OpenAI 2:', {
        status: 'No response received',
        data: error.request
      });
      return {
        status: 'No response received',
        data: error.request
      };
    } else {
      // Algo pasó al configurar la solicitud
      console.error('Error fetching data from OpenAI 3:', {
        status: 'Error',
        data: error.message
      });
      return {
        status: 'Error',
        data: error.message
      };
    }
  }
};
