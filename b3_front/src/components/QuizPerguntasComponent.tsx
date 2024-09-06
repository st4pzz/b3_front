export default function QuizPerguntasComponent(){
    return (
        <div className="flex h-full w-full justify-center bg-azul-b3-claro items-center">
            <div className="flex border bg-white rounded w-2/3 h-3/4">
                <div className="flex flex-col h-full justify-around items-center">

                    <div className="mx-52">
                        <p className="text-xl text-azul-b3 font-semibold font-sans"> PERGUNTA 1</p>
                    </div>

                    <div className="mx-52">
                        <p className="text-lg text-azul-b3-claro font-normal font-sans "> O que é a Taxa SELIC?</p>
                    </div>

                    <div className="w-2/3 mx-24 flex flex-col space-y-4">
                    <button className="border bg-cinza-b3 rounded-xl shadow-orange-300 shadow-sm h-full">
                        <div className="flex items-center h-20"> 
                            <p className="text-base p-2 text-azul-b3 ">
                                a. A taxa SELIC é a taxa básica de juros da economia, que influencia outras taxas de juros do país, definida pelo COPOM.
                            </p>
                        </div>
                        </button>

                        <button className="border bg-cinza-b3 rounded-xl shadow-orange-300 shadow-sm h-full">
                        <div className="flex items-center h-20 "> 
                            <p className="text-base p-2 text-azul-b3">
                                b. A taxa SELIC é a taxa de inflação da economia, pode ser conhecida também como IPCA.
                            </p>
                        </div>
                        </button>

                        <button className="border bg-cinza-b3 rounded-xl shadow-orange-300 shadow-sm h-full">
                        <div className="flex items-center h-20 "> 
                            <p className="text-base p-2 text-azul-b3 ">
                                c. A taxa SELIC é a taxa de juros calculada pelos bancos.
                            </p>
                        </div>
                        </button>

                        <button className="border bg-cinza-b3 rounded-xl shadow-orange-300 shadow-sm h-full">
                        <div className="flex items-center h-20"> 
                            <p className="text-base p-2 text-azul-b3 ">
                                d. A taxa SELIC é a taxa atrelada à variação cambial.
                            </p>
                        </div>
                        </button>
                    </div>  

                </div>
            </div>
        </div>
    )
}
