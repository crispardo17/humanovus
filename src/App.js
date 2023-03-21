import { BrowserRouter, Routes, Route, } from "react-router-dom";

// login
import Login from "./pages/login/login";

// Home
import Home from "./pages/home/Home";

// Requerimiento
import Requerimiento from "./pages/pagesRequerimientos/requerimiento/Requerimiento";
import Insertar from "./pages/pagesRequerimientos/insertar/Insertar";
import Modificar from "./pages/pagesRequerimientos/modificar/Modificar";
import Ver from "./pages/pagesRequerimientos/ver/Ver";
import GestionarReq from "./pages/pagesRequerimientos/gestionar/Gestionar";
import Poblar from "./pages/pagesRequerimientos/req_Gestionar/poblar/Poblar";
import Base from "./pages/pagesRequerimientos/req_Gestionar/base/Base";
import InsertarBase from "./pages/pagesRequerimientos/req_Gestionar/insertarBase/InsertarBase";
import ModificarBase from "./pages/pagesRequerimientos/req_Gestionar/modificarBase/ModificarBase";
import VerBase from "./pages/pagesRequerimientos/req_Gestionar/verBase/VerBase";
import Kpi from "./pages/pagesRequerimientos/req_Gestionar/kpi/Kpi";

// Seleccion
import Seleccion from "./pages/pagesSeleccion/seleccion/Seleccion";
import GestionarSel from "./pages/pagesSeleccion/pageSeleccion_Gestionar/sel_Gestionar/GestionarSel";
import PerfilCargo from "./pages/pagesSeleccion/pageSeleccion_PerfilCargo/Seleccion_PerfilCargo";
import Sel_GestContacto from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Contacto/seleccionGest_Contacto/Sel_gestContacto";
import Sel_GestContacto_Contactar from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Contacto/selGestContacto_Contactar/Sel_gestContacto_Contactar";
import Sel_GestContacto_Ver from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Contacto/selGestContacto_Ver/Sel_gestContacto_Ver";
import Sel_GestCitacion from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Citacion/seleccionGest_Citacion/Sel_gestCitacion";
import Sel_GestCitacion_Ver from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Citacion/selGestCitacion_Ver/Sel_gestCitacion_Ver";
import Sel_GestCitacion_Insertar from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Citacion/selGestCitacion_Insertar/Sel_gestCitacion_Insertar";
import Sel_GestCitacion_Reprogramar from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Citacion/selGestCitacion_Reprogramar/sel_gestCitacion_Reprogramar";
import Sel_GestEntrevista from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Entrevista/seleccionGest_Entrevista/Sel_gestEntrevista";
import Sel_GestEntrevistar from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Entrevista/seleccionGest_Entrevistar/Sel_gestEntrevistar";
import Sel_GestEntrevistaEditar from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Entrevista/selGestEntrevista_Editar/Sel_gestEntrevistaEditar";
import Sel_GestEntrevistaVer from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_Entrevista/selGestEntrevista_Ver/Sel_gestEntrevistaVer";
import Sel_GestReferenciaPers from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_ReferenciaPers/Sel_gestReferenciaPers";
import Sel_GestReferenciaLab from "./pages/pagesSeleccion/pageSeleccion_Gestionar/seleccionGestionar_ReferenciaLab/Sel_gestReferenciaLab";

// Contratacion
import Contratacion from "./pages/pagesContratacion/contratacion/Contratacion";
import ExamenesMed from "./pages/pagesContratacion/contratacion_ExamenesMed/pageContratacion_ExamenesMed/ExamenesMed";
import InsertExamenesMed from "./pages/pagesContratacion/contratacion_ExamenesMed/exaMedicos_Insertar/ExaMedicos_Insertar";
import ResultadoExamenesMed from "./pages/pagesContratacion/contratacion_ExamenesMed/exaMedicos_Resultado/ExaMedicos_Resultado";
import Afiliacion from "./pages/pagesContratacion/contratacion_Afiliaciones/Afiliaciones";
import Documentos from "./pages/pagesContratacion/contratacion_Documentos/Documentos";
import Contratar from "./pages/pagesContratacion/contratacion_Contratar/Contratar";
import ContratacionVer from "./pages/pagesContratacion/contratacion_Ver/Contratacion_Ver";

// Planta
import Planta from "./pages/pagesPlanta/planta/Planta";
import Activos from "./pages/pagesPlanta/activos_Planta/Activos_Planta";
import Ver_Activos from "./pages/pagesPlanta/ver_Activo/Ver_Activo";
import ModificarActivos from "./pages/pagesPlanta/modificar_ActPlanta/Modificar_ActPlanta";
import Inactivos from "./pages/pagesPlanta/inactivos_Planta/Inactivos_Planta";
import Ver_inactivos from "./pages/pagesPlanta/ver_Inactivo/Ver_Inactivo";

