import Card from "./Card.jsx";

// Visualizza la lista dei consigli (già limitata dall'HOC withLimiteConsigli)
export default function ListaConsigli({ consigli, nascosti = 0, max }) {
  return (
    <Card className="card-lista">
      {consigli.length === 0 && <p className="vuoto">Nessun consiglio in lista.</p>}

      {consigli.map((consiglio) => (
        <div className="consiglio" key={consiglio}>
          {consiglio}
        </div>
      ))}

      {nascosti > 0 && (
        <p className="nascosti">
          Limite di {max} consigli visibili: altri {nascosti} nascosti
        </p>
      )}
    </Card>
  );
}
