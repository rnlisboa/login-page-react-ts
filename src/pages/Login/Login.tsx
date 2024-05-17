import { useState } from 'react';
import { useLoginRequest } from './hooks/useAuthUser';
import { FaCircleInfo } from 'react-icons/fa6';
import { InputForm } from '../../components/InputForm';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const loginMutation = useLoginRequest();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(''); // Reseta o erro antes de tentar o login
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: ()=>{
          navigate("/profile")
        } ,
        onError: (error) => {
          setError('E-mail ou senha inválido(s)');
        },
        
      }
    );

  };

  return (
    <div className='h-screen flex justify-center items-center font-nunito'>
      <div className='border gap-y-8 py-10 px-6 rounded-[18px] shadow-sombra flex justify-center flex-col items-center w-[438px]' >
        <img className='w-[295px]' src="https://t3020915.p.clickup-attachments.com/t3020915/bf2d9f7a-af95-4206-bc81-0a8397fbb691/B2Bit%20Logo.png" alt="b2bit logo" />
        <form className='flex flex-col  gap-y-4' onSubmit={handleSubmit}>
          <InputForm.Root>
            <InputForm.Label htmlFor={'email'} label={'E-mail'} />
            <InputForm.Input
              type={'email'}
              id={'email'}
              placeholder={'@gmail.com'}
              value={email}
              setValue={setEmail} />
          </InputForm.Root>

          <InputForm.Root>
            <InputForm.Label htmlFor={'password'} label={'Password'} />
            <InputForm.Input
              type={'password'}
              id={'password'}
              placeholder={'********'}
              value={password}
              setValue={setPassword} />
          </InputForm.Root>

          {error && (
            <div className="flex gap-x-2 items-center text-red-600">
              <FaCircleInfo />
              <span>{error}</span>
            </div>
          )}
          <Button classes={['h-14', 'w-[100%]']} type='submit' value='Sign In'/>
        </form>
      </div>
    </div>
  );
}

export default Login;
