import { Outlet,Link } from "react-router-dom"
const Lay =()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    </li>
                    </ul>
                    </nav>
                    <Outlet/>
                    </>
    )
}