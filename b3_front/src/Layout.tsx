import Autenticacao from "./auth/autenticacao";
import MenuIcon from '@mui/icons-material/Menu';

type LayoutProps = {
    texto: string | null;
    children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
    return (
        <Autenticacao>
            <div className="flex flex-col w-screen h-screen bg-black overflow-hidden">
            <div className="flex flex-row px-6 justify-start items-center h-16 bg-azul-b3 relative">
  <div className="flex items-center h-full">
    <button>
    <MenuIcon fontSize="large" sx={{color:'white'}}  />
    </button>
  </div>
  <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
    <p className="text-4xl text-gray-200 font-mono">[B]</p>
    <div className="flex flex-col h-full justify-start">
      <p className="text-sm text-gray-200 font-mono">3</p>
    </div>
  </div>
</div>

              

                {/* Ajusta o div abaixo para usar flex-grow */}
                <div className="flex-grow flex justify-center">
                    {props.children}
                </div>
            </div>
        </Autenticacao>
    );
}
