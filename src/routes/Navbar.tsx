import { NavLink } from 'react-router-dom';
import { routes } from './routes';
export const Navbar = () => {
  return (
    <nav className='tabbed'>
        <ul>
          {
              routes.map(({name, path, id}) => (
                  <NavLink to={path} key = {id}
                  className={(navData)=>navData.isActive?'navbar-item active':'navbar-item'} >
                      {name}
                  </NavLink>
              ))
          }
        </ul>
      </nav>
  )
}
