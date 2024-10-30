interface Props {
  children: React.ReactNode;
  disablePadding?: boolean;
}

const AppContainer = ({ children, disablePadding = false }: Props) => {
  return (
    <div className={`container app-styles ${disablePadding ? "" : "py-1"}`}>
      {children}
    </div>
  );
};

export default AppContainer;
