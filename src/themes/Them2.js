import { evaluate } from "mathjs"
import { useState } from "react"

function Theme2({ onToggle }) {
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
        <div className="bg-[#e6e6e6]">
            <div className="flex justify-center items-center min-h-screen font-bold text-2xl text-[#fcfffd]">
                <div>
                    <div className="flex justify-between items-center mb-3 px-2 w-72 h-10 lg:w-[22.5rem] lg:h-10 md:w-[22.5rem] md:h-10">
                        <div className="text-gray-950 text-xl">calc</div>
                        <div className="flex items-center">
                            <span className="text-gray-950 mr-4 mt-3 text-xs">THEME</span>
                            <div className="flex flex-col">
                                <div className="flex space-x-3 ml-2">
                                    <span className="text-gray-950 text-xs">1</span>
                                    <span className="text-gray-950 text-xs">2</span>
                                    <span className="text-gray-950 text-xs">3</span>
                                </div>
                                <div className="bg-[#d6cecf] rounded-full p-1 relative flex items-center w-16 h-5">
                                    <button id="toggle-ball"
                                        className="bg-[#c75300] w-3 h-3 mr-10 rounded-full transform transition-transform duration-300 cursor-pointer"
                                        style={{ transform: "translateX(20px)" }}
                                        onClick={onToggle}>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Display the result */}
                    <div className="flex flex-col">
                        <div className="rounded-md overflow-hidden w-72 lg:w-[22rem] md:w-[22rem]">
                            <div
                                className="bg-[#d4cdcd] flex flex-row-reverse text-[#36362b] p-6 text-4xl h-20 lg:w-full lg:h-20 text-right leading-10"
                                type="text"
                                id="result1"
                                disabled>
                                {result}
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="bg-[#d4cdcd] rounded-md mt-4 w-72 lg:w-[22rem] md:w-[22rem]">
                        <div className="grid grid-cols-4 gap-4 p-4 w-72 lg:w-[22rem] md:w-[22rem]">
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                7
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                8
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                9
                            </button>
                            <button
                                className="bg-[#378187] text-white hover:bg-[#62b5bd] leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#1c6166 0px 3px" }} onClick={backSpaseBtn}>
                                C
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                4
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                5
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                6
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                +
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                1
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                2
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                3
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                -
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                .
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                0
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                ÷
                            </button>
                            <button
                                className="bg-[#e6e5e1] text-[#464b5c] hover:bg-white leading-10 rounded-md text-center w-14 h:10 lg:w-[4.5rem] lg:h-10 md:w-[4.5rem] md:h-10 grid"
                                style={{ boxShadow: "#b0a5a2 0px 3px" }} onClick={clickHandler}>
                                ×
                            </button>
                            <button
                                className="bg-[#378187] text-white hover:bg-[#62b5bd] leading-10 rounded-md text-center col-span-2 h-10 grid"
                                style={{ boxShadow: "#1c6166 0px 3px" }} onClick={clearBtn}>
                                Clear
                            </button>
                            <button
                                className="bg-[#c75300] text-white hover:bg-[#ff8b38] leading-10 rounded-md text-center col-span-2 h-10 grid"
                                style={{ boxShadow: "#873800 0px 3px" }} onClick={equalBtn}>
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Theme2