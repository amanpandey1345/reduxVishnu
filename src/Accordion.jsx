import React from "react";

const Accordion = ({ accordionData, handleToggle, toggle }) => {
  return (
    <>

    
        <div className="card" key={accordionData.BRANCH}>
          <div
            className="card-header"
            onClick={() => handleToggle(accordionData.BRANCH)}
            style={{ cursor: "pointer" }}
          >

            <b>
              {accordionData.BRANCH === toggle ? "-" : "+"} {accordionData.BRANCH}
            </b>
          </div>
          {accordionData.BRANCH === toggle ? (
            <div className="card-body">
                <h4>BANK:- {accordionData.BANK}</h4>
                <h4>ADDRESS:- {accordionData.ADDRESS}</h4>
                <h4>BRANCH:- {accordionData.BRANCH}</h4>
                <h4>STATE:- {accordionData.STATE}</h4>
                <h4>CONTACT:- {accordionData.CONTACT}</h4>
                <h4>BANKCODE:- {accordionData.BANKCODE}</h4>
                <h4>CENTRE:- {accordionData.CENTRE}</h4>
                <h4>CITY:- {accordionData.CITY}</h4>
                <h4>DISTRICT:- {accordionData.DISTRICT}</h4>
                <h4>STATE:- {accordionData.STATE}</h4>
                <h4>IFSC:- {accordionData.IFSC}</h4>
                <h4>IMPS:- {accordionData.IMPS}</h4>
                <h4>ISO3166:- {accordionData.ISO3166}</h4>
                <h4>MICR:- {accordionData.MICR}</h4>
                <h4>NEFT:- {accordionData.NEFT}</h4>
                <h4>RTGS:- {accordionData.RTGS}</h4>
                <h4>SWIFT:- {accordionData.SWIFT}</h4>
                <h4>UPI:- {accordionData.UPI}</h4>

            </div>
          ) : (
            ""
          )}
        </div>


    </>
  );
};

export default Accordion;
