import { Link } from "react-router-dom";

const Services = () => {
    return ( <div>
            <h1 className="text-3xl font-semibold text-blue-400">Here are services available</h1>
            <button className="stopwatchBtn"> <Link to="/" className="boxText">Back to Home</Link></button>
            </div>
 );
}
 
export default Services;