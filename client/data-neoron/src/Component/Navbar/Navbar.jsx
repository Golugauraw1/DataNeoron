import { Link, useLocation,} from 'react-router-dom'
// import dataneronlogo from "../../utills/images/datanerornlogo.png"

const Navbar = () => {
    
    const location = useLocation();

    console.log(location?.pathname)

    return (
        <nav className="bg-white shadow-xl">
            <div className="mx-auto px-4 py-3 flex  items-center">
                <div>
                    <Link to="/">
                        <h1>Home ||</h1>
                    </Link>
                </div>
                
                <div>
                    <Link
                        to="resizable"
                        className={`px-4 py-2 text-black ${location.pathname === "/resizable" ? "text-red-500" : ""
                            }`}
                    >
                        Resizable Box
                    </Link >
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
