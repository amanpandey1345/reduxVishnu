import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";

const Tables = () => {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [addShow, setAddShow] = useState(false);
  const [adduSubmit, setAdduSubmit] = useState(false);
  const [editId, setEditId] = useState("")
  const [msg, setMsg] = useState(false)

  const adds = () => { 

    setAddShow(!addShow);
  };
  const dels = (id) => {
    localStorage.setItem("list",JSON.stringify(data.filter((e)=>{
      return e.id !== id;
    })))
    setData(JSON.parse(localStorage.getItem("list")))
  };
  const upds = (id) => {
    setAdduSubmit(!adduSubmit);
    const uds = data.find((e)=>{
      return e.id === id ;
    })
    console.log(uds.FirstName);
    setEditId(uds.id)
    setFirstName(uds.FirstName)
    setLastName(uds.LastName)
    setUserName(uds.Username)

  };
  const addSubmits = () => {
    if(!firstName||!LastName||!userName) return setMsg(true);
    localStorage.setItem(
      "list",
      JSON.stringify([
        ...data,
        { "id":new Date().getTime().toString(),"FirstName": firstName, "LastName": LastName, "Username": userName },
      ])
    );
    setFirstName("");
    setLastName("");
    setUserName("");
    setAddShow(false);
  };
  const upSubmits = () => {

    localStorage.setItem(
      "list",
      JSON.stringify(data.map((e)=>{
        if(e.id === editId){
          return {...e ,"FirstName": firstName, "LastName": LastName, "Username": userName }
        }
        return e;
      }))
    );
    setFirstName("");
    setLastName("");
    setUserName("");
    setEditId("");
    setAdduSubmit(false);
  };

  useEffect(() => {

    if(JSON.parse(localStorage.getItem("list")) === null){
      localStorage.setItem("list",JSON.stringify([]))

    }

    setData(JSON.parse(localStorage.getItem("list")))


  }, [addShow,editId])

  
  

  return (
    <>
      <div className="post-data">
        <div className="hr">
          <h3>Users List</h3>
          <button onClick={adds}>➕</button>
        </div>
        {addShow && (
          <>
          
          <div className="fm">

            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={addSubmits}>Add</button>
          </div>
          {
            msg && <span className="msg">All Fields are Required!!!</span>
          }
          </>
        )}
        {adduSubmit && (
          <div className="fm">

            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              value={LastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              value={userName}
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={upSubmits}>Update</button>
          </div>
        )}
        <div className="tbs">


        <Table bordered hover variant="dark" >
          <thead>
            <tr>
              <th width="60">SNo.</th>
              <th width="160">First Name</th>
              <th width="160">Last Name</th>
              <th width="160">Username</th>
              <th width="160">Acton</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((v,index)=>
            <tr key={v.id}>
              <td>{index+1}</td>
              <td>{v.FirstName}</td>
              <td>{v.LastName}</td>
              <td>{v.Username}</td>
              <td>
                <button className="btn1" onClick={()=>dels(v.id)}>
                  🗑
                </button>
                <button className="btn2" onClick={()=>upds(v.id)}>
                  📝
                </button>
              </td>
            </tr>
              )
            }
          </tbody>
        </Table>
        </div>
      </div>
    </>
  );
};

export default Tables;
