import { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputAdornment, TextField } from "@mui/material";
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
    if (!checkAge()) {
      setAgeDialog(true);
      return;
    }
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
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img 
          src="../../public/b3.png"
          alt="Imagem da Corretora"
          className="h-screen w-full object-cover" />
      </div>
      <div className="flex flex-col gap-6  m-10 w-full md:w-1/2 lg:w-1/3">
        {isCadastro ? (
          <>
          <Dialog open={passwordMismatchDialog} onClose={() => setPasswordMismatchDialog(false)}>
        <DialogTitle>Acesso Restrito</DialogTitle>
        <DialogContent>
          <DialogContentText>
            As senhas informadas não coincidem.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAgeDialog(false)} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={ageDialog} onClose={() => setAgeDialog(false)}>
        <DialogTitle>Acesso Restrito</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Desculpe, mas você deve ter pelo menos 18 anos para se registrar.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAgeDialog(false)} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
            
            {error ? <p className="text-red-400">{error}</p> : null}
            <TextField
        required
        id="nome"
        label="nome"
        name="nome"
        fullWidth
        value={formData.nome}
        onChange={handleChange}
      />
            <TextField
        required
        id="email"
        label="Email"
        name="email"
        fullWidth
        value={formData.email}
        onChange={handleChange}
      />
            <TextField
        
              value={formData.cpf}
              onChange={handleCPFChange}
              variant="outlined"
              label="CPF"
              fullWidth
            />
            <TextField
        
        value={formData.phone}
        onChange={handlePhoneChange}
        variant="outlined"
        label="Telefone"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">+55</InputAdornment>
          )
        }}
      />
            <TextField
              required
              label="Senha"
              type="password"
              value={senhaCadastro}
              onChange={(e) => setSenhaCadastro(e.target.value)}
            />
            <TextField
              required
              label="Confirmar senha"
              type="password"
              value={senhaCadastro}
              onChange={(e) => setSenhaCadastro(e.target.value)}
            />
            <button onClick={() => PostUsuario(emailCadastro, senhaCadastro)} className={`
              w-full bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-black
              hover:text-slate-300
              text-white rounded-lg px-4 py-3 mt-6
            `}>
              Cadastrar
            </button>
            <button onClick={() => setIsCadastro(false)} className={`
              w-full bg-gray-500 hover:bg-gray-700
              text-white rounded-lg px-4 py-3 mt-4
            `}>
              Já tem uma conta? Faça login
            </button>
          </>
        ) : (
          <>
          

            <h1 className={`text-3xl flex justify-center text-blue-600 font-bold mb-5`}>
              Entre com a Sua Conta
            </h1>
            {error ? <p className="text-red-400">{error}</p> : null}
            <TextField
              required
              label="Email"
              type="email"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <TextField
              required
              label="Senha"
              type="password"
              value={senhaLogin}
              onChange={(e) => setSenhaLogin(e.target.value)}
            />
            <button onClick={() => login("ok")} className={`
              w-full bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-black
              hover:text-slate-300
              text-white rounded-lg px-4 py-3 mt-6
            `}>
              Entrar
            </button>
            <button onClick={() => setIsCadastro(true)} className={`
              w-full bg-gray-500 hover:bg-gray-700
              text-white rounded-lg px-4 py-3 mt-4
            `}>
              Não tem uma conta? Cadastre-se
            </button>
          </>
        )}
      </div>
    </div>
  );
}
