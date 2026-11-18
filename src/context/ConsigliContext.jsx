import { createContext, useContext, useRef, useState } from "react";

const ConsigliContext = createContext(null);

// Lista iniziale di buone abitudini
const CONSIGLI_INIZIALI = [
  "Bere una tisana rilassante 🍵",
  "Fare una passeggiata serale 🚶",
  "Scrivere un diario della giornata 📖",
  "Fare stretching per rilassare i muscoli 🧘",
  "Preparare una cena leggera e sana 🥗",
  "Leggere un libro 📚",
  "Meditare 10 minuti per rilassarsi 🕯️",
];

// Provider: condivide lo stato dei consigli con tutti i componenti figli (children)
export function ConsigliProvider({ children }) {
  // Stato gestito con useState
  const [consigli, setConsigli] = useState(CONSIGLI_INIZIALI); // lista dei consigli
  const [selezionato, setSelezionato] = useState(null); // consiglio selezionato: { testo, estrazione }
  const [visualizzazioni, setVisualizzazioni] = useState(0); // contatore visualizzazioni totali

  // Memorizza i consigli già mostrati almeno una volta (serve a rilevare le ripetizioni)
  const giaMostrati = useRef(new Set());

  function aggiungiConsiglio(testo) {
    const pulito = testo.trim();
    if (!pulito) return false;

    const duplicato = consigli.some(
      (c) => c.toLowerCase() === pulito.toLowerCase()
    );
    if (duplicato) {
      console.warn(`⚠️ Il consiglio "${pulito}" esiste già e non è stato aggiunto.`);
      return false;
    }

    const nuovaLista = [...consigli, pulito];
    setConsigli(nuovaLista);
    console.log(`Nuovo consiglio aggiunto: "${pulito}"`);
    console.log("Consigli attuali:", nuovaLista);
    return true;
  }

  function estraiConsiglio() {
    if (consigli.length === 0) {
      console.log("Nessun consiglio disponibile da estrarre.");
      return;
    }

    const testo = consigli[Math.floor(Math.random() * consigli.length)];
    const totale = visualizzazioni + 1;

    // "estrazione" rende ogni visualizzazione unica, anche se esce lo stesso consiglio
    setSelezionato({ testo, estrazione: totale });
    setVisualizzazioni(totale);
    console.log(`Consiglio estratto: "${testo}"`);
    console.log(`Visualizzazioni totali: ${totale}`);
  }

  function rimuoviConsiglio() {
    if (!selezionato) return;

    const rimasti = consigli.filter((c) => c !== selezionato.testo);
    setConsigli(rimasti);
    setSelezionato(null);
    console.log(`Consiglio rimosso: "${selezionato.testo}"`);
    console.log("Consigli rimasti:", rimasti);
  }

  const valore = {
    consigli,
    selezionato,
    visualizzazioni,
    giaMostrati,
    aggiungiConsiglio,
    estraiConsiglio,
    rimuoviConsiglio,
  };

  return (
    <ConsigliContext.Provider value={valore}>{children}</ConsigliContext.Provider>
  );
}

// Hook di comodo per leggere il context
export function useConsigli() {
  const ctx = useContext(ConsigliContext);
  if (!ctx) throw new Error("useConsigli deve essere usato dentro <ConsigliProvider>");
  return ctx;
}
