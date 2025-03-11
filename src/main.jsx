import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"; // Importa Provider da react-redux
import store from "./store"; // Importa lo store correttamente

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
)