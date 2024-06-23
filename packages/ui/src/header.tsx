interface IHeaderProps {
  title: string;
  bgColor: string;
  textColor: string;
}
export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
