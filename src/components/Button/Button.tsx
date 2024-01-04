interface ButtonProps {
  label: string;
}
const Button = ({ label }: ButtonProps) => {
  return (
    <button style={{ padding: "5px", backgroundColor: "red" }}>{label}</button>
  );
};

export default Button;
