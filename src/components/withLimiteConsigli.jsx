import { useConsigli } from "../context/ConsigliContext.jsx";

// Higher Order Component: prende i consigli dal context e
// passa al componente avvolto solo i primi `max`
export default function withLimiteConsigli(Componente, max) {
  function ConLimite(props) {
    const { consigli } = useConsigli();
    const visibili = consigli.slice(0, max);
    const nascosti = consigli.length - visibili.length;

    return <Componente {...props} consigli={visibili} nascosti={nascosti} max={max} />;
  }

  ConLimite.displayName = `withLimiteConsigli(${Componente.displayName || Componente.name})`;
  return ConLimite;
}
