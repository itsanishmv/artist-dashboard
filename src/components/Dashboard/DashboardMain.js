import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import { getAdminDetailsQuery } from "./api/AdminDetailsQuery";
function Dashboard() {
  const arr = [199, 499, 599, 699];
  const options = ["yes", "no"];
  const [admin, setAdmin] = useState();
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    async function getAdminDetails() {
      const adminDetails = await getAdminDetailsQuery(4);
      setAdmin(adminDetails.data);
    }
    getAdminDetails();
  }, []);
  function handleRadio(event) {
    console.log(event.target.id);
    if (event.target.id === "no") {
      console.log("executing");
      setDisable(true);
    } else if (event.target.id === "yes") {
      setDisable(false);
    }
  }
  console.log(disable);
  return (
    <div className="w-[600px] text-white ">
      <h1 className="text-Heading font-semibold flex justify-center">
        {`${admin?.name},${admin?.location} on Dhun jam`}
      </h1>
      <div className="flex flex-col gap-4 text-small mt-4">
        <div className="flex justify-between ">
          <h2 className="w-1/2">
            Do you want to charge your customers for requesting songs?{" "}
          </h2>
          <div className="flex gap-3 w-1/2 justify-center">
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
        <div className="flex items-center justify-between">
          <h2 className="w-1/2">Custom song request amount-</h2>
          <div className="w-1/2 flex justify-center">
            <input
              className={`${
                disable ? "bg-greyed" : "bg-dark"
              } rounded-2xl  border border-white text-white outline-none p-2 text-small`}
              type="text"
              disabled={disable}
              value={admin?.amount.category_6}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-1/2">
            Regular song request amounts, "" from high to low-
          </h2>
          <div className="flex justify-center gap-2 w-1/2 ">
            {arr.map((amount) => (
              <div className="border border-white px-2 rounded-md text-small">
                <h6>{amount}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      {!disable && <Graph />}

      <button
        disabled={disable}
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
