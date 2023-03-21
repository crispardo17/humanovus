import humaLogo from '../../assets/logos/humaLogo.png';
import "./navbarHojaDeVida.css"

const NavbarHojaDeVida = () => {
  return (
    <div className="navbarHojaDeVida" >
      <div className="wrapperHojaDeVida">
        <div className="itemsHojaDeVida">
        <img className="humaLogo" src={humaLogo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NavbarHojaDeVida