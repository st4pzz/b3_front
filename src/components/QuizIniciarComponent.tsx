import { Link } from "react-router-dom";

export default function QuizIniciarComponent() {
    return (
      <div className="flex h-full w-full items-center justify-center bg-azul-b3/80 ">
        <div className="flex flex-col w-1/3 items-center gap-10">
          <h1 className="text-neutral-300 text-xl text-center">
            Esse é um Quiz para avaliar o seu conhecimento sobre produtos de investimento. Clique no botão abaixo para iniciar:
          </h1>
          <Link to="/quiz/perguntas">
          <button className="bg-yellow-300 w-40 hover:bg-amarelo-b3 text-gray-800 text-lg font-medium font-sans p-4 rounded-lg mt-4">
            Iniciar o Quiz
          </button>
          </Link>
        </div>
      </div>    
    );
  }
  