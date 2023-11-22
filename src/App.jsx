import { useCallback, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("usd");
  const [currencyTo, setCurrencyTo] = useState("inr");
  const [valueFrom, setValueFrom] = useState(0);
  const [valueTo, setValueTo] = useState(0);

  const a = useCurrencyInfo(currencyFrom);

  const convert = useCallback(() => {
    setValueTo((a[currencyTo] * valueFrom).toFixed(0));
  },[currencyFrom,currencyTo,valueFrom])

  const swap = ()=>{
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)
    setValueFrom(valueTo)
    setValueTo(valueFrom)

  }
  return (
    <>
      <div 
        className=" w-full h-screen bg-slate-900 flex justify-center items-center bg-cover  bg-center"
        style={{backgroundImage:`url('https://images.pexels.com/photos/2816903/pexels-photo-2816903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}
        >
        <div className=" w-[90vw] rounded-2xl md:w-[600px] flex flex-col backdrop-blur-sm bg-white/30">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className=" m-3">
              <InputBox
                label="From"
                option={Object.keys(a)}
                currency={currencyFrom}
                setCurrency={setCurrencyFrom}
                amount={valueFrom}
                setAmount={setValueFrom}
              />
            </div>
            <div className=" flex w-full items-center justify-center relative">
              <button 
                className=" p-2 bg-blue-800 rounded-xl text-white px-10 hover:bg-violet-700"
                onClick={swap}
              >
                SWAP
              </button>
            </div>
            <div className=" m-3">
              <InputBox
                label="To"
                option={Object.keys(a)}
                currency={currencyTo}
                setCurrency={setCurrencyTo}
                amount={valueTo}
                isReadOnly={true}
              />
            </div>

            <div className=" flex items-center justify-center m-4">
              <button
                type="submit"
                className=" bg-blue-800 w-full p-4 rounded-xl text-white hover:bg-violet-800"
                onClick={convert}
              >
                CONVERT {currencyFrom.toUpperCase()} TO {currencyTo.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
