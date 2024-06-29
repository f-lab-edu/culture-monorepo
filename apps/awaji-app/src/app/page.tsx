'use client';
// import { useSession, signIn, signOut } from 'next-auth/react';

import { Header } from '@packages/ui/header';
import '@/styles/_variable.scss';

const Home: React.FC = () => {
  // const { data: session } = useSession();

  return (
    <div className={'container'}>
      {/* {session ? <div>로그인</div> : <div>로그인 ㄴ</div>} */}

      <Header textColor={''} bgColor={''} title={'컬러를 넣어보쟝'} />
    </div>
  );
};

export default Home;
