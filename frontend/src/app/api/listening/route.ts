import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: Request) {
  try {
    const { input } = await request.json()
    console.log(input)
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

    if (!apiKey) {
      throw new Error('API key is not set')
    }

    const endpoint = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apiKey}`
    const payload = {
      input: { text: input },
      voice: {
        languageCode: 'en-US',
        name: 'en-US-Standard-A',
      },
      audioConfig: {
        audioEncoding: 'MP3',
        speakingRate: 1.0,
        pitch: 0.0,
        volumeGainDb: 0.0,
      },
      enableTimePointing: ['SSML_MARK'],
    }

    const response = await axios.post(endpoint, payload)
    // console.log('Text-to-speech response:', response.data)

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error in text-to-speech API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello from the listening API' })
}
