import React from "react"
import "../hojas-de-estilo/tarea.css"
import { AiOutlineCloseSquare } from "react-icons/ai";

function Tarea({ id, completarTarea, eliminarTarea, texto, completada }) {
  return (
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div className="tarea-texto"
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseSquare className="tarea-icono"
        />
      </div>
    </div>
  );
}
export default Tarea