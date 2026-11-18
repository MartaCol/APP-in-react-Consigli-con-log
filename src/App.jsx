import { ConsigliProvider } from "./context/ConsigliContext.jsx";
import Consigli from "./components/Consigli.jsx";
import ListaConsigli from "./components/ListaConsigli.jsx";
import withLimiteConsigli from "./components/withLimiteConsigli.jsx";

// Numero massimo di consigli mostrati nella lista
const MAX_CONSIGLI = 8;
const ListaLimitata = withLimiteConsigli(ListaConsigli, MAX_CONSIGLI);

export default function App() {
  return (
    <ConsigliProvider>
      <div className="app">
        <Consigli />
        <ListaLimitata />
      </div>
    </ConsigliProvider>
  );
}
