import { Configuration, OpenAIApi } from 'openai';
// import { process } from '/env';

// Add Environment Variable
import 'dotenv/config';

// const setupTextarea = document.getElementById('setup-textarea')
// const setupInputContainer = document.getElementById('setup-input-container')
// const movieBossText = document.getElementById('movie-boss-text')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)


async function fetchBotReply(outline) {

  try {
    
    const completion  = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Sound enthusiastic in five words or less.'
    });
    const completion_text = completion.data.choices[0].text
    console.log(completion_text);

  } catch (error) {
    if(error.response) {

      console.log(error.response.status);
      console.log (error.response.data);

    }
  }

} 

fetchBotReply();
