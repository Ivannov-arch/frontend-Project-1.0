import { Link } from "react-router-dom";

export default function Advanced() {

    return(
        <ul className="*:my-1">
            <li><Link to='/use-custom-hooks'>useCustomHook()</Link></li>
            <li><Link to='/error-boundaries'>ErrorBoundary</Link></li>
            <li><Link to='/performance-optimization'>Performance Optimization</Link></li>
            <li><Link to='/state-managers'>State Managers</Link></li>
            <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
        </ul>
    )
}

