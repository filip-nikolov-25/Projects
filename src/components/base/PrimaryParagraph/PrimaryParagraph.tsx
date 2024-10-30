import "./PrimaryParagraph.css";

interface Props {
  children: React.ReactNode;
}

const PrimaryParagraph = ({ children }: Props) => {
  return <p className="primary-paragraph mb-5">{children}</p>;
};

export default PrimaryParagraph;
