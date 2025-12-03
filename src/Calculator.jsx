import { useState } from "react";


const Calculator = () => {

    const [display, setDisplay] = useState("");
    const [calculateValue, setCalculateValue] = useState("");

    const handleButton = (value) => {
        let displayValue;
        if (value=== '*'){
            displayValue = '×';
        } else if (value === '/'){
            displayValue = '÷';
        } else if (value === '/100'){
            displayValue = '%';
        } else if (value === 'neg'){
            setDisplay('(-(' + display + '))');
            setCalculateValue('-(' + calculateValue + ')');
            return;
        } else if (value === '**'){
            displayValue = '^';
        } else if (value === '**2'){
            displayValue = '^2';
        } else{
            displayValue = value;
        }
        setDisplay(display+ displayValue);
        setCalculateValue(calculateValue + value);

    }
    
    const handleDelete = () => {
        const newDisplay = display.slice(0, display.length-1);
        let newCalculateDisplay;
        if (display.includes("%")){
            newCalculateDisplay = calculateValue.slice(0, calculateValue.length-4)
        } else {
            newCalculateDisplay = calculateValue.slice(0, calculateValue.length-1)
        }
        setDisplay(newDisplay);
        setCalculateValue(newCalculateDisplay)
    }

    const handleDeleteAll = () => {
        setDisplay("");
        setCalculateValue("");
    }

    const calculate = () => {
        try {const result = eval(calculateValue);
        setDisplay(result.toString());
        setCalculateValue(result.toString())}
        catch{setDisplay(EvalError.name)}
    }



    const handlekey = (e) => {
        console.log(e.key)
        switch(e.key){
            case "Backspace":
                handleDelete();
                return
            case "Delete":
                handleDeleteAll();
                return;
            case "1":
                handleButton(1);
                return;
            case "2":
                handleButton(2);
                return;
            case "3":
                handleButton(3);
                return;
            case "4":
                handleButton(4);
                return;
            case "5":
                handleButton(5);
                return;
            case "6":
                handleButton(6);
                return;
            case "7":
                handleButton(7);
                return;
            case "8":
                handleButton(8);
                return;
            case "9":
                handleButton(9);
                return;
            case "0":
                handleButton(0);
                return;
            case ".":
                handleButton('.');
                return;
            case "+":
                handleButton('+');
                return;
            case "-":
                handleButton('-');
                return;
            case "*":
                handleButton('*');
                return;
            case "/":
                handleButton('/');
                return;
            case "(":
                handleButton('(');
                return;
            case ")":
                handleButton(')');
                return;
            case "^":
                handleButton("**");
                return;
            // case "^2":
            //     handleButton("**2");
            //     return;
            case "%":
                handleButton('/100');
                return;
            case 'Enter':
                calculate();
                return;
            

        }
    }

    return ( 
        <div className="w-{100vw} h-{100vh}  mx-20 my-4 p-4 flex justify-center gap-[200px] items-center" tabIndex={0} onKeyDownCapture={handlekey}>
            <div className="min-w-[600px] min-h-[250px] border-2 p-4 rounded-2xl text-5xl" >
                {display}
            </div>


            <div className="flex flex-col gap-1.5 border-2 rounded-2xl p-4">
                <div className="row0 flex justify-around gap-1 items-center">
                    <button className="noBtn" onClick={()=>handleButton('(')}>&#40;</button>
                    <button className="noBtn" onClick={()=>handleButton(')')}>&#41;</button>
                    <button className="noBtn" onClick={()=>handleButton('**')}>^</button>
                    <button className="noBtn" onClick={()=>handleButton('**2')}>^2</button>
                </div>
                <div className="row1 flex justify-around gap-1">
                    <button className="noBtn !text-5xl" onClick={handleDelete}>Del</button>
                    <button className="noBtn !text-5xl" onClick={handleDeleteAll}>AC</button>
                    <button className="noBtn" onClick={()=>handleButton('/100')}>%</button>
                    <button className="noBtn" onClick={()=>handleButton('+')}>+</button>
                </div>
                <div className="row2 flex justify-around gap-1">
                    <button className="noBtn" onClick={()=>handleButton(7)}>7</button>
                    <button className="noBtn" onClick={()=>handleButton(8)}>8</button>
                    <button className="noBtn" onClick={()=>handleButton(9)}>9</button>
                    <button className="noBtn" onClick={()=>handleButton('-')}>-</button>
                </div>
                <div className="row3 flex justify-around gap-1">
                    <button className="noBtn" onClick={()=>handleButton(4)}>4</button>
                    <button className="noBtn" onClick={()=>handleButton(5)}>5</button>
                    <button className="noBtn" onClick={()=>handleButton(6)}>6</button>
                    <button className="noBtn" onClick={()=>handleButton('*')}>×</button>
                </div>
                <div className="row4 flex justify-around gap-1">
                    <button className="noBtn" onClick={()=>handleButton(1)}>1</button>
                    <button className="noBtn" onClick={()=>handleButton(2)}>2</button>
                    <button className="noBtn" onClick={()=>handleButton(3)}>3</button>
                    <button className="noBtn" onClick={()=>handleButton('/')}>÷</button>
                </div>
                <div className="row4 flex justify-around gap-1">
                    <button className="noBtn !text-5xl" onClick={()=>handleButton("neg")}>+/-</button>
                    <button className="noBtn" onClick={()=>handleButton(0)}>0</button>
                    <button className="noBtn" onClick={()=>handleButton('.')}>.</button>
                    <button className="noBtn" onClick={()=>(calculate())}>=</button>
                </div>

            </div>

        </div>
     );
}

export default Calculator;