// Configuracion
import Configuracion from "./pages/pagesConfiguracion/configuracion/Configuracion";
import NuevoCargo from "./pages/pagesConfiguracion/pageConfig_NuevoCargo/Config_NuevoCargo";
import NuevaCampaña from "./pages/pagesConfiguracion/pageConfig_NuevaCampaña/Config_NuevaCampaña";
import Perfilcargo from "./pages/pagesConfiguracion/pageConfig_PerfilCargo/Config_PerfilCargo";

// Calendario
import Calendario from "./pages/calendario/Calendario";

// Hoja de vida 
import HojaDeVida from "./pages/pageHojaDeVida/HojaDeVida";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />}/>
          <Route path="home" element={<Home />}/>
          <Route element={<HojaDeVida />}/>
          <Route path="calendario" element={<Calendario />}/>
          <Route path="requerimiento">
            <Route index element={<Requerimiento />}/>
            <Route path="insertar" element={<Insertar />}/>
            <Route path="modificar" element={<Modificar />}/>
            <Route path="ver" element={<Ver />}/>
            <Route path="gestionar" element={<GestionarReq />}/>
            <Route path="gestionar/poblar" element={<Poblar />}/>
            <Route path="gestionar/base" element={<Base />}/>
            <Route path="gestionar/base/insertar" element={<InsertarBase />}/>
            <Route path="gestionar/base/modificar" element={<ModificarBase />}/>
            <Route path="gestionar/base/ver" element={<VerBase />}/>
            <Route path="gestionar/kpi" element={<Kpi />}/>
          </Route>
          <Route path="seleccion">
            <Route index element={<Seleccion />}/>
            <Route path="gestionar" element={<GestionarSel />}/>
            <Route path="gestionar/contacto" element={<Sel_GestContacto />}/>
            <Route path="gestionar/contacto/contactar" element={<Sel_GestContacto_Contactar />}/>
            <Route path="gestionar/contacto/ver" element={<Sel_GestContacto_Ver />}/>
            <Route path="gestionar/citacion" element={<Sel_GestCitacion />}/>
            <Route path="gestionar/citacion/ver" element={<Sel_GestCitacion_Ver />}/>
            <Route path="gestionar/citacion/insertar" element={<Sel_GestCitacion_Insertar />}/>
            <Route path="gestionar/citacion/reprogramar" element={<Sel_GestCitacion_Reprogramar />}/>
            <Route path="gestionar/entrevista" element={<Sel_GestEntrevista />}/>
            <Route path="gestionar/entrevista/entrevistar" element={<Sel_GestEntrevistar />}/>
            <Route path="gestionar/entrevista/editar" element={<Sel_GestEntrevistaEditar />}/>
            <Route path="gestionar/entrevista/ver" element={<Sel_GestEntrevistaVer />}/>
            <Route path="gestionar/referencia_personal" element={<Sel_GestReferenciaPers />}/>
            <Route path="gestionar/referencia_Laboral" element={<Sel_GestReferenciaLab />}/>
            <Route path="perfil_cargo" element={<PerfilCargo />}/>
          </Route>
          <Route path="contratacion">
            <Route index element={<Contratacion />}/>
            <Route path="examenes_Medicos" element={<ExamenesMed />}/>
            <Route path="examenes_Medicos/insertar" element={<InsertExamenesMed />}/>
            <Route path="examenes_Medicos/resultado" element={<ResultadoExamenesMed />}/>
            <Route path="afiliaciones" element={<Afiliacion />}/>
            <Route path="documentos" element={<Documentos />}/>
            <Route path="contratar" element={<Contratar />}/>
            <Route path="ver" element={<ContratacionVer />}/>
          </Route>
          <Route path="planta">
            <Route index element={<Planta />}/>
            <Route path="activos" element={<Activos />}/>
            <Route path="activos/ver" element={<Ver_Activos />}/>
            <Route path="activos/modificar" element={<ModificarActivos />}/>
            <Route path="inactivos" element={<Inactivos />}/>
            <Route path="inactivos/ver" element={<Ver_inactivos />}/>
          </Route>
          <Route path="configuracion">
            <Route index element={<Configuracion />}/>
            <Route path="nueva_campaña" element={<NuevaCampaña />}/>
            <Route path="nuevo_cargo" element={<NuevoCargo />}/>
            <Route path="perfil_Cargo" element={<Perfilcargo />}/>
          </Route>
          <Route path="hojaDeVida">
            <Route index element={<HojaDeVida />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
