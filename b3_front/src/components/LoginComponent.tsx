import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import dayjs, { Dayjs } from 'dayjs';

interface FormData {
  email: string;
  nome: string;
  password: string;
  cpf: string;
  rg: string;
  phone: string;
  birth_date: string | null;
}

export default function LoginPage() {
  const cookies = new Cookies();
  const [nome, setNome] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
  const [error, setError] = useState("");
  const [isCadastro, setIsCadastro] = useState(false);
  const [passwordMismatchDialog, setPasswordMismatchDialog] = useState(false);
  const [birthDate, setBirthDate] = useState<Dayjs | null>(dayjs());
  const navigate = useNavigate();
  const [ageDialog, setAgeDialog] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    email: '',
    nome: '',
    password: '',
    cpf: '',
    rg: '',
    phone: '',
    birth_date: null, 
  });

  async function login(token: string) {
    cookies.set("jwt_authorization", token);
    navigate("/Chat");
  }

  async function PostUsuario(email: string, senha: string) {
    if (!email || !senha) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    const response = await fetch("http://54.71.150.144:8082/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
        password: senha,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return login(data.token);
    } else {
      console.error("Falha na requisição:", response.status, response.statusText);
      setError("Erro ao fazer login. Verifique suas credenciais.");
      return null;
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handlePhoneChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value.replace(/\D/g, ''); 
    value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); 
    value = value.substring(0, 15); 
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const checkAge = () => {
    const now = dayjs();
    const birthDateDayjs = dayjs(formData.birth_date);  
    
    const age = now.diff(birthDateDayjs, 'year');
    
    return age >= 18;
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      birth_date: birthDate ? birthDate.format('YYYY-MM-DD') : null
    }));
  }, [birthDate]);

  const handleCPFChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value.replace(/\D/g, ''); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2'); 
    value = value.substring(0, 14); 
    setFormData(prev => ({ ...prev, cpf: value }));
  };

  return (
    <div className="flex h-screen items-center justify-center bg-azul-b3-claro">
      <div className="flex w-full max-w-md bg-azul-form shadow-lg rounded-lg p-6">
        <div className="w-full">
        <div className=" flex justify-center">
    <p className="text-4xl text-gray-200 font-mono">[B]</p>
    <div className="flex flex-col h-full justify-start">
      <p className="text-sm text-gray-200 font-mono">3</p>
    </div>
  </div>
          {isCadastro ? (
            <>
              <h2 className="text-center text-2xl font-bold mb-6 text-neutral-300">Cadastro</h2>
              {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
             
            </>
          ) : (
            <>
              <h2 className="text-center text-2xl font-semibold mb-6 text-neutral-300">BEM-VINDO DE VOLTA</h2>
              <h3 className="text-center text-base font-normal mb-6 text-neutral-300">Para acessar sua conta, entre com as informações abaixo</h3>
              {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
              <div className="flex gap-4 mx-20 flex-col">  
                <div className="flex flex-col">

              <h3 className="text-neutral-300 text-base font-normal">Email</h3>
              <input type="text" placeholder="abc@example.com" required  className="rounded-md pl-2  focus:border-transparent focus:outline-none py-1"/>
              </div>
              <div className="flex flex-col">
              <h3 className="text-neutral-300 text-base font-normal">Senha</h3>
              <input type="password" required  className="rounded-md pl-2 focus:border-transparent focus:outline-none py-1"/>
              </div>
              <button className="bg-amarelo-b3 py-1 rounded-md mt-6">
                Login
              </button>
              <div className="flex flex-row justify-center items-center gap-3">

              <img src="/Search social.png" className="w-6 h-6 "/>

              <button className="text-neutral-300 hover:text-amarelo-b3 text-base font-normal">Sign in with Google</button>
              </div>
              <div className="flex flex-row gap-4">
              <h3 className="text-neutral-300 text-base font-normal">Ainda não tem uma conta?</h3>
              <button className="text-amarelo-b3 hover:text-gray-400">
                Sign Up for free
              </button>

              </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
