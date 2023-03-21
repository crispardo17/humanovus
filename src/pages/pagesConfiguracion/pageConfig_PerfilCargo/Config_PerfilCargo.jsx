import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Tabla_EducacionPC from "../../../components/componentes_Configuracion/tablas_PerfilCargo/tablaEducacionPC/Tabla_EducacionPC"
import Tabla_Entrenamiento from "../../../components/componentes_Configuracion/tablas_PerfilCargo/tabla_Entrenamiento/Tabla_Entrenamiento"
import Tabla_ExamOcupacional from "../../../components/componentes_Configuracion/tablas_PerfilCargo/tabla_ExamOcupacionales/Tabla_ExamOcupacionales"
import Tabla_ExperienciaPC from "../../../components/componentes_Configuracion/tablas_PerfilCargo/tabla_ExperienciaPC/Tabla_ExperienciaPC"
import Tabla_HabilidadesPC from "../../../components/componentes_Configuracion/tablas_PerfilCargo/tabla_HabilidadesPC/Tabla_HabilidadesPC"
import Tabla_InfoComplementaria from "../../../components/componentes_Configuracion/tablas_PerfilCargo/tabla_InfoComplementaria/Tabla_InfoComplementaria"
import Tabla_NivelAutoridad from "../../../components/componentes_Configuracion/tablas_PerfilCargo/tabla_NivelAutoridad/Tabla_NivelAutoridad"
import Tabla_OtrosRequisitos from "../../../components/componentes_Configuracion/tablas_PerfilCargo/tabla_OtrosRequisitos/Tabla_OtrosRequisitos"
import Tabla_ProcesoSeleccion from "../../../components/componentes_Configuracion/tablas_PerfilCargo/tabla_ProcesoSeleccion/Tabla_ProcesoSeleccion"
import Tabla_RendicionCuentas from "../../../components/componentes_Configuracion/tablas_PerfilCargo/tabla_RendicionCuentas/Tabla_RendicionCuentas"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./config_PerfilCargo.css"

const Config_PerfilCargo = () => {
  return (
    <div className="Perfil_Cargo">
      <Sidebar/>
      <div className="perfil_CargoContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        {/* hay que ponerlo este div como form */}
        <div className="formPerfilCargo"  >
          <div className="tituloPerfilCargo">
            <div>
               <h2>PERFIL CARGO</h2>
            </div>
            <div className="imagenPuntosPerfilCargo">
            </div>   
          </div>
          <div>
            <br />
            <h5>Educacion</h5>
            <Tabla_EducacionPC/>
          </div>
          <div>
            <br />
            <h5>Experiencia</h5>
            <Tabla_ExperienciaPC/>
          </div>
          <div>
            <br />
            <h5>Habilidades</h5>
            <Tabla_HabilidadesPC/>
          </div>
          <div>
            <br />
            <h5>Otros Requisitos</h5>
            <Tabla_OtrosRequisitos/>
          </div>
          <div>
            <br />
            <h5>Información Complementaria</h5>
            <Tabla_InfoComplementaria/>
            <br />
            <Tabla_RendicionCuentas/>
            <br />
            <Tabla_NivelAutoridad/>
            <br />
            <Tabla_ProcesoSeleccion/>
          </div>
          <div>
            <br />
            <h5>Entrenamiento y Capacitación</h5>
            <Tabla_Entrenamiento/>
          </div>
          <div>
            <br />
            <h5>Examenes Ocupacionales</h5>
            <Tabla_ExamOcupacional/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Config_PerfilCargo