import { Configuration, OpenAIApi } from 'openai';
import { process } from './env.js';



// const apiKey = "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";

// const apiKey = process.env.OPENAI_API_KEY
// const url ="https://api.openai.com/v1/completions";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// const setupTextarea = document.getElementById('setup-textarea') ;
// const setupInputContainer = document.getElementById('setup-input-container');
// const movieBossText = document.getElementById('movie-boss-text');



// document.getElementById("send-btn").addEventListener("click", () => {
//   if (setupTextarea.value) {
//     setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`;
//     movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
//   }

//   fetchBotReply();

// })

// Javascript Code
// function fetchBotReply(){
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/json',
//             'Authorization':`Bearer  ${apiKey}`
//         },
//         body: JSON.stringify({
//             'model' : 'text-davinci-003',
//             'prompt': 'Sound enthusiastic in five words or less.'
    
    
//         })
    
//     }).then(response => response.json()).then(data =>
//         movieBossText.innerText = data.choices[0].text
//          )
    

// }


// NodeJS code 

async function fetchBotReply(){

  const response = await openai.createCompletion({
    'model' : 'text-davinci-003',
    'prompt': 'Sound enthusiastic in five words or less.'
  })

  console.log(response);

}


fetchBotReply();
