import React from "react";
import {  useSelector } from "react-redux";
const AccordionList = ({ accordionData, handleToggle, toggle }) => {
  const { data } = useSelector((state) => state.postal);
  return (
    <>
     { data[0].PostOffice.map((value)=>
    
        <div className="card" key={value.Name}>
          <div
            className="card-header"
            onClick={() => handleToggle(value.Name)}
            style={{ cursor: "pointer" }}
          >

            <b>
              {value.Name === toggle ? "-" : "+"} {value.Name}
            </b>
          </div>
          {value.Name === toggle ? (
            <div className="card-body">
                <h4>BranchType:- {value.BranchType}</h4>
                <h4>Block:- {value.Block}</h4>
                <h4>District:- {value.District}</h4>
                <h4>Division:- {value.Division}</h4>
                <h4>State:- {value.State}</h4>
                <h4>Region:- {value.Region}</h4>
                <h4>Pincode:- {value.Pincode}</h4>
                <h4>DeliveryStatus:- {value.DeliveryStatus}</h4>
                <h4>dfadfadf:- {"adsfadfasdf"}</h4>

            </div>
          ) : (
            ""
          )}
        </div>

      )}
    </>
  );
};

export default AccordionList;
