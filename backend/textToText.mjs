import { GoogleGenerativeAI } from '@google/generative-ai'
import env from 'dotenv'

env.config()

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY)

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

async function run() {
  const prompt =
    'Give me back 10 B2 English level words such as name, definition, usage in json format.'

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  console.log(text)
}

run()
