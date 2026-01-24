import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import avatarTolu from '../assets/tolu.jpg';

interface Message {
  id: string;
  content: string;
  role: 'ai' | 'user';
  timestamp: Date;
}

interface ChatInterfaceProps {
  variant?: 'dark' | 'light' | 'v3';
  onSendMessage?: (message: string) => Promise<string>;
  onTrialsExhausted?: () => void;
}

const ChatInterface = ({ variant = 'dark', onTrialsExhausted }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "I'm scanning your profile. It looks empty. Convince me in one sentence: Why should I give you a desk at WDC Labs instead of the 10,000 other students on the waitlist?",
      role: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [turnsLeft, setTurnsLeft] = useState(3);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || turnsLeft <= 0) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    const newTurnsLeft = turnsLeft - 1;
    setTurnsLeft(newTurnsLeft);

    // Simulate AI response (this would be replaced by actual backend integration)
    setTimeout(() => {
      let responseContent = '';
      
      if (newTurnsLeft === 2) {
        responseContent = "Interesting. Your response shows potential, but I need more substance. Tell me about a project you've actually shipped.";
      } else if (newTurnsLeft === 1) {
        responseContent = "Hmm, that's what everyone says. What makes you different from the 9,999 others making the same claim?";
      } else if (newTurnsLeft === 0) {
        responseContent = "Your trial session is over. You've shown some potential, but I need to see more commitment. Join our waitlist now and prove you're serious about your career. Fill out the application form below to secure your spot in Batch 1.";
        // Trigger waitlist modal after showing the message
        setTimeout(() => {
          onTrialsExhausted?.();
        }, 1500);
      }
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        role: 'ai',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // V3 design (exact match to reference)
  if (variant === 'v3') {
    return (
      <div className="bg-white rounded-2xl overflow-hidden w-full shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#1a2744]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src={avatarTolu} 
                alt="Tolu - AI HR Manager" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Tolu (AI HR)</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                <p className="text-xs text-[#ff6b35] font-medium">Status: JUDGING YOU</p>
              </div>
            </div>
          </div>
          <div className="bg-[#22c55e] text-white px-3 py-1 rounded text-xs font-bold">
            {turnsLeft} TURNS LEFT
          </div>
        </div>

        {/* Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-4 bg-white">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'ai' ? (
                  <div className="max-w-[90%]">
                    <p className="text-sm font-bold text-[#1a2744] mb-2">Tolu</p>
                    <div className="bg-[#e8eaed] rounded-2xl p-4">
                      <p className="text-sm text-[#1a2744]">{message.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#1a2744] text-white rounded-2xl p-4 max-w-[85%]">
                    <p className="text-sm">{message.content}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="max-w-[90%]">
                <p className="text-sm font-bold text-[#1a2744] mb-2">Tolu</p>
                <div className="bg-[#e8eaed] rounded-2xl p-4">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-[#1a2744] rounded-full animate-pulse" />
                    <span className="w-2 h-2 bg-[#1a2744] rounded-full animate-pulse delay-100" />
                    <span className="w-2 h-2 bg-[#1a2744] rounded-full animate-pulse delay-200" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="bg-[#1a2744] p-4">
          <div className="flex items-center gap-3">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={turnsLeft <= 0 ? "Session ended. Join waitlist above." : "Type your defense here..."}
              disabled={turnsLeft <= 0}
              className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 text-sm focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || turnsLeft <= 0}
              className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const containerClass = variant === 'dark' 
    ? 'chat-interface' 
    : 'bg-card border border-border shadow-xl';

  const bubbleAiClass = variant === 'dark'
    ? 'chat-bubble-ai'
    : 'bg-secondary rounded-2xl rounded-tl-sm p-4';

  return (
    <div className={`${containerClass} rounded-2xl overflow-hidden max-w-md w-full`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-teal">
            <img 
              src={avatarTolu} 
              alt="Tolu - AI HR Manager" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">Tolu (AI HR)</h3>
            <p className="text-xs text-coral">Status: JUDGING YOU</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
          turnsLeft > 1 ? 'bg-teal/20 text-teal' : 'bg-coral/20 text-coral'
        }`}>
          {turnsLeft} TURNS LEFT
        </div>
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={message.role === 'ai' ? bubbleAiClass : 'chat-bubble-user max-w-[85%]'}>
                {message.role === 'ai' && (
                  <p className="text-xs font-semibold text-teal mb-1">Tolu</p>
                )}
                <p className="text-sm text-foreground">{message.content}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className={bubbleAiClass}>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-teal rounded-full typing-dot" />
                <span className="w-2 h-2 bg-teal rounded-full typing-dot" />
                <span className="w-2 h-2 bg-teal rounded-full typing-dot" />
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={turnsLeft <= 0 ? "Session ended. Join waitlist above." : "Type your defense here..."}
            disabled={turnsLeft <= 0}
            className="flex-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || turnsLeft <= 0}
            className="btn-primary-gradient text-primary-foreground px-4"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;