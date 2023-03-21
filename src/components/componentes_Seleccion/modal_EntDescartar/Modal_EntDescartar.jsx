import "./modal_EntDescartar.css"
import React, { useState } from "react";

const Modal_EntDescartar = ({ isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-fondoEntDescartar">
            <div className="modal-fondo1EntDescartar">
                <div className="div-imagenEntDescartar">
                  <div className="imagenOjoEntDescartar"></div>
                </div>
                <h3 className="nombreModalEntDescartar">DESCRIPCIÓN DE DESCARTE:</h3>
            </div>
            <div className="modal-fondo2EntDescartar">
                <div className="grid-modalEntDescartar">
                    <div className="grid-modal1EntDescartar" >
                      <label>TIPO DE DESCARTE:</label>
                        <select  className="selectModalEntDescartar" name="campaña" id="campaña" required>
                          <option value="">Selecciona:</option>
                          <option value="1">No cuenta con las vacantes</option>
                          <option value="2">Vacantes completas</option>
                        </select>
                    </div>
                    <div className="grid-modal2EntDescartar">
                       <label>OBSERVACIONES</label>
                          <textarea className="observacionModalEntDescartar" name="observacionModal" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="grid-modal3EntDescartar">
                        <button className="btnGuardarModalEntDescartar">Guardar</button>
                    </div>
                    <div className="grid-modal4EntDescartar">
                        <button className="btnCancelarModalEntDescartar" onClick={closeModal}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Modal_EntDescartar

