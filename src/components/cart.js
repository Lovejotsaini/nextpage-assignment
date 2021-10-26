import React, { useState, useEffect } from "react";


const Cart = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const result = JSON.parse(localStorage.getItem('cart')) || []
        setData(result)
    }, [])

    const handleDelete = (id) => {
        const newData = data.filter((ele) => {
            return ele.id !== id
        })
        console.log('newd', newData)
        setData(newData)

    }

    return (
        <div>
            <table className="carttable" border="1">
                {data.map((ele, i) => {
                    if (i < 3) {
                        return (

                            <tbody className="tbody" >
                                <tr key={ele.id}>
                                    <td>{ele.Subject}</td>
                                    <td>{ele.Date}</td>
                                    <td>{ele.Time}</td>
                                    <td>{ele.Availability}</td>
                                    <td>
                                        <button className="btn" onClick={() => {
                                            handleDelete(ele.id)
                                        }}>delete</button>
                                    </td>
                                </tr>
                            </tbody>




                        )
                    }
                })}
            </table>
            <button className="backbtn" onClick={() => {
                const confirmWarning = window.confirm('Warning! Your data may lost')
                if (confirmWarning) {
                    props.history.push('/header')
                }
            }}>Back To Home page</button>
        </div>
    )
}

export default Cart