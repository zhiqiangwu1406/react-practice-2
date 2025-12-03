import NavBar from "./NavBar";
import { Link } from "react-router-dom";



const Homepage = () => {
    return (<>
                <NavBar/>
                <div className="m-20">
                    <h1 className="text-5xl font-bold">My Practice Programs</h1>
                    <div className="flex my-10 py-10 justify-between gap-4">
                        <div className="box has-hover:shadow has-hover:shadow-amber-500"><Link to="/Calculator" className="boxText">Calculator</Link></div>
                        <div className="box"><Link to="/stopwatch" className="boxText">Stopwatch</Link></div>
                        <div className="box"><Link to="/todolist" className="boxText">To Do List</Link></div>
                        <div className="box"><Link to="/simplecounter" className="boxText">Counter</Link></div>
                        <div className="box"><Link to="/weather" className="boxText">Weather</Link></div>

                    </div>
                </div>
            </> );
}
 
export default Homepage;