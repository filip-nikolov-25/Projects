import "./Heading1.css";

interface Props {
  children: React.ReactNode;
}

const Heading1 = ({ children }: Props) => {
  return <h1 className="heading-1 text-white mb-5">{children}</h1>;
};

export default Heading1;
