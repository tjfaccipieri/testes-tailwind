import { RiLockPasswordFill, RiUserFill } from "react-icons/ri";
import login from "/login.svg";
import axios from "axios";
import { useEffect, useState } from "react";

function Login() {

  const [users, setUsers] = useState([])

  async function getUser(){
    const resp = await axios.get('http://localhost:1337/api/cadastros')
    setUsers(resp.data.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  console.log(users);

  return (
    <div className="flex">
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-8 md:w-1/2 md:px-0">
        <h2 className="text-3xl font-bold uppercase">Logar</h2>
        <form action="" className="w-full space-y-4 md:w-2/3">
          <label className="input input-bordered flex items-center gap-2">
            <RiUserFill />
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label
            className="input input-bordered flex items-center gap-2"
            htmlFor="pass"
          >
            <RiLockPasswordFill />
            <input
              id="pass"
              type="password"
              className="grow"
              placeholder="Password"
            />
          </label>
          <div className="space-y-1">
            <button className="btn btn-outline btn-success w-full">
              Conectar
            </button>
            <div className="divider"></div>
            <button className="btn btn-outline btn-info w-full">
              Cadastrar
            </button>
          </div>
        </form>

        {users.map(item => (
          <p>{item.attributes.nome}</p>
        ))}
      </div>
      <div className="hidden w-1/2 items-center justify-center md:flex">
        <img src={login} alt="" className="w-2/3" />
      </div>
    </div>
  );
}

export default Login;
