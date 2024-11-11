import { GoogleGenerativeAI } from '@google/generative-ai'
const api = process.env.NEXT_PUBLIC_API_KEY || ''
const genAI = new GoogleGenerativeAI(api)
const generateWords = async (level: String) => {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-pro',
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              word: {
                type: 'string',
              },
              definition: {
                type: 'string',
              },
              example_sentence: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    })
    const prompt = `Give me 10 words with definition and example sentence of your choice: ${level}. You just need to give me the right strcutre and I will convert those words into json format. The following is an example of the structure:
      [
    {
        "definition": "Absolutely necessary; essential.",
        "example_sentence": [
            "Water is indispensable for survival.",
            "An indispensable tool for any writer is a good dictionary.",
            "She quickly became indispensable to the team and very valued by her boss.",
            "He made himself indispensable to the company and became very influential among his peers.",
            "Is a college education indispensable for success?"
        ],
        "word": "indispensable"
    },
    {
        "definition": "To make something more attractive or interesting.",
        "example_sentence": [
            "The colorful illustrations enhance the book's appeal to children.",
            "The addition of spices enhanced the flavor of the dish.",
            "They enhanced the security of the building by adding more cameras.",
            "The company enhanced its image by sponsoring a charity event.",
            "The software enhances the quality of digital images and makes them look sharp and clear on modern displays"
        ],
        "word": "enhance"
    },
    {
        "definition": "A difficult or unpleasant situation.",
        "example_sentence": [
            "The country is facing a severe economic predicament.",
            "She found herself in a predicament when her car broke down in the middle of nowhere.",
            "He was in a terrible predicament, with bills piling up and no job in sight.",
            "The company's financial predicament forced them to lay off employees.",
            "I'm in a bit of a predicament - I've lost my keys and I'm locked out of my house and car and I don't have my phone on me either to call a locksmith"
        ],
        "word": "predicament"
    },
    {
        "definition": "Relating to or involving the use of the imagination or original ideas to create something.",
        "example_sentence": [
            "The artist's creative use of color and light made the painting captivating.",
            "She came up with a creative solution to the problem.",
            "The advertising campaign was very creative and effective.",
            "He is a creative writer with a unique style.",
            "Creative thinking is essential for innovation and success"
        ],
        "word": "creative"
    },
    {
        "definition": "To completely get rid of something unwanted.",
        "example_sentence": [
            "The company eradicated all traces of the virus from its computer system.",
            "They are working to eradicate poverty in the region.",
            "The government is trying to eradicate corruption.",
            "The disease was eradicated through vaccination.",
            "The weeds in the garden were eradicated using a powerful herbicide"
        ],
        "word": "eradicate"
    },
    {
        "definition": "A short and striking or memorable phrase used in advertising.",
        "example_sentence": [
            "The company's new slogan is 'Innovation for a better future'.",
            "The political campaign used the slogan 'Vote for change'.",
            "The product's slogan is catchy and memorable.",
            "The slogan of the Olympics is 'Faster, Higher, Stronger'.",
            "The restaurant's slogan is 'Where good food meets good friends'"
        ],
        "word": "slogan"
    },
    {
        "definition": "To give a detailed explanation of something.",
        "example_sentence": [
            "The teacher elaborated on the topic, providing additional examples and information.",
            "The report elaborates on the causes of the economic crisis.",
            "She elaborated on her plans for the future.",
            "He elaborated on the steps involved in completing the project.",
            "The article elaborates on the benefits of a healthy diet"
        ],
        "word": "elaborate"
    },
    {
        "definition": "Something that happens by chance, especially a welcome one.",
        "example_sentence": [
            "By a stroke of serendipity, they met their old friend at the airport.",
            "It was pure serendipity that they were both in Paris at the same time.",
            "A series of serendipitous events led to her discovering the ancient artifact.",
            "The discovery was made by serendipity, not by design.",
            "I stumbled upon the solution by serendipity while browsing the code"
        ],
        "word": "serendipity"
    },
    {
        "definition": "Having or showing great wisdom or sound judgment.",
        "example_sentence": [
            "The judge made a wise decision in the case.",
            "It was a wise investment that paid off handsomely.",
            "She gave him some wise advice.",
            "He was known for his wise counsel.",
            "The wise old man shared his knowledge with the villagers"
        ],
        "word": "wise"
    },
    {
        "definition": "To make changes in something, typically to improve or repair it.",
        "example_sentence": [
            "They modified the software to make it more user-friendly.",
            "The car was modified to increase its performance.",
            "The recipe was modified to suit her dietary needs.",
            "The building was modified to accommodate the disabled.",
            "The gene was modified to produce a different protein"
        ],
        "word": "modify"
    }
]`
    const result = await model.generateContent(prompt)
    return result
  } catch (error) {
    console.error(error)
    return []
  }
}
export default generateWords
