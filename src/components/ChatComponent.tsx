import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


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
  const [showQuestions, setShowQuestions] = useState<boolean>(true);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageContent: string): Promise<void> => {
    setShowQuestions(false);
    if (!messageContent.trim()) return;
    const newUserMessage: Message = { role: 'user', content: messageContent.trim() };
    setMessages([...messages, newUserMessage]);
    setInput('');
    setIsLoading(true);
    console.log(newUserMessage.content);

    try {
      const response = await fetch('http://3.84.232.204:5000/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: newUserMessage.content }),
      });
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      if (data.response) {
        setIsTyping(true);
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { role: 'assistant', content: data.response },
          ]);
          setIsTyping(false);
        }, 10000);
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

  const startChat = (initialMessage?: string): void => {
    setShowQuestions(false);
    if (initialMessage) {
      handleSendMessage(initialMessage);
    }
  };

  return (
    <div className="flex flex-col w-full h-full p-5 bg-azul-b3/80 shadow-md">
      {showQuestions && (
        <div>
        <div className='flex justify-end items-center'>
            <Link to="/quiz/iniciar">
              <button className='text-pretty text-base border shadow-lg rounded-xl p-2 bg-yellow-300 text-slate-700'>
                Clique aqui para testar seus conhecimentos
              </button>
            </Link>
          </div>
          <div className="flex flex-col h-full gap-10 justify-center items-center">
          <p className='max-w-80 text-base text-neutral-200'>
            Olá! Sou um Chat Inteligência Artificial treinado pela B3, estou aqui para lhe ajudar com dúvidas sobre Educação Financeira. Exemplos de perguntas que você pode fazer:
          </p>
          <button onClick={() => startChat('O QUE SÃO AÇÕES?')}>
            <p className='border bg-white rounded-md text-neutral-600 p-2 w-96 text-center'>O QUE SÃO AÇÕES?</p>
          </button>
          <button onClick={() => startChat('COMO DIVERSIFICAR EM FUNDOS IMOBILIÁRIOS?')}>
            <p className='border bg-white rounded-md text-neutral-600 p-2 w-96 text-center'>COMO DIVERSIFICAR EM FUNDOS IMOBILIÁRIOS?</p>
          </button>
          <button onClick={() => startChat('COMO ECONOMIZAR PARA INVESTIR?')}>
            <p className='border bg-white rounded-md text-neutral-600 p-2 w-96 text-center'>COMO ECONOMIZAR PARA INVESTIR?</p>
          </button>
        </div>
        </div>
      )}
      {!showQuestions && (
        <div className="flex flex-col flex-1">
          <div className="flex-1 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-2  ${msg.role === 'user' ? 'justify-end' : 'ml-20 mt-20 items-center text-center justify-start'}`}
              >
                {
                  msg.role !== 'user' && (
                    <img src="/b3-chat-logo.png" alt="" />
                  )
                }
                <p
                  className={`p-3 rounded-lg text-base font-medium max-w-[80%] ${
                    msg.role === 'user' ? 'bg-white text-black min-w-80 justify-center items-center text-center self-end' : ' text-white mt-2 self-start'
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
          
        </div>
      )}
      <div className="fixed bottom-4 left-1/2  p-2 transform -translate-x-1/2 w-2/3 border-gray-300 bg-white rounded-md">
            <input
              className="w-full p-2  border-gray-300 focus:border-transparent focus:outline-none rounded-md"
              placeholder="Digite a sua pergunta aqui..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
            />
          </div>
    </div>
  );
}
