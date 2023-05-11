import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link className='tit' to={"/"}>
        <h1>Tienda Tec</h1>
      </Link>
        
            <ul>
                <li>
                  <NavLink className={"navli"} to={"/"}>
                  Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"navli"} to={`/categoria/1`}>
                  Monitores
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"navli"} to={`/categoria/2`}>
                    Notebooks
                  </NavLink>
                  </li>
                <li>
                  <NavLink className={"navli"} to={`/categoria/3`}>
                    Pc
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"navli"} to={`/categoria/4`}>
                    Perifericos
                  </NavLink>
                </li>
            </ul>
        
        <CardWidget/>
    </header>
  )
}

export default NavBar
