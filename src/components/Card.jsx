// Contenitore generico: grazie alla prop children può ospitare qualsiasi contenuto
export default function Card({ className = "", children }) {
  return <div className={`card ${className}`}>{children}</div>;
}
