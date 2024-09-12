
import Cookies from 'universal-cookie';

export default function Autenticacao(props:any) {
 
  const cookies = new Cookies();

  function renderizarConteudo() {
    if (cookies.get('jwt_authorization')) {
      return props.children;
    } else {
      return (

        <div className="bg-gray-700 h-screen flex justify-center items-center text-4xl font-bold text-red-400 ">
            <p>Você precisa estar logado para acessar essa página</p>
        </div>
        
      )
      
    }
  }

  return renderizarConteudo(); // Chame a função renderizarConteudo para renderizar o conteúdo condicionalmente.
}
