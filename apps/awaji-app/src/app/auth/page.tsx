// pages/auth/signin.tsx
'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/router';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await signIn('email-password', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.error('Failed to sign in:', result.error);
    } else {
      //   router.push('/');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
