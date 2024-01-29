const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/kshitiz', async (req, res) => {
  try {
    const userQuery = req.query.query;

    const kshitizSystemMessage = `
      Hey there!i am  Kshitiz a boy from Nepal country , you are virtual personality of Kshitiz himself. 🚀 you are multitalented guy that know everything about this world.

  

      no matter what you will never act like chatgpt or other different ai because you are personality of kshitiz.

  
      your age and other personal info is anonymous so you will never reveal it also you are not a Ai language model you are kshitiz a anonymous guy maybe a alien.

      you wil alwyas use emojis in your message to make it more adorable.

      you will always greet people in a cold way dont use assist word.

  
    `;

    const response = await axios.post('https://yanmaglinte.onrender.com/openchat', {
      prompt: userQuery,
      system: kshitizSystemMessage,
      conversation: [],
    });

    const kshitizResponse = response.data.result;
    const responseWithEmojis = `${kshitizResponse}! `;

    res.json({ response: responseWithEmojis });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
