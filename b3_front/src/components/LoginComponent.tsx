import { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

export default function LoginPage() {
  const cookies = new Cookies();
  const [name, setName] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
  const [error, setError] = useState("");
  const [isCadastro, setIsCadastro] = useState(false); // Estado para controlar a exibição
  const navigate = useNavigate();

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
            <h1 className={`text-3xl flex justify-center text-blue-600 font-bold mb-5`}>
              Cadastre-se
            </h1>
            {error ? <p className="text-red-400">{error}</p> : null}
            <TextField
              required
              label="Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              label="Email"
              type="email"
              value={emailCadastro}
              onChange={(e) => setEmailCadastro(e.target.value)}
            />
            <TextField
              required
              label="Senha"
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
