import { Link } from "react-router-dom";

function NavBar() {
    return(<aside className="routerNav">
                <Link to="/">My macros</Link>
                <Link to="/create-macro">Create macro</Link>
                <Link to="/contact">Contact</Link>
            </aside>);
}

export default NavBar;