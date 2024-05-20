import { useState } from 'react';
import logoB2bit from "../../assets/B2Bit Logo.png";
import { useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import { useLoginRequest } from './hooks/useAuthUser';
import { FaCircleInfo, FaEye, FaEyeSlash } from 'react-icons/fa6'; 
import { InputForm } from '../../components/InputForm';
import Button from '../../components/Button';

interface LoginFormValues {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const { mutate, isPending, isError, data } = useLoginRequest();
  const [showPassword, setShowPassword] = useState(false); 
  const initialValues: LoginFormValues = { email: '', password: '' };
  console.log(data)
  const validate = (values: LoginFormValues) => {
    const errors: Partial<LoginFormValues> = {};
    if (!values.email) {
      errors.email = 'E-mail é obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Endereço de e-mail inválido';
    }
    if (!values.password) {
      errors.password = 'Senha é obrigatória';
    }
    return errors;
  };

  return (
    <div className='h-screen flex justify-center items-center font-nunito'>
      <div className='border gap-y-8 py-10 px-6 rounded-[18px] shadow-sombra flex justify-center flex-col items-center w-[438px]'>
        <img
          className='w-[295px]'
          src={logoB2bit}
          alt='b2bit logo'
        />
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(
            values: LoginFormValues,
            { setErrors }: FormikHelpers<LoginFormValues>
          ) => {
            mutate(
              { email: values.email, password: values.password },
              {
                onSuccess: () => {
                  navigate('/profile');
                },
                onError: () => {
                  setErrors({ email: 'E-mail ou senha inválido(s)' });
                },
              }
            );
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
              <InputForm.Root>
                <InputForm.Label htmlFor='email' label='E-mail' />
                <InputForm.Input
                  type='email'
                  id='email'
                  placeholder='@gmail.com'
                  classes={'rounded-lg'}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputForm.Root>

              <InputForm.Root>
                <InputForm.Label htmlFor='password' label='Password' />
                <div className='w-[100%] flex'>
                  <InputForm.Input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    placeholder='********'
                    classes={'w-[100%] rounded-tl-lg rounded-bl-lg'}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div
                    className='rounded-tr-lg rounded-br-lg inset-y-0 right-0 pr-3 flex items-center cursor-pointer w-[10%] bg-input-bg'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />} 
                  </div>
                </div>
              </InputForm.Root>

              {isError && (
                <div className='flex gap-x-2 items-center text-red-600'>
                  <FaCircleInfo />
                  <span>E-mail e/ou senha incorreto(s)</span>
                </div>
              )}

              <Button
                classes={['h-14', 'w-[100%]']}
                type='submit'
                value={isPending ? 'Aguarde...' : 'Sign In'}
                disabled={isPending}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
