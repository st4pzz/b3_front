interface ResultadoQuizProps {


    resultado : number;
}




export default function ResultadoQuizComponent(props: ResultadoQuizProps) {





    return (




        <div className="relative flex h-full w-full justify-center items-center">
        
        <div className="absolute inset-0 bg-azul-b3 opacity-80 z-10"></div>
        
       
        <div className="relative flex border justify-center bg-white rounded w-2/3 h-3/4 z-20 pb-14">
            <div className="flex flex-col h-full justify-around items-center">
                <div className="mx-52">
                    <p className="text-4xl tracking-wide text-azul-b3 font-bold font-sans">RESULTADO :</p>
                </div>
    
                <div className="mx-52">
                    <p className="text-4xl text-amarelo-landing  font-bold font-sans">{props.resultado}%</p>
                </div>
    
                <div className="flex flex-col w-full gap-14">

                    <button className="border bg-cinza-b3 rounded-xl shadow-orange-300 shadow-sm h-full">
                        <div className="flex items-center justify-center h-16">
                            <p className="text-lg font-medium p-2 text-azul-b3 ">
                            Clique aqui para conferir a correção
                            </p>
                        </div>

                        
                    </button>
                    <button className="border bg-cinza-b3 rounded-xl shadow-orange-300 shadow-sm h-full">
                        <div className="flex items-center justify-center h-16">
                            <p className="text-lg font-medium p-2 text-azul-b3 ">
                            Clique aqui para voltar para o chat
                            </p>
                        </div>
                        
                        
                    </button>

                </div>
              
            </div>
        </div>
    </div>
    
    )
}