export function ButtonComponent({ children, onClickprop }) {
  return (
    <button className="button" onClick={onClickprop}>
      {children}
    </button>
  );
}
