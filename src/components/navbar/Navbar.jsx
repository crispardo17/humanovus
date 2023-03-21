import "./navbar.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" >
      <div className="wrapper">
        <Link className="linkNavbar" to="/calendario" >
            <button className="btnNavbar">
            <CalendarMonthIcon />
              CALENDARIO
            </button> 
        </Link>
        <div className="items">
          < AccountCircleIcon />
          USUARIO
        </div>
      </div>
    </div>
  )
}

export default Navbar