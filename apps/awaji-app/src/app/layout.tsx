import { ReactQueryProvider } from '../../utils/react-query';
import '../styles/layout.scss';
import AuthProvider from './api/auth/AuthProvider';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ko-KR">
      <body>
        <AuthProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
