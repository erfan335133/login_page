interface Mobile {
  mobile: string;
}

const Code: React.FC<Mobile> = ({ mobile }) => {
  return <h1>{mobile}</h1>;
};
export default Code;
