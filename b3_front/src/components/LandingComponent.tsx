import LogoB3 from "./LogoB3";

export default function LandingComponent() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden ">
        <div className="flex h-14 bg-azul-b3 flex-row items-center">

            <div className="flex items-center gap-8  flex-row ml-2 justify-start">
            

                <LogoB3 />

                <p className="tracking-wider text-xl font-bold text-white"> Bora Investir </p>
            </div>

            <div className="flex flex-row justify-center mx-auto gap-28">
                <button className="text-neutral-100">
                Notícias

                </button>
                <button className="text-neutral-100">
                    Colunistas
                    
                </button>
                <button className="text-neutral-100">
                    Objetivos Financeiros

                    
                </button>
                <button className="text-neutral-100">
                    Tipos de investimentos

                    
                </button>
                <button className="text-amarelo-landing">
                    Para você

                    
                </button>


            </div>


        </div>

        <div className="">



        </div>

        <div className="">



        </div>

        <div className="">



        </div>



        <div className="flex justify-end h-14 bg-azul-b3 w-full ">

        </div>
     
    </div>
  );
}