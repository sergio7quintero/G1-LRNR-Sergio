const express = require('express')
const cors = require('cors')
const OpenAI = require('openai')
const dotenv = require('dotenv') 
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });


const app = express()
const PORT = 5000

app.use(cors({
    origin: 'http://localhost:3000'
})); 

//Making call to open ai to fetch questions
app.get('/api/questions', async (req, res) => {
// API key below
    const apiKey = process.env.OPENAI_API_KEY; 
    const openai = new OpenAI({ apiKey: apiKey });
    // AI model
    const aiModel = "gpt-4o"
    //Messages Array
    const messages = [
        {
            role: "system",
            content: 'you are a quiz master. generate 5 random questions with 4 multiple choice answers. Also provide the answer seperately. The response should be in the following json format: {"questions":[{"id":0,"questions":""options":[]"answer":""},...]}'
        }
    ] 
    try {
        const completion = await openai.chat.completions.create({
            model: aiModel,
            messages: messages,
        });

    const aiResponse = completion.choices[0].message.content

//Parse string into json
//return the question json
    const json = JSON.parse(aiResponse)
    res.json(json);
} catch (error) {
    console.error(error);
    res.status(500).send('Error fetching questions from OpenAI');
}
})


app.listen(PORT, ()=> {console.log('server is running on port 5000 ')})