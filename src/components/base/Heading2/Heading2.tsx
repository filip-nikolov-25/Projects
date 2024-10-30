import "./Heading2.css";

interface Props {
  children: React.ReactNode;
}

const Heading2 = ({ children }: Props) => {
  return <h1 className="heading-2 text-white mb-5">{children}</h1>;
};

export default Heading2;
