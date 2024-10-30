import "./LeadParagraph.css";

interface Props {
  children: React.ReactNode;
}

const LeadParagraph = ({ children }: Props) => {
  return <p className="lead-paragraph mb-5">{children}</p>;
};

export default LeadParagraph;
