import React from "react";
import ReactDOM from "react-dom";
// import App from "./App/index.js";
import "./index.css";

function App(props) {
  return (
    <h1>
      ¡{props.saludo}, {props.nombre}!
    </h1>
  );
}

// function withWhatever(WrappedComponent) {
//   return function TrueComponent(props) {
//     return (
//       <React.Fragment>
//         <WrappedComponent {...props} />
//         <p>Estamos acompañando al WrappedComponent</p>
//       </React.Fragment>
//     );
//   };
// }

function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function TrueComponent(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </React.Fragment>
      );
    };
  };
}

const AppWithSaludo = withSaludo(App)("Saludos");

ReactDOM.render(
  <AppWithSaludo nombre="Nath" />,
  //   <App saludo="Buenas" nombre="Nath" />,
  document.getElementById("root")
);
