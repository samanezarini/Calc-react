
function Theme3({onToggle}) {


    return (
        <div className="bg-[#160629] theme" id="theme3">
            <div className="flex justify-center items-center min-h-screen font-bold text-2xl text-[#fcfffd]">
                <div className="w-[26%] h-96">
                    <div className="flex justify-between items-center p-5">
                        {/* <!-- Logo or Title --> */}
                        <div className="text-[#ffe540] text-xl">calc</div>

                        {/* <!-- Theme Toggle Button --> */}
                        <div className="flex items-center">
                            <span className="text-[#ffe540] mr-4 mt-3 text-xs">THEME</span>
                            <div className="flex flex-col">
                                <div className="flex space-x-3 ml-2">
                                    {/* <!-- Numbers 1, 2, 3 --> */}
                                    <span className="text-[#ffe540] text-xs">1</span>
                                    <span className="text-[#ffe540] text-xs">2</span>
                                    <span className="text-[#ffe540] text-xs">3</span>
                                </div>
                                <div className="bg-[#1f0838] rounded-full p-1 relative flex items-center w-16 h-5">
                                    {/* <!-- Toggle Ball --> */}
                                    <div id="toggle-ball"
                                        className="bg-[#00d9d2] w-3 h-3 rounded-full transform transition-transform duration-300 cursor-pointer"
                                        style={{transform: "translateX(40px)"}} 
                                        onClick={onToggle}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Display the result --> */}
                    <div className="flex flex-col">
                        <div className="rounded-md overflow-hidden">
                            <input
                                className="bg-[#1e0836] flex flex-row-reverse p-6 text-[#ffe540] text-4xl w-[22.5rem] font-mono"
                                dir="rtl" type="text" id="result3" disabled />
                        </div>
                    </div>

                    {/* <!-- Buttons --> */}
                    <div className=" bg-[#1e0836] rounded-md mt-4">
                        <div className="grid grid-cols-4 gap-4 p-4">
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{ boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('7')">
                                7
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('8')">
                                8
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('9')">
                                9
                            </button>
                            <button
                                className="bg-[#58077d] text-white hover:bg-[#8131b0] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#bd16f5 0px 3px"}} onclick="clearResult3()">
                                Del
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('4')">
                                4
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('5')">
                                5
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('6')">
                                6
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('+')">
                                +
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('1')">
                                1
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('2')">
                                2
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('-')">
                                3
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('-')">
                                -
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('.')">
                                .
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('0')">
                                0
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('/')">
                                /
                            </button>
                            <button
                                className="bg-[#331b4d] text-[#ffe540] hover:bg-[#6933ab] rounded-md text-center w-[4.5rem] h-10 grid place-items-center"
                                style={{boxShadow: "#87209e 0px 3px"}} onclick="appendToResult3('*')">
                                *
                            </button>
                            <button
                                className="bg-[#58077d] text-white hover:bg-[#8131b0] rounded-md text-center col-span-2 h-10 grid place-items-center"
                                style={{boxShadow: "#bd16f5 0px 3px"}} onclick="calculateResult3()">
                                Result
                            </button>
                            <button
                                className="bg-[#00decf] text-white hover:bg-[#94fffa] rounded-md text-center col-span-2 h-10 grid place-items-center"
                                style={{boxShadow: "#6efaf1 0px 3px"}} onclick="calculateResult3()">
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Theme3