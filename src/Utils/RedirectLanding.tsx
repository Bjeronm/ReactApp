import { Navigate } from "react-router-dom";

export default function RedireccinarLanding() {
    return <Navigate  to={{pathname: '/'}} />
}