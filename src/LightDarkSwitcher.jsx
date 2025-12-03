// import { useState } from "react";

const LightDarkSwitcher = () => {
    // const [LightDark, setLightDark] = useState(0);

    const handleDark = () => {
        const parentTag = document.querySelector("html");
        if (parentTag.classList.contains("dark")){
            parentTag.classList.remove("dark")
        } else{
            parentTag.classList.add("dark");
        }
    }

    return ( <div className="parent bg-white dark:bg-black">
               <button className="btn text-black dark:text-white" onClick={handleDark}> Light/Dark </button> 
            </div> );
}
 
export default LightDarkSwitcher;