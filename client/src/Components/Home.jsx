import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const [tableDate, setTableDate] = useState([])

    useEffect(() => {
        // const baseURL = "http://localhost:2121/"
        const baseURL = "/"
        axios.post(`${baseURL}test`, {}).then(rsp => {
            console.log("Response of Api is ", rsp.data);
            setTableDate(rsp.data)
        })
    }, [])

    const handleEvent = () => {
        navigate("/about")
    }
    return (
        <>
            <div>I am from Home Page React Project.</div>
            <button onClick={handleEvent}>About Us</button>
            <table border={1} cellSpacing={0} cellPadding={10} style={{ margin: "100px" }}>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    {
                        (tableDate && tableDate.length > 0) ? tableDate.map(item => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                </tr>
                            )
                        }) : null
                    }
                </tbody>
            </table>
        </>
    )
}

export default Home