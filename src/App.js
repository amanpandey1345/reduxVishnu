import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ifsc, postal } from "./redux/actions/postalAction";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./App.css"
import AccordionList from "./AccordionList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Accordion from "./Accordion";

function App() {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.postal);
  const { loading1, data1,error } = useSelector((state) => state.ifsc);

  const [pincode, setPincode] = useState();
  const [ifscCode, setIfscCode] = useState();
  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };     

  const handleSubmit = () => {
    dispatch(postal(pincode));
  };
  const handleSubmit1 = () => {
    dispatch(ifsc(ifscCode));
  };

// console.log(data[0].PostOffice);
console.log(data1);

  return (
    <div className="App">
      <div className="box1">
      <h1>Pincode Information</h1>



      <div className="input">
        <input
          type="text"
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Search PinCode"
        />
        <button  disabled={pincode && pincode.length === 6 ? false : true} onClick={() => handleSubmit()}  >Search</button>
      </div>

      <div className="post-data">

        {loading ? (  
          <div className="log">
          <ScaleLoader
          color={"blue"}
          loading={loading}
          // cssOverride={override}
          className="log"
          size={250} 
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
        ) : data && data[0]?.PostOffice !== null ? (
          // data[0]?.PostOffice?.map((e, index) => <h1 key={index}>{e.Name}</h1>)
          <AccordionList accordionData={data[0].PostOffice} handleToggle={handleToggle} toggle={toggle} />
        ) : (
          data && <h1>{data[0]?.Message}</h1>
        )}
      </div>
      </div>

      <div className="box1">
      <h1>Ifsc Code Information</h1>

      <div className="input">
        <input
          type="text"
          onChange={(e) => setIfscCode(e.target.value)}
          placeholder="Search IfscCode"
        />
        <button disabled={ifscCode && ifscCode.length === 11 ? false : true} onClick={() => handleSubmit1()}>Search</button>
      </div>
      <div className="post-data">
        {loading1 ? (
                    <div className="log">
          <ScaleLoader
          color={"blue"}
          loading={loading}

          size={250} 
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
        ) : data1 ? (
          <>
          {/* <h1>{data1?.BANK}</h1>
          <h1>{data1?.BRANCH}</h1>
          <h1>{data1?.ADDRESS}</h1>   
          <h1>{data1?.STATE}</h1>   
          <h1>{data1?.CONTACT}</h1> */}
          <Accordion accordionData={data1} handleToggle={handleToggle} toggle={toggle} />
          </>
        ) : (
          data1 && <h1>{error}</h1>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;

