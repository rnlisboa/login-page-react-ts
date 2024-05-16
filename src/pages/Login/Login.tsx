import { useState } from 'react';
import { useLoginRequest } from './hooks/useAuthUser';
import { FaCircleInfo } from 'react-icons/fa6';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLoginRequest()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate({email, password})
  };

  return (
    <div className='h-screen flex justify-center items-center font-nunito'>
    <div className='border gap-y-8 py-10 px-6 rounded-[18px] shadow-sombra flex justify-center flex-col items-center w-[438px]' > 
      <img className='w-[295px]' src="https://t3020915.p.clickup-attachments.com/t3020915/bf2d9f7a-af95-4206-bc81-0a8397fbb691/B2Bit%20Logo.png" alt="b2bit logo" />
      <form className='flex flex-col  gap-y-4' onSubmit={handleSubmit}> 
        <div className='flex w-[385px] flex-col gap-y-2'>
          <label className='font-bold' htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            className='border-none outline-none bg-input-bg text-input-text-color rounded-lg h-14 py-[18px] px-[20.25px] placeholder:text-input-text-color'
            value={email}
            placeholder='@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label className='font-bold' htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className='border-none outline-none bg-input-bg text-input-text-color rounded-lg h-14 py-[18px] px-[20.25px] placeholder:text-input-text-color'
            placeholder='********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-x-2 items-center text-red-600">
        <FaCircleInfo/>
        <span> E-mail ou senha inválido(s)</span>
        </div>
        <button className='bg-button-bg h-14 text-white rounded-lg' type="submit">Sign In</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
