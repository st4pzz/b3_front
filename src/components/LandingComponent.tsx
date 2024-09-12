import LogoB3 from "./LogoB3";

export default function LandingComponent() {
  return (
    <div className="flex flex-col  w-screen min-h-screen overflow-x-hidden ">
        <div className="flex h-16 bg-azul-b3 flex-row items-center">

            <div className="flex items-center gap-8  flex-row ml-2 justify-start">
            

                <LogoB3 />

                <p className="tracking-wide text-xl font-bold text-white"> Bora Investir </p>
            </div>

            <div className="flex flex-row justify-center mx-auto gap-28">
                <button className="text-neutral-100 font-medium">
                Notícias

                </button>
                <button className="text-neutral-100 font-medium">
                    Colunistas
                    
                </button>
                <button className="text-neutral-100 font-medium">
                    Objetivos Financeiros

                    
                </button>
                <button className="text-neutral-100 font-medium">
                    Tipos de investimentos

                    
                </button>
                <button className="text-amarelo-landing font-medium">
                    Para você

                    
                </button>


            </div>


        </div>

        <div className="flex relative flex-row justify-around bg-white h-auto">

            <div className="flex  flex-col z-40 ml-48 mr-40 mt-40  gap-20 ">
            
                        <h1 className="text-6xl text-azul-sem-login-landing font-semibold">
                            Seu <span className="text-azul-b3">guia<br /> financeiro</span> da <span className="text-amarelo-landing">B3</span>!
                        </h1>



                <p className="text-azul-loren text-lg font-medium">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>


                <div className="flex flex-row gap-10">
                    <button className="bg-azul-login-landing w-44 h-8 text-white font-semibold text-sm justify-center items-center border rounded-sm">
                        Login

                    </button>

                    <button className="bg-transparent w-44 h-8 text-azul-sem-login-landing font-semibold text-sm border-azul-sem-login-landing justify-center items-center  border-2 rounded-sm">
                        Acessar sem Login

                    </button>


                </div>


            </div>



            <img className=" mr-12 mt-20 z-40" src="/b3-landing.png" alt="" />

            <img className=" z-0 absolute top-0 right-[-300px]" src="/landing-bg-figure.png" alt="" />



        </div>

        

        <div className="flex flex-row mt-80  justify-between ">


            <div className="flex flex-col m-24 gap-16">

                <h1 className="text-azul-b3 text-4xl font-semibold ">
                    Educativo, Interativo e Confiavel
                </h1>

                <p className="text-azul-loren text-base font-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>


                <div className="flex flex-row gap-2">

                    <div className="flex flex-col gap-2">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>

                <h1 className="text-azul-sem-login-landing text-base font-semibold "> Tire suas dúvidas sobre finanças</h1>

                <p className="text-azul-loren text-base font-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                </p>



                    </div>
                    <div className="flex flex-col gap-2">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>

                <h1 className="text-azul-sem-login-landing text-base font-semibold "> O chat da maior Bolsa LATAM</h1>

                <p className="text-azul-loren text-base font-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                </p>



                    </div>


                

                </div>

            </div>


            <img className="mb-10" src="/landing-graph.png" alt="" />



        </div>

        <div className="flex flex-col gap-14 py-6  h-auto bg-azul-claro-landing mt-5 items-center justify-center relative">

                <h1 className="text-2xl tracking-wider font-semibold text-azul-fontes-landing">

                    Fontes das informações
                </h1>

                <h1 className="text-5xl font-semibold ">
                    Finanças para todos!
                </h1>

                <p className="text-azul-loren-2 w-1/3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                </p>
                <button className="text-white border items-center justify-center text-base font-normal py-1 rounded w-52 h-82 bg-azul-login-landing ">

                    Purchase Now

                </button>




            



        </div>



        <div className="flex  justify-end h-28 bg-azul-b3 w-full ">

        </div>
     
    </div>
  );
}