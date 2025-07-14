import { useState } from 'react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = '/dashboard';
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleLogin}
        className='bg-white p-8 rounded shadow-md w-full max-w-sm'
      >
        <h2 className='text-2xl font-semibold text-center mb-6 text-gray-800'>
          Login
        </h2>

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Email
        </label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:border-blue-500'
        />

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Senha
        </label>
        <input
          type='password'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-6 focus:outline-none focus:ring focus:border-blue-500'
        />

        <button
          type='submit'
          className='w-full bg-primary hover:bg-blue-700 text-white font-semibold py-2 rounded'
        >
          Login
        </button>
      </form>
    </div>
  );
}
