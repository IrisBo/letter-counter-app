
interface HeaderProps {
  title: string;
  subTitle: string;
}

export function Header(props: HeaderProps) {
  const { title, subTitle } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{subTitle}</h3><img src="\src\assets\baby elephant.jpg"
        width="160px" 
        height="140px" />

     
    
    </div>
  );
}
