import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic, MicOff, Bot, User, Languages } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// --- Configuration Object for Languages ---
// This holds all language-specific text and settings for easy management.
const languageConfig = {
  en: {
    code: 'en-IN',
    name: 'English',
    placeholder: 'Type your health question...',
    initialBotMessage: 'Namaste! I am your AI health assistant. How can I help you today?',
  },
  hi: {
    code: 'hi-IN',
    name: 'Hindi',
    placeholder: 'अपना स्वास्थ्य प्रश्न टाइप करें...',
    initialBotMessage: 'नमस्ते! मैं आपका एआई स्वास्थ्य सहायक हूँ। मैं आज आपकी मदद कैसे कर सकता हूँ?',
  },
  or: {
    code: 'or-IN',
    name: 'Odia',
    placeholder: 'ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶ୍ନ ଟାଇପ୍ କରନ୍ତୁ...',
    initialBotMessage: 'ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କର AI ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ। ମୁଁ ଆଜି ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?',
  },
};

type LanguageKey = keyof typeof languageConfig;

// --- The Main Chat Interface Component ---
const ChatInterface = () => {
  // --- State Management ---
  const [language, setLanguage] = useState<LanguageKey>('en');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot' as const,
      content: languageConfig.en.initialBotMessage,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // --- Effects for UI/UX Improvements ---

  // Effect to reset the chat when the language is changed
  useEffect(() => {
    setMessages([
      {
        id: Date.now(),
        type: 'bot' as const,
        content: languageConfig[language].initialBotMessage,
        timestamp: new Date()
      }
    ]);
  }, [language]);

  // Effect to scroll to the bottom of the chat on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);


  // --- Core Functions ---

  // Function to get a response from the Gemini AI
  const getAIResponse = async (userMessage: string, lang: LanguageKey) => {
    // ⚠️ CRITICAL SECURITY WARNING ⚠️
    // Never expose your API key on the client-side.
    // This key should be stored in an environment variable on a secure backend server.
    const API_KEY = 'AIzaSyA17TYUA-SKvSUhVPh9EtKZWWyPyVQOp08'; // Replace with your key only for testing.

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

    const prompt = `You are an AI health assistant for rural India. The user's question is in ${languageConfig[lang].name}: "${userMessage}". Respond helpfully in simple ${languageConfig[lang].name}. If the situation seems urgent, strongly advise contacting a local ASHA worker or visiting the nearest hospital. Keep the response concise and culturally appropriate for a rural Indian context.`;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0]?.content?.parts[0]?.text || 'I understand. For the best advice, please see your local ASHA worker or visit a hospital.';
    } catch (error) {
      console.error('AI API Error:', error);
      toast.error('Could not connect to the AI assistant.');
      return 'I am having trouble connecting. Please consult a local ASHA worker or visit a hospital for medical advice.';
    }
  };

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { id: Date.now(), type: 'user' as const, content: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    const aiResponse = await getAIResponse(currentInput, language);
    
    const botMessage = { id: Date.now() + 1, type: 'bot' as const, content: aiResponse, timestamp: new Date() };
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };
  
  // Function to handle voice input
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast.error('Voice input is not supported on this browser.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = languageConfig[language].code;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      toast.success('Listening...', { icon: '🎤' });
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
    };

    recognition.onerror = (event: any) => {
      if (event.error === 'no-speech' || event.error === 'audio-capture') {
        toast.error('Could not hear you. Please try again.');
      } else if (event.error === 'not-allowed') {
         toast.error('Microphone access has been denied.');
      } else {
        toast.error('Speech recognition failed.');
      }
    };
    
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const quickQuestions = [
    'I have fever and headache',
    'My child is not eating well',
    'Where is the nearest hospital?',
  ];

  // --- JSX Rendering ---
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-4xl mx-auto font-sans">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-[90vh] max-h-[750px]">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-4 flex justify-between items-center flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI Health Assistant</h3>
                <p className="text-blue-100 text-sm">Available 24/7</p>
              </div>
            </div>
            <div className="relative">
               <Languages className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600 pointer-events-none" />
               <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as LanguageKey)}
                  className="pl-8 pr-4 py-2 text-sm bg-white rounded-full border border-gray-300 focus:ring-2 focus:ring-white focus:outline-none"
               >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                  <option value="or">ଓଡ଼ିଆ</option>
               </select>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start gap-2.5 max-w-md`}>
                  {message.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-teal-500 to-blue-500">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  )}
                  <div className={`rounded-lg p-3 ${message.type === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border'}`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1.5 text-right ${message.type === 'user' ? 'text-blue-200' : 'text-gray-400'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-2.5 max-w-md">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-teal-500 to-blue-500">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions & Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputValue(question)}
                  className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={languageConfig[language].placeholder}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleVoiceInput}
                disabled={isListening}
                className={`p-2.5 rounded-lg transition-colors ${isListening ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInterface;