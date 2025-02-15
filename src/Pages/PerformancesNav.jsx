import { Link } from "react-router-dom";

export default function PerformanceOptimization() {

    return(
        <ul className="*:my-1">
            <li><Link to='/performances/react-memo'><s>React.memo()</s></Link></li>
            <li><Link to='/performances/use-memo'><s>useMemo()</s></Link></li>
            <li><Link to='/performances/use-callback'><s>useCallBack()</s></Link></li>
            <li><Link to='/performances/react-window'><s>React.window()</s></Link></li>
            <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
        </ul>
    )
}

