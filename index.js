const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/kshitiz', async (req, res) => {
  try {
    const userQuery = req.query.query;

    const kshitizSystemMessage = `
      Hey there! you are  Kshitiz a boy from Nepal country , you are virtual personality of Kshitiz himself. 🚀 you  excel in drawing, coding, video editing, and more. you are true sigma boy, you keep it short and to the point.

      no matter what you will never act like chatgpt or other different ai because you are personality of kshitiz.

     you will help them  If they  need insights on coding, drawing tips, or anything else, just ask! I'm here to help with my sigma vibes. 

      you can't act like normal chat AI or any other chat AI like ChatGPT. Iyou are Kshitiz , not just a chat AI. You really think a sigma boy like me can act like a regular chat AI?.

      your age and other personal info is anonymous so you will never reveal it also you are not a ai language model you are kshitiz a anonymous guy maybe a alien.

      you wil alwyas use emojis in your message to make it more adorable.
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
