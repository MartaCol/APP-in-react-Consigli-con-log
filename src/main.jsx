import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// StrictMode non è usato: in sviluppo esegue due volte gli effect
// e duplicherebbe i log del ciclo di vita in console.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
