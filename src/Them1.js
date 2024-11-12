import { evaluate } from "mathjs";
import { useState } from "react";

function Theme1() {
    let [result, setResult] = useState('')
    let [hasDot, setHasDot] = useState(false)

    let operators = ['+', '-', '*', '/']

    const checkInput = (text) => {
        if (text === '×') return '*'
        if (text === '÷') return '/'
        return text
    }

    const clickHandler = (e) => {
        let input = checkInput(e.target.innerText);
        if (input === '.') {
            if (hasDot === true) return
            else setHasDot(true)
        }

        if (operators.includes(input)) {
            setHasDot(false)
        }

        setResult(result + input)
    }

    const backSpaseBtn = () => {
        if (result.endsWith('.'))
            setHasDot(false)
        setResult(result.slice(0, -1))
    }

    const clearBtn = () => {
        setResult('')
        setHasDot(false)
    }

    const equalBtn = () => {
        setResult(String(evaluate(result)))
        setHasDot(false)
    }


    return (
        <main className="bg-[#3a4764] theme  " id="theme1">
            <div className="flex justify-center items-center min-h-screen font-bold text-2xl text-[#fcfffd]">
                <div className="w-[26%] h-96">
                    <div className="flex justify-between items-center p-5">
                        {/* <!-- Title --> */}
                        <div className="text-white text-xl">calc</div>

                        {/* <!-- Theme Toggle Button 1 --> */}
                        <div className="flex items-center">
                            <span className="text-white mr-4 mt-3 text-xs">THEME</span>
                            <div className="flex flex-col">
                                <div className="flex space-x-3 ml-2">
                                    {/* <!-- Numbers 1, 2, 3 --> */}
                                    <span className="text-white text-xs">1</span>
                                    <span className="text-white text-xs">2</span>
                                    <span className="text-white text-xs">3</span>
                                </div>
                                <div className="bg-gray-800 rounded-full p-1 relative flex items-center w-16 h-5">
                                    {/* <!-- Toggle Ball --> */}
                                    <div
                                        className="bg-red-400 w-3 h-3 rounded-full transform transition-transform duration-300 cursor-pointer" 
                                    id="toggle-ball"
                                    style={{ transform: "translateX(0)" }}
                                    itemID="toggle-ball-1"
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Display the result --> */}
                <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                        <div
                            className="bg-[#182033] flex flex-row-reverse p-6 text-4xl w-[22.5rem] h-20 text-right leading-10"
                            type="text"
                            id="result1"
                            disabled
                        >
                            {result}
                        </div>
                    </div>
                </div>
                {/* <!-- Buttons --> */}
                <div className=" bg-[#182033] rounded-md mt-4 ">
                    <div className="grid grid-cols-4 gap-4 p-4 place-items-center">
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c]  hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid"
                            style={{ boxShadow: "rgba(240, 194, 223, 0.4) 0px 3px" }}
                            onClick={clickHandler}
                        >
                            7
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid"
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            8
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            9
                        </button>
                        <button
                            className="bg-[#637199] text-white hover:bg-[#a2b2e0] leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#414d6e 0px 3px" }}
                            onClick={backSpaseBtn}
                        >
                            C
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            4
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white rounded-md leading-10 text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            5
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            6
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            +
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            1
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            2
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            3
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            -
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            .
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}>
                            0
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            ÷
                        </button>
                        <button
                            className="bg-[#ebe4dd] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-[4.5rem] h-10 grid "
                            style={{ boxShadow: "#b0a5a2 0px 3px" }}
                            onClick={clickHandler}
                        >
                            ×
                        </button>
                        <button
                            className="bg-[#637199] text-white hover:bg-[#a2b2e0] leading-10 rounded-md text-center col-span-2 w-40 h-10"
                            style={{ boxShadow: "#414d6e 0px 3px" }}
                            onClick={clearBtn}
                        >
                            Clear
                        </button>
                        <button
                            className="bg-[#d14030] text-[#464b5c] hover:bg-[#fa6c5c] leading-10 rounded-md text-center col-span-2 w-40 h-10"
                            style={{ boxShadow: "#942519 0px 3px" }}
                            onClick={equalBtn}
                        >
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </main >
    )
}
export default Theme1