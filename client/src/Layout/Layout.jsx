import './Layout.css'
import { Outlet, Link } from 'react-router-dom';



function Layout() {

  return (
      <div className='Layout'>
        <nav>
          <ul>
            <li className='Home'>
              <Link to='/'>Home</Link>
            </li>
            <li className='EventCreator'>
              <Link to='/event/new'>Add Event</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
       </div>
  )
}

export default Layout
