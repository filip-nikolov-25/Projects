import "./SecondaryParagraph.css";

interface Props {
  children: React.ReactNode;
}

const SecondaryParagraph = ({ children }: Props) => {
  return <p className="secondary-paragraph text-white mb-5">{children}</p>;
};

export default SecondaryParagraph;
