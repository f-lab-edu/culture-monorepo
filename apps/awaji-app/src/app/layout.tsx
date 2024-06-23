import "../styles/layout.scss";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="container">{children} </div>
      </body>
    </html>
  );
};
export default RootLayout;
