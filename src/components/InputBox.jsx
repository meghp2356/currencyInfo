import React,{ memo } from "react";

function InputBox({
  label,
  option = [],
  currency,
  setCurrency,
  amount,
  setAmount,
  isReadOnly = false,
}) {
  return (
    <>
      <div className=" flex flex-row justify-between bg-slate-100 rounded-xl flex-wrap">
        <div className=" p-2 m-2">
          <p className="m-2 text-lg text-slate-600">{label}</p>
          <input
            type="number"
            className=" outline-none rounded-xl px-2 p-1 w-full bg-transparent"
            value={Number(amount)}
            onChange={(e) => setAmount(Number(e.target.value))}
            readOnly={isReadOnly}
          />
        </div>
        <div className=" p-2 m-2">
          <p className="m-2 text-lg text-slate-600 w-full">CurrencyType</p>
          <select
            className=" outline-none rounded-xl px-2 p-2 py-2 w-[100%] "
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {option.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default memo(InputBox)
