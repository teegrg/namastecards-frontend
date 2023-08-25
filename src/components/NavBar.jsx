import { Link } from "react-router-dom"

function NavBar(){
    return (
        <>
        <nav>
           <Link to="/"><h1>Namaste Cards</h1></Link> 
            <div className="nav-end">
                <Link to="/"><div>Home</div></Link>
                <Link to="/cards"><div>Collection</div></Link>
                <Link to="/cards/new"><div>Customize</div></Link>
            </div>
        </nav>
        <hr />
        </>
    )
};

export default NavBar;