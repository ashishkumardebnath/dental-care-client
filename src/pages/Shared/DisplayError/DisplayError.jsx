import { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const error = useRouteError()
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <p className="text-red-500">Something went wrong!</p>
            <p className="text-red-400">{error.statusText || error.message}</p>
            <h3 className="text-3xl">Please <Link><button onClick={handleLogOut}>Sign Out</button></Link> & login back.</h3>
        </div>
    );
};

export default DisplayError;