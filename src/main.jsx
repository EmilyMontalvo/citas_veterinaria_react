import React from 'react' //  Importa la api de react
import ReactDOM from 'react-dom/client' // Versión web de react
import App from './App.jsx' //Importa app.jsx
import './index.css' //aplica a todo el proyecto, tambi+en hay como definir por módulos

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
