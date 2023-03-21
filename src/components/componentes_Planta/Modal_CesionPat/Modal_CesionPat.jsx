import "./modal_CesionPat.css"
import React, { useState } from "react";

const Modal_CesionPat = ({ isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-fondoCesionPat">
            <div className="modal-fondo1CesionPat">
                <div className="div-imagenCesionPat">
                  <div className="imagenOjoCesionPat"></div>
                </div>
                <h3 className="nombreModalCesionPat">CESION PATRONAL:</h3>
            </div>
            <div className="modal-fondo2CesionPat">
                <div className="grid-modalCesionPat">
                    <div className="grid-modal1CesionPat">
                       <label>EMPRESA:</label>
                       <select  className="selectModalCesionPat" name="campaña" id="campaña" required>
                          <option value="">Selecciona:</option>
                          <option value="1">GoPass</option>
                          <option value="2">Grupo Novus</option>
                        </select>
                    </div>
                    <div className="grid-modal2CesionPat">
                        <button className="btnAceptarModalCesionPat">Guardar</button>
                    </div>
                    <div className="grid-modal3CesionPat">
                        <button className="btnCancelarModalCesionPat" onClick={closeModal}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Modal_CesionPat

