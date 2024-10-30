import "./AppSection.css";

interface Props {
  children: React.ReactNode;
}

const AppSection = ({ children }: Props) => {
  return <div className="section">{children}</div>;
};

export default AppSection;
