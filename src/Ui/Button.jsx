export default function Button({
  children,
  type = "button",
  onClick = () => {},
}) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
}
