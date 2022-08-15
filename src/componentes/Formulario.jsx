import React, { useState } from "react"
import "../hojas-de-estilo/formulario.css"
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState("");

  const manejarCambio = (evento) => {
    setInput(evento.target.value);
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    props.onSubmit(tareaNueva)
  };

  return (
    <form class="tarea-formulario"
      onSubmit={manejarEnvio} >
      <input className="tarea-input"
        type="text"
        placeholder="ingrese una nueva tarea.."
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton" ><b>Agregar Tarea</b></button>
    </form>
  );
}
export default TareaFormulario;