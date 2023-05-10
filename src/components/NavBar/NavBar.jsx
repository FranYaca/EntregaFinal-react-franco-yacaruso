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
                  <Link className={"navli"} to={"/"}>
                  Home
                  </Link>
                </li>
                <li>
                  <Link className={"navli"} to={`/categoria/1`}>
                  Monitores
                  </Link>
                </li>
                <li>
                  <Link className={"navli"} to={`/categoria/2`}>
                    Notebooks
                  </Link>
                  </li>
                <li>
                  <Link className={"navli"} to={`/categoria/3`}>
                    Pc
                  </Link>
                </li>
                <li>
                  <Link className={"navli"} to={`/categoria/4`}>
                    Perifericos
                  </Link>
                </li>
            </ul>
        
        <CardWidget/>
    </header>
  )
}

export default NavBar
