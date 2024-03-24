import { RiLockPasswordFill, RiUserFill } from 'react-icons/ri';
import login from '/login.svg'

function Login() {
  return (
    <div className="flex">
      <div className="w-full px-8 md:px-0 md:w-1/2 flex justify-center items-center min-h-screen flex-col gap-8">
        <h2 className="text-3xl font-bold uppercase">Logar</h2>
        <form action="" className="space-y-4 w-full md:w-2/3">
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
      </div>
      <div className="w-1/2 justify-center items-center hidden md:flex">
        <img src={login} alt="" className='w-2/3' />
      </div>
    </div>
  );
}

export default Login;
