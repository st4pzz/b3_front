import Autenticacao from "./auth/autenticacao";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import LogoB3 from "./components/LogoB3";


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
          
          <LogoB3 />
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
