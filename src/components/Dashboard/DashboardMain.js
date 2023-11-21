import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import useAdmin from "../../hooks/Dashboard/useAdmin";
function Dashboard() {
  const [disable, setDisable] = useState(false);
  const { setCustomAmount, customAmount, admin, updatePrice } = useAdmin();
  const thresholdValues = [79, 59, 39, 19];
  const isHigher =
    admin &&
    Object.keys(admin?.amount)
      .slice(1)
      ?.every((value, index) => admin?.amount[value] > thresholdValues[index]);
  function handleRadio(event) {
    if (event.target.id === "no") {
      setDisable(true);
    } else if (event.target.id === "yes") {
      setDisable(false);
    }
  }

  return (
    <div className="w-[600px] text-white ">
      <h1 className="text-Heading font-semibold flex justify-center">
        {`${admin?.name}, ${admin?.location} on Dhun jam`}
      </h1>
      <div className="flex flex-col gap-4 text-small mt-4">
        <div className="flex justify-between  ">
          <h2 className="w-1/2">
            Do you want to charge your customers for requesting songs?{" "}
          </h2>
          <div className="flex gap-3 w-1/2 justify-center ">
            <label
              onChange={(e) => handleRadio(e)}
              className="flex items-center gap-4"
            >
              {/* <div className="flex items-center gap-2"> */}
              <input
                checked={!disable && admin?.charge_customers === true}
                id="yes"
                name="group1"
                type="radio"
              />
              <span>Yes</span>
              <input
                checked={disable || admin?.charge_customers !== true}
                id="no"
                name="group1"
                type="radio"
              />
              <span>No</span>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between w-[600px]">
          <h2 className="w-1/2">Custom song request amount-</h2>
          <div className=" w-1/2 flex justify-center border border-white rounded-xl p-1">
            <input
              onChange={(e) => setCustomAmount(e.target.value)}
              className={`${
                disable ? "bg-greyed" : "bg-dark"
              }  text-white outline-none w-20  pl-5 text-small flex justify-center `}
              type="number"
              disabled={disable}
              value={customAmount}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-1/2">
            Regular song request amounts, "" from high to low-
          </h2>
          <div className="flex justify-between gap-2 w-1/2 ">
            {admin &&
              Object.keys(admin?.amount)
                .slice(1)
                .sort((a, b) => a - b)
                .map((amount) => (
                  <div className="border border-white px-4 py-1  rounded-xl text-small">
                    <h6 className="w-full">{admin?.amount[amount]}</h6>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {!disable && <Graph />}

      <button
        onClick={() => updatePrice()}
        disabled={disable || !isHigher}
        className={`${
          disable ? "bg-greyed" : "bg-purple"
        }  text-small rounded-xl mt-6 p-4 font-semibold w-full `}
      >
        Save
      </button>
    </div>
  );
}

export default Dashboard;
