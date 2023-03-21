import "./modal_SeguridadSocial.css"
import React, { useState } from "react";

const Modal_SeguridadSocial = ({ isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-fondoSeguridadSocial">
            <div className="modal-fondo1SeguridadSocial">
                <div className="div-imagenSeguridadSocial">
                  <div className="imagenOjoSeguridadSocial"></div>
                </div>
                <h3 className="nombreModalSeguridadSocial">INFORMACION DE SEGURIDAD SOCIAL:</h3>
            </div>
            <div className="modal-fondo2SeguridadSocial">
                <div className="grid-modalSeguridadSocial">
                    <div className="grid-modal1SeguridadSocial" >
                      <label>EPS:</label>
                        <div className="divSelects">
                        <select  className="selectModalSeguridadSocial" name="campaña" id="campaña" required>
                          <option value="">Selecciona:</option>
                          <option value="1">SI</option>
                          <option value="2">NO</option>
                        </select>
                        <button className="segSocialButton" id="segSocialButton">VER</button>
                        </div>
                    </div>
                    <div className="grid-modal2SeguridadSocial">
                        <label>AFP:</label>
                            <div className="divSelects">
                                <select  className="selectModalSeguridadSocial" name="campaña" id="campaña" required>
                                    <option value="">Selecciona:</option>
                                    <option value="1">SI</option>
                                    <option value="2">NO</option>
                                </select>
                                <button className="segSocialButton" id="segSocialButton">VER</button>
                            </div>
                    </div>
                    <div className="grid-modal3SeguridadSocial">
                        <button className="btnGuardarModalSeguridadSocial">Guardar</button>
                    </div>
                    <div className="grid-modal4SeguridadSocial">
                        <button className="btnCancelarModalSeguridadSocial" onClick={closeModal}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Modal_SeguridadSocial

