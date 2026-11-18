import { useEffect } from "react";
import { useConsigli } from "../context/ConsigliContext.jsx";

// Mostra il consiglio estratto e ne registra in console il ciclo di vita
export default function ConsiglioVisualizzato({ consiglio, onRimuovi }) {
  const { giaMostrati } = useConsigli();

  // Ciclo di vita del componente: montaggio / smontaggio
  useEffect(() => {
    console.log("🟢 [Ciclo di vita] ConsiglioVisualizzato montato");
    return () => console.log("🔴 [Ciclo di vita] ConsiglioVisualizzato smontato");
  }, []);

  // Ogni nuova estrazione: log di visualizzazione, rilevamento ripetizioni e log di rimozione
  useEffect(() => {
    const { testo, estrazione } = consiglio;

    if (giaMostrati.current.has(testo)) {
      console.log(`🔁 Il consiglio "${testo}" è stato mostrato di nuovo (visualizzazione n. ${estrazione})`);
    } else {
      giaMostrati.current.add(testo);
      console.log(`👀 Consiglio mostrato per la prima volta: "${testo}" (visualizzazione n. ${estrazione})`);
    }

    // Cleanup: eseguito quando il consiglio viene sostituito o tolto dalla vista
    return () => console.log(`🗑️ Consiglio "${testo}" rimosso dalla vista`);
  }, [consiglio, giaMostrati]);

  return (
    <div className="consiglio-visualizzato">
      <p>👉 {consiglio.testo}</p>
      <button className="btn-rimuovi" onClick={onRimuovi}>
        Rimuovi
      </button>
    </div>
  );
}
