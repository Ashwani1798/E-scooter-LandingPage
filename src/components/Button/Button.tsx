import stl from "./ButtonStyle.module.scss";

type ButtonProps = { btnText: string };

const Button = ({ btnText }: ButtonProps) => {
  return <div className={stl.button}>{btnText}</div>;
};

export default Button;
