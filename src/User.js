import React, { Component, useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'

export default function User() {

    const [data, setData] = useState([])

    const [mode,setMode] = useState('online')


    useEffect(() => {
        let Url = "https://jsonplaceholder.typicode.com/posts";
        fetch(Url).then((res) => {
            res.json().then((result) => {
                //console.log("result", result)
                setData(result)
                localStorage.setItem("users",JSON.stringify(result))
            })
        }).catch(err => {
            // alert("catch block")
            let collection= localStorage.getItem("users")
            setData(JSON.parse(collection))

            setMode('offline')

        })

    }, [])


    return (

        <div>
            <h1>user</h1>

            <div>
                {
                    mode === 'offline'?
                    <div> yoy are offline</div>:
                    <div>online</div>
                }
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,i) => (
                            <tr>
                                <td>{i+1}</td>
                                <td>{item.title}</td>

                            </tr>

                        ))
                    }

                </tbody>
            </Table>
        </div>
    );
}





