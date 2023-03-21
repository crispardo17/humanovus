import "./modalAnular.css"
import React, { useState } from "react";

const modalAnular = ({ isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-fondoAnular">
            <div className="modal-fondo1Anular">
                <div className="div-imagenAnular">
                  <div className="imagenOjoAnular"></div>
                </div>
                <h3 className="nombreModalAnular">MOTIVO:</h3>
            </div>
            <div className="modal-fondo2Anular">
                <div className="grid-modalAnular">
                    <div className="grid-modal1Anular" >
                      <label>TIPO DE ANULACIÓN</label>
                        <select  className="selectModalAnular" name="campaña" id="campaña" required>
                          <option value="">Selecciona:</option>
                          <option value="1">No cuenta con las vacantes</option>
                          <option value="2">Vacantes completas</option>
                        </select>
                    </div>
                    <div className="grid-modal2Anular">
                       <label>OBSERVACIONES</label>
                          <textarea className="observacionModalAnular" name="observacionModal" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="grid-modal3Anular">
                        <button className="btnGuardarModalAnular">Guardar</button>
                    </div>
                    <div className="grid-modal4Anular">
                        <button className="btnCancelarModalAnular" onClick={closeModal}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default modalAnular

