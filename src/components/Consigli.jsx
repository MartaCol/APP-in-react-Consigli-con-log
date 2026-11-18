import { useState } from "react";
import Card from "./Card.jsx";
import ConsiglioVisualizzato from "./ConsiglioVisualizzato.jsx";
import { useConsigli } from "../context/ConsigliContext.jsx";

// Pannello principale: aggiunta, estrazione e rimozione dei consigli
export default function Consigli() {
  const {
    selezionato,
    visualizzazioni,
    aggiungiConsiglio,
    estraiConsiglio,
    rimuoviConsiglio,
  } = useConsigli();
  const [nuovo, setNuovo] = useState("");

  function gestisciInvio(e) {
    e.preventDefault();
    if (aggiungiConsiglio(nuovo)) setNuovo("");
  }

  return (
    <Card className="card-principale">
      <h1>
        Dopo una giornata di lavoro, cerca o inserisci le tue buone abitudini
        per rilassarti 🌙
      </h1>

      <form className="form-aggiungi" onSubmit={gestisciInvio}>
        <input
          type="text"
          placeholder="Aggiungi un consiglio"
          value={nuovo}
          onChange={(e) => setNuovo(e.target.value)}
        />
        <button type="submit">Aggiungi</button>
      </form>

      <button onClick={estraiConsiglio}>Mostra consiglio</button>

      <p className="contatore">Visualizzazioni totali: {visualizzazioni}</p>

      {selezionato && (
        <ConsiglioVisualizzato consiglio={selezionato} onRimuovi={rimuoviConsiglio} />
      )}
    </Card>
  );
}
