import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Productos from './Productos';
import Acerca from './Acerca';
import Contacto from './Contacto';
import CrearC from './CrearC';
import InicioS from './InicioS';
import Empresas from './Empresas';
import Vacante from './Vacante';
import Formulario from './Componentes/Formulario';
import DatosR from './DatosR';
import Solicitudes from './Solicitudes';
import BotonesP from './Componentes/BotonesP';
import FormVac from './Componentes/FormVac';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import FormEdu from './Componentes/FormEdu';
import FormSueldo from './Componentes/FormSueldo';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={App} />
    <Route path="/Productos" component={Productos} />
    <Route path="/Acerca" component={Acerca} />
    <Route path="/Contacto" component={Contacto} />
    <Route path="/CrearC" component={CrearC} />
    <Route path="/InicioS" component={InicioS} />
    <Route path="/Empresas" component={Empresas} />
    <Route path="/Vacante" component={Vacante} />
    <Route path="/Formulario" component={Formulario} />
    <Route path="/DatosR" component={DatosR} />
    <Route path="/BotonesP" component={BotonesP} />
    <Route path="/FormVac" component={FormVac} />
    <Route path="/FormEdu" component={FormEdu} />
    <Route path="/FormSueldo" component={FormSueldo} />
    <Route path="/Solicitudes" component={Solicitudes} />
    
  </Switch>
  </BrowserRouter>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();