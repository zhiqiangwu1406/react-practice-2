import Homepage from "./Homepage";
import Calculator from "./Calculator";
import StopWatch from "./stopwatch";
import SimpleCounter from "./SimpleCounter";
import ToDoList from "./ToDoLIst";
import Services from "./Services";
import Weather from "./Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


  return (<BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage/>}></Route>
              <Route path="/calculator" element={<Calculator/>}></Route>
              <Route path="/stopwatch" element={<StopWatch/>}></Route>
              <Route path="/simplecounter" element={<SimpleCounter/>}></Route>
              <Route path="/todolist" element={<ToDoList/>}></Route>
              <Route path="/services" element={<Services/>}></Route>
              <Route path="/weather" element={<Weather />}></Route>
            </Routes>
            
          </BrowserRouter>
  )
}

export default App
