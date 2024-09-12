import Layout from "../Layout"
import ResultadoQuizComponent from "../components/ResultadoQuizComponent"


interface ResultadoQuizProps {
    resultado : number;
}


export default function ResultadoQuizPage (props: ResultadoQuizProps) {




    return (


        <Layout texto={null}>
            <ResultadoQuizComponent resultado={props.resultado} />
        </Layout>   


    )
}