import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.css"

const Home = () => {
  return (
    <div className= "home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        home
      </div>
    </div>
  )
}

export default Home