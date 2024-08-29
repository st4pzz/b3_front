import Autenticacao from "./auth/autenticacao";

type LayoutProps = {
    texto: string | null;
    children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
    return (
        <Autenticacao>
            <div className="flex flex-col w-screen h-screen bg-white overflow-hidden">
                <div className="flex flex-row justify-between px-6 items-center h-16  bg-blue-800">
                    <div>
                        <p className="text-xl text-gray-200 tracking-wider font-mono">Bot B3</p>
                    </div>
                    <div className="flex flex-row text-lg font-sans text-gray-100 gap-6">
                        {/* Outros elementos da barra de navegação */}
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
