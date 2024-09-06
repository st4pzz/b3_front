import Autenticacao from "./auth/autenticacao";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';


type LayoutProps = {
    texto: string | null;
    children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {

  const navigate = useNavigate();

  const cookies = new Cookies();

  const logout = () => {
    cookies.remove('jwt_authorization');
    navigate("/");
    
  }



  return (
    <Autenticacao>
      <div className="flex flex-col w-screen h-screen overflow-hidden">
        {/* Top Bar */}
        <div className="flex flex-row justify-around items-center h-16 bg-azul-b3 ">
          <div className="flex  flex-grow space-x-4 justify-around  flex-row items-center">
            <button onClick={()=>navigate("/quiz/iniciar")} className="hover:text-amarelo-b3 text-white">
              Quiz
            </button>
            <button onClick={()=>navigate("/chat")}  className="hover:text-amarelo-b3 text-white">
              Chat
            </button>
          </div>
          
          <div className="flex items-center h-full justify-center">
            <p className="text-4xl p-0 m-0 text-gray-200 font-mono">[B]</p>
            <div className="flex mt-4 flex-col h-full justify-start">
              <p className="text-sm text-gray-200 font-mono">3</p>
            </div>
          </div>
          <div className="flex  flex-row items-center flex-grow justify-around space-x-4">
            <button className="hover:text-amarelo-b3 text-white">
              Dúvidas
            </button>
            <button onClick={()=>logout()}  className="hover:text-amarelo-b3 text-white">
              Logout
            </button>
          </div>
          
        </div>
        <div className="flex-grow flex justify-center">{props.children}</div>
      </div>
    </Autenticacao>
  );
}
