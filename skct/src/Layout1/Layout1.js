import { Outlet,Link } from "react-router-dom"

const Layout1 = () => {
  return (
    <div><>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                </li>
                </ul>
                </nav>
                <Outlet/>
                </></div>
  )
}

export default Layout1