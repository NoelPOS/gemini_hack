import React, { useState, useEffect } from "react";
import Conversation from "./Conversation";

type Props = {
  setPage: (page: string) => void;
  setTranscript: (transcript: any) => void; // Corrected to accept an array of Transcripts
};

type Message = {
  text: string;
  fromSelf: boolean;
  sender: string;
  finished: boolean;
};

const Component = ({ setPage, setTranscript }: Props) => {
  const initialMessages: Message[] = [
    {
      text: "Hello everyone! How's it going?",
      fromSelf: false,
      sender: "bot",
      finished: false,
    },
    {
      text: "Hello! It's going well, thanks for asking.",
      fromSelf: true,
      sender: "user",
      finished: false,
    },
    { text: "Nice!", fromSelf: false, sender: "bot", finished: false },
    {
      text: "What about you?",
      fromSelf: true,
      sender: "user",
      finished: false,
    },
    {
      text: "I'm doing great, thanks!",
      fromSelf: false,
      sender: "bot",
      finished: false,
    },
    {
      text: "That's good to hear!",
      fromSelf: true,
      sender: "user",
      finished: false,
    },
    {
      text: "What have you been up to today?",
      fromSelf: false,
      sender: "bot",
      finished: false,
    },
    {
      text: "Not much, just relaxing.",
      fromSelf: true,
      sender: "user",
      finished: false,
    },
  ];

  const [conversation, setConversation] = useState<Message[]>(initialMessages);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null
  );
  const [isListening, setIsListening] = useState(false);
  const [currentSpeakingMessage, setCurrentSpeakingMessage] =
    useState<string>("");

  useEffect(() => {
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      console.error("Web Speech API is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();

    recognitionInstance.lang = "en-US";
    recognitionInstance.interimResults = false;
    recognitionInstance.maxAlternatives = 1;

    recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
      const speechResult = event.results[0][0].transcript;

      setTranscript((prevTranscript: string) =>
        prevTranscript.concat(" " + speechResult)
      );
      const indexToRemove = conversation.findIndex(
        (message) => message.fromSelf === false && !message.finished
      );
      console.log(conversation[indexToRemove]);

      if (indexToRemove !== -1) {
        const messageToSpeak = conversation[indexToRemove];
        const updatedConversation = conversation.map((msg, idx) =>
          idx === indexToRemove ? { ...msg, finished: true } : msg
        );
        setConversation(updatedConversation);

        if (messageToSpeak) {
          console.log(messageToSpeak.text);
          speak(messageToSpeak.text);
        }
      }
    };

    recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Error occurred in recognition: ", event.error);
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
      console.log("Speech recognition service disconnected");
    };

    setRecognition(recognitionInstance);
  }, [conversation]);

  const startRecognition = () => {
    if (recognition && !isListening) {
      recognition.start();
      setIsListening(true);
    }
  };

  const stopRecognition = () => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const speak = (text: string) => {
    if (!window.speechSynthesis) {
      console.error("Speech Synthesis API is not supported in this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentSpeakingMessage(text);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentSpeakingMessage("");
      startRecognition();
    };

    utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
      console.error("Error occurred in speech synthesis: ", event.error);
      setIsSpeaking(false);
      setCurrentSpeakingMessage("");
    };

    window.speechSynthesis.speak(utterance);
  };

  const startChat = () => {
    speak("Say 'Hello Expo' to start.");
  };

  const handleStartChatClick = () => {
    startChat();
  };

  const handleStartRecognitionClick = () => {
    startRecognition();
  };

  const handleStopRecognitionClick = () => {
    stopRecognition();
  };

  return (
    <div className="flex flex-col w-screen items-center bg-purple-600">
      <div className="max-w-[1024px] w-full mb-auto">
        <Conversation
          messages={conversation}
          currentSpeakingMessage={currentSpeakingMessage}
        />
      </div>

      <div className="flex space-x-4 mt-4 mb-4">
        <button
          className="bg-white border-8 border-purple-700 rounded-full p-2"
          onClick={handleStartChatClick}
          disabled={isSpeaking}
        >
          {isSpeaking ? "Speaking..." : "Start Chat"}
        </button>
        <button
          className="bg-white border-8 border-purple-700 rounded-full p-2"
          onClick={handleStartRecognitionClick}
          disabled={isListening || isSpeaking}
        >
          {isListening ? "Listening..." : "Start Listening"}
        </button>
        <button
          className="bg-white border-8 border-purple-700 rounded-full p-2"
          onClick={handleStopRecognitionClick}
          disabled={!isListening}
        >
          Stop Listening
        </button>
        <button>
          <button
            className="bg-white border-8 border-purple-700 rounded-full p-2"
            onClick={() => setPage("result")}
          >
            Finish
          </button>
        </button>
      </div>
    </div>
  );
};

export default Component;
