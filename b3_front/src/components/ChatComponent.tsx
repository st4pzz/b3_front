import { useState, useEffect, useRef } from 'react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}



export default function ChatComponent() {

    const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (): Promise<void> => {
    if (!input.trim()) return;
    const newUserMessage: Message = { role: 'user', content: input.trim() };
    setMessages([...messages, newUserMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://carro-amigo-backend-production.up.railway.app/chat/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, newUserMessage] }),
      });
      const data = await response.json();
      setIsLoading(false);
      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        setIsTyping(true);
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { role: 'assistant', content: data.choices[0].message.content },
          ]);
          setIsTyping(false);
        }, 1000);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'assistant', content: 'Desculpe, não consegui processar sua resposta.' },
        ]);
      }
    } catch (error) {
      setIsLoading(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: 'Erro de conexão. Por favor, tente novamente mais tarde.' },
      ]);
    }
  };

  return (
    <div className="flex flex-col w-full h-full p-5 bg-gray-100 rounded-lg shadow-md">
      <div className="flex-1 overflow-y-auto mb-3">
      {messages.map((msg, index) => (
    <div
      key={index}
      className={`flex mb-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <p
        className={`p-3 rounded-xl max-w-[80%] ${
          msg.role === 'user' ? 'bg-blue-300 text-black self-end' : 'bg-gray-300 text-black self-start'
        }`}
      >
        {msg.content}
      </p>
    </div>
  ))}
        {isTyping && (
          <p className="mb-2 bg-purple-200 rounded-lg p-2 animate-pulse">Digitando...</p>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex items-center border-t border-gray-300 pt-2">
        <input
          className="flex-1 p-2 border border-gray-300 rounded-md mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          className={`px-4 py-2 rounded-md text-white ${
            isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </div>
  );

}
