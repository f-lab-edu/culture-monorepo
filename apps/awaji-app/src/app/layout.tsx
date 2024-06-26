import { ReactQueryProvider } from "../../utils/react-query";
import "../styles/layout.scss";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ko-KR">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
};
export default RootLayout;
