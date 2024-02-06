import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const ProtectecRoute = ({children, redirectTo}) => {

    const { currentUser } = useSelector((state) => state.user);

    return currentUser ? children : <Navigate to={redirectTo}/>;
};

export default ProtectecRoute;