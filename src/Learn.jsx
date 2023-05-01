import React, { useState } from 'react'

export const Learn = () => {
    const arr = ['name ', "age", " course"]
    const obj = {
        name : "anubhav",
        age  : 25,
        city : "bhopal"
    } 
    const [name, setName] = useState('name')
    const nameFun = () => setName("Vishnu")

    const [age, setAge] = useState('age')
    const ageFun = () => setAge(23)

    const [city, setCity] = useState('city')
    const cityFun = () => setCity('bhopal')

    const [student, setStudent] = useState(arr)
    const arrFun = () => setStudent(['harsh ', 24, " B.Tech"])

    const [objStudent, setObjStudent] = useState(obj)
    const objFun = () => setObjStudent({name:"vishnu", age:20, city:"mumbai"})

    return (
        <>
            <h2>{name}</h2>
            <button onClick={nameFun}>NameFun</button> <br />

            <h2>{age}</h2>
            <button onClick={ageFun}>NameFun</button> <br />

            <h2>{city}</h2>
            <button onClick={cityFun}>NameFun</button> <br />

            <h2>{student}</h2>
            <button onClick={arrFun}>NameFun</button> <br />

            <h2>{objStudent.name}</h2>
            <h2>{objStudent.age}</h2>
            <h2>{objStudent.city}</h2>
            <button onClick={objFun}>NameFun</button> <br />
        </>
    )
}
