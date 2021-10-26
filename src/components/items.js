import React, { useState } from "react";


const Items = (props) => {
    const { id, Date, Time, Subject, Availability, incrementCarts, decrementCart, cartData } = props
    const [toggle, setToggle] = useState(false)




    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleIncrementCart = () => {
        incrementCarts()
    }
    const handleDecrementCarts = () => {
        decrementCart()
    }
    const handleCartData = () => {
        const data = {
            Subject: Subject,
            Date: Date,
            Time: Time,
            Availability: Availability,
            id: id
        }
        cartData(data)
    }



    return (


        <tbody className="tbody">
            <tr key={id}>
                <td className="td">{Subject}</td>
                <td className="td">{Date}</td>
                <td className="td">{Time}</td>
                <td className="td">{Availability}</td>
                {toggle ? (
                    <div>
                        <td><button className="btnBooked" onClick={() => {
                            handleToggle()
                            handleDecrementCarts()

                        }}>Booked</button></td>
                    </div>
                ) : (
                    <div>
                        <td><button className="btn" onClick={() => {
                            handleToggle()
                            handleIncrementCart()
                            handleCartData()
                        }}>Book Now</button></td>
                    </div>
                )}

            </tr>

        </tbody>

    )
}
export default Items