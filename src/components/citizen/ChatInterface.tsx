import React, { useState } from 'react';
import { Send, Mic, MicOff, Bot, User, Languages } from 'lucide-react'; // Added Languages icon
import toast from 'react-hot-toast';

// NEW: Configuration object for languages
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

const ChatInterface = () => {
  // NEW: State for current language, default to English
  const [language, setLanguage] = useState<'en' | 'hi' | 'or'>('en');

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot' as const,
      // MODIFIED: Use initial message from config
      content: languageConfig.en.initialBotMessage,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // IMPORTANT: Never expose your API key on the client-side like this.
  // This is a major security risk. Use a backend server to make API calls.
  const getAIResponse = async (userMessage: string, lang: 'en' | 'hi' | 'or') => {
    try {
      // THIS IS INSECURE - MOVE TO BACKEND
      const API_KEY = 'YOUR_GEMINI_API_KEY'; // Replace with your actual key
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              // MODIFIED: Dynamic prompt that tells the AI which language to use
              text: `You are an AI health assistant for rural India. The user's question is in ${languageConfig[lang].name}: "${userMessage}". 
              Respond helpfully in simple ${languageConfig[lang].name}. 
              If the situation seems urgent, strongly advise contacting a local ASHA worker or visiting the nearest hospital. 
              Keep the response concise and culturally appropriate for a rural Indian context.`
            }]
          }]
        })
      });

      const data = await response.json();
      return data.candidates[0]?.content?.parts[0]?.text || 'I understand. For the best advice, please see your local ASHA worker or visit a hospital.';
    } catch (error) {
      console.error('AI API Error:', error);
      return 'I am having trouble connecting. Please consult a local ASHA worker or visit a hospital for medical advice.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), type: 'user' as const, content: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // MODIFIED: Pass the current language to the AI function
    const aiResponse = await getAIResponse(inputValue, language);
    
    const botMessage = { id: Date.now() + 1, type: 'bot' as const, content: aiResponse, timestamp: new Date() };
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };
  
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast.error('Voice input is not supported on this browser.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    // MODIFIED: Set language dynamically
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
      // Optional: automatically send after speech recognition
      // setTimeout(() => handleSendMessage(), 500);
    };

    recognition.onerror = (event: any) => {
      if (event.error === 'no-speech' || event.error === 'audio-capture') {
        toast.error('Could not hear you. Please try again.');
      } else if (event.error === 'not-allowed') {
         toast.error('Microphone access denied.');
      } else {
        toast.error('Speech recognition failed. Please try again.');
      }
    };
    
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  // MODIFIED: Quick questions can also be multilingual if needed, but keeping them simple for now.
  const quickQuestions = [
    'I have fever and headache',
    'My child is not eating well',
    'Where is the nearest hospital?',
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* MODIFIED: Chat Header with Language Selector */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">AI Health Assistant</h3>
              <p className="text-blue-100 text-sm">Available 24/7</p>
            </div>
          </div>
          {/* NEW: Language Selector Dropdown */}
          <div className="relative">
             <Languages className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
             <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'hi' | 'or')}
                className="pl-7 pr-4 py-1 text-sm bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-white"
             >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="or">ଓଡ଼ିଆ</option>
             </select>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {/* ... (message rendering logic remains the same) ... */}
        </div>

        {/* Quick Questions */}
        <div className="px-4 py-2 border-t border-gray-200">
            {/* ... (quick questions logic remains the same) ... */}
        </div>

        {/* MODIFIED: Input Area with dynamic placeholder */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                // MODIFIED: Dynamic placeholder text
                placeholder={languageConfig[language].placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button onClick={handleVoiceInput} disabled={isListening} /* ... */ >
                {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </button>
            <button onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading} /* ... */>
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